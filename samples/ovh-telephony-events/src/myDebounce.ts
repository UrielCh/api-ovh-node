
/**
 * postspone callback by delayMs.
 * if multitiple calls, callback is called every delayMs.
 * 
 * @param callback method to call
 * @param delayMs delay in MS
 */
export function myDebounce(
    callback: (drops: number) => any,
    delayMs?: number,
    upfront?: boolean,
): () => void {
    delayMs = delayMs || 1000;
    let next: NodeJS.Timeout | number | null = null;
    let drops = 0;
    return () => {
        if (next) {
            if (upfront) {
                //callback(drops);
                drops++;// = 0;
            } else {
                drops++;
                return;
            }
        } else if (upfront) {
            // first call upfront
            // console.log(`first call next:${next} upfront:${upfront}`)
            callback(drops);
            drops = 0;
        }

        const prev = next;
        next = setTimeout(() => {
            if (upfront) {
                if (!prev) {
                    next = null;
                }
                //if (!prev)
                //    drops++;
            } else {
                if (!prev) {
                    callback(drops);
                    drops = 0;
                } else {
                    drops++;
                }
                next = null;
            }
        }, delayMs)
    }
}

