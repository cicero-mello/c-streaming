export type Stringified<T> = {
    [K in keyof T]: string
}
