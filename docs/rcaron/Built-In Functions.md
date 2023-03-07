---
description: 'Built-In Functions that are not part of modules'
---

# Built-In Functions

## print

Prints arguments to the console seperated by a space.

## println

Prints arguments to the console, each on a new line.

## Conversions

- `string` - to `string`
- `float` - to `float`
- `int32` - to `Int32`
- `int64` - to `Int64`

## globalget

Gets a global variable. Only has one argument which is expected to be a `string`.

## globalset

Sets a global variable. Has two arguments, the first is the name of the variable and is expected to be a `string`. The second is the value to set the variable to.

## throw

[Throws an exception](./language/Exception%20Handling#the-throw-method)

## range

Creates an instance of the `RCaron.RCaronRange` class. It has the `long` `Start` and `End` properties and implements `IEnumerable`. It can currently only be used with arguments of type `long`.

```rcaron
// prints 0 1 2 3 4 5 6 7 8 9
foreach ($i in range(0, 10)) {
    print $i;
}
```
