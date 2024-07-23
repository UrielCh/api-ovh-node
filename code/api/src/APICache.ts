import type { ICacheOptions, ICacheSilot, SlotConstructor } from "@ovh-api/common";

export interface ICacheEntry {
    /**
     * expiration timestamp
     **/ 
    exp: number;
    path: string;
    size: number;
    value: any;
}

export class CacheSilot implements ICacheSilot {
    size: number = 0;
    count: number = 0;
    index: { [key: string]: ICacheEntry } = {};
    values: ICacheEntry[] = [];

    constructor(public template: string, public options: ICacheOptions) {
    }

    async flush(): Promise<void> {
        this.index = {};
        for (const value of this.values) {
            delete value.value;
        }
        this.values = [] ;
        this.count = 0;
        this.size = 0;
    }

    async discard(path: string): Promise<boolean> {
        const value = this.index[path];
        if (value && value.exp) {
            this.count--;
            this.size -= value.size;
            value.size = value.exp = 0;
            value.value = undefined;
            return true;
        }
        return false;
    }

    async get(path: string): Promise<any | undefined> {
        const value = this.index[path];
        if (value) {
            if (Date.now() < value.exp)
                return value.value;
            else // force cleanup
                this.cleanup()
        }
        return undefined;
    }

    async cleanup(): Promise<void> {
        const now = Date.now();
        while (this.values.length) {
            let value: ICacheEntry = this.values[0];
            if (
                value.exp < now ||
                (this.options.size && this.size > this.options.size) ||
                (this.options.count && this.size > this.options.count)
            ) {
                value = this.values.shift()!;
                if (value.exp) {
                    this.count--;
                    this.size -= value.size;
                    value.value = undefined;
                }
                continue;
            }
            break;
        }
    }

    async store(path: string, value: any, size: number): Promise<boolean> {
        this.discard(path);
        if (this.options.size && size > this.options.size) {
            return false;
        }
        const ttl = (this.options.ttl || 3600) * 1000;
        const entry = {
            exp: Date.now() + ttl,
            path, size, value
        } as ICacheEntry;
        this.index[path] = entry;
        this.values.push(entry);
        this.count++;
        this.size += size;
        if (this.options.size || this.options.count)
            this.cleanup();
        return true;
    }
}

export class APICache {
    private slotClass: SlotConstructor;
    private index: { [key: string]: ICacheSilot } = {};

    constructor(options?: {slotClass?: SlotConstructor}) {
        if (options && options.slotClass)
            this.slotClass = options.slotClass;
        else
            this.slotClass = CacheSilot;
    }
    /**
     * enable cache
     * @param template
     * @param options
     */
    cache(template: string, options: ICacheOptions): void {
        const silot = this.index[template];
        if (silot)
            silot.options = options;
        else if (options.silotClass) 
            this.index[template] = new options.silotClass(template, options);
        else
            this.index[template] = new this.slotClass(template, options);
    }

    /**
     * disable cache
     * @param template
     */
    async disable(template: string) {
        const silot = this.index[template];
        if (silot) {
            await silot.flush();
            delete this.index[template];
        }
    }

    async store(template: string, path: string, value: any, size: number): Promise<boolean> {
        const silot = this.index[template];
        if (silot)
            return silot.store(path, value, size);
        return false
    }

    async get(template: string, path: string): Promise<any | undefined> {
        const silot = this.index[template];
        if (silot)
            return silot.get(path);
    }

    async discard(template: string, path: string) {
        const silot = this.index[template];
        if (silot)
            return silot.discard(path);
    }

    async flush(template: string) {
        const silot = this.index[template];
        if (silot)
            await silot.flush();
    }

    /**
     * get internal silot for advance actions
     * @param template 
     */
    silot(template: string) : ICacheSilot | undefined {
        return this.index[template];
    }
}