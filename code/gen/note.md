current build fixed by adding:

```typescript
/**
 * START API /order Models
 * Source: https://eu.api.soyoustart.com/1.0/order.json
 */
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
```
in packages-us/me/index.ts