import { ICacheOptions } from "@ovh-api/common";

export interface ICacheEntry {
    // expiration
    exp: number;
    path: string;
    size: number;
    value: any;
}

export class CacheSilot {
    size: number = 0;
    count: number = 0;
    index: { [key: string]: ICacheEntry } = {};
    values: ICacheEntry[] = [];

    constructor(public template: string, public options: ICacheOptions) {
    }

    flush(path: string): boolean {
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

    get(path: string): any | undefined {
        const value = this.index[path];
        if (value) {
            if (Date.now() < value.exp)
                return value.value;
            else // force cleanup
                this.cleanup()
        }
        return undefined;
    }

    cleanup(): void {
        const now = Date.now();
        while (this.values.length) {
            let value = this.values[0];
            if (
                value.exp < now ||
                (this.options.size && this.size > this.options.size) ||
                (this.options.count && this.size > this.options.count)
            ) {
                // const old = 
                value = this.values.shift() as ICacheEntry;
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

    store(path: string, value: any, size: number): boolean {
        this.flush(path);
        if (this.options.size && size > this.options.size) {
            return false;
        }
        const ttl = (this.options.ttl || 3600) * 1000;
        const entry = {
            // expiration
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
export class Cache {
    index: { [key: string]: CacheSilot } = {};
    constructor() {
    }

    cache(template: string, options: ICacheOptions) {
        const silot = this.index[template];
        if (silot)
            silot.options = options;
        else
            this.index[template] = new CacheSilot(template, options);
    }

    store(template: string, path: string, value: any, size: number): boolean {
        const silot = this.index[template];
        if (silot)
            return silot.store(path, value, size);
        return false
    }

    get(template: string, path: string) : any | undefined {
        const silot = this.index[template];
        if (silot)
            return silot.get(path);
    }

    flush(template: string, path: string) {
        const silot = this.index[template];
        if (silot)
            return silot.flush(path);
    }

    silot(template: string) : CacheSilot | undefined {
        return this.index[template];
    }
}