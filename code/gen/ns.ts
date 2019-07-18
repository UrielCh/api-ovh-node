
type AA = I0;

export namespace B {
    export interface I1 extends AA {
        f0: string;
    }

    export interface I0 {
        f0: number;
    }
}
export interface I0 {
    f0: string;
}
