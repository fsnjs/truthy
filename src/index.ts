/** A union of `null` and `undefined`.  */
export declare type Falsy = null | undefined;

/** Safely assert that `arg` is Nullable. */
export function isFalsy(arg: any): arg is Falsy {
    return arg === undefined || arg === null;
}

/** Safely assert that `arg` is NonNullable. */
export function isTruthy<T = any>(arg: T | Falsy): arg is NonNullable<T> {
    return arg !== undefined && arg !== null;
}

/** Safely assert that `arg` is of type `T`. */
export function isTruthyObject<T = any>(
    arg: T | Falsy,
    keys: string[] = []
): arg is NonNullable<T> {
    return (
        isTruthy(arg) &&
        typeof arg === 'object' &&
        keys.every((key) => key in arg)
    );
}

/** Safely assert that `arg` is a `number`. */
export function isTruthyNumber(arg: number | Falsy): arg is number {
    return isTruthy(arg) && typeof arg === 'number';
}

/** Safely assert that `arg` is a `boolean`. */
export function isTruthyBoolean(arg: boolean | Falsy): arg is boolean {
    return isTruthy(arg) && typeof arg === 'boolean';
}
