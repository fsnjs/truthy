# Truthy

Exports two type assertion functions and a union type `Falsy` that
that are useful for safely asserting that a variable is or is not null.
In the case of _not null_, the type assertion function `isTruthy<T>`
preserves the type of the variable that is passed into the function.
This is especially useful when applied to filtering `null` or `undefined` values.

## Examples

### Array filtering

```ts
['foo', null, undefined, 'bar'].filter(isTruthy).forEach((val) => {
    // `val` will be typed as a non-nullable string
});
```

### RxJS `filter`

```ts
of('foo', null, 'bar')
    .pipe(filter(isTruthy))
    .subscribe((next) => {
        // 'next' will be typed as a a non-nullable string
    });
```
