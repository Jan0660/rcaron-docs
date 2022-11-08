---
description: Numeric, logical and boolean operators and the range operator
---

# Operators

Inside RCaron some of these are not even called operators, or they may be but I forgot. But let's just pretend for a second they are.

## Numeric Operators

All numeric operators support the types of `Byte, Char, Decimal, Double, Int16, Int32, Int64, SByte, Single, UInt16, UInt32, UInt64` on both position and on the first position with an `IConvertible` on the second. The `+` operator also supports `String`.

- `+` - Sum
- `-` - Difference
- `*` - Multiplication
- `/` - Division
- `%` - Modulo

## Comparison Operators

There are the following comparison operators:

- `==` - Equal
- `!=` - Not equal
- `>` - Greater than
- `<` - Less than
- `>=` - Greater than or equal
- `<=` - Less than or equal

## Logical Operators

The left and right side of the logical operators must evaluate to `Boolean`.

- `&&` - Logical AND
- `||` - Logical OR

## Range Operator

The range operator gets resolved to the `RCaron.RCaronRange` class. It has the `long` `Start` and `End` properties and implements `IEnumerable`.

```rcaron
foreach ($i in 0..5) {
    print $i;
}
// Outputs 0 1 2 3 and 4
```

## Unary Operation

These are actually not operators but can be used in a line of code. The way to use them is as follows:

```rcaron
$var = 1;
// increments
$var++;
print $var; // 2
// decrements
$var--;
print $var; // 1
```
