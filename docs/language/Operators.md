---
description: Numeric, logical and boolean operators and the range operator
---

# Operators

Inside RCaron some of these are not even called operators, or they may be but I forgot. But let's just pretend for a second they are.

## Numeric Operators

All numeric operators support the types of `Byte, Char, Decimal, Double, Int16, Int32, Int64, SByte, Single, UInt16, UInt32, UInt64` on both position and on the first position with an `IConvertible` on the second. The `+` operator also supports `String`.

:::caution
Multiplication(`*`) and division(`/`) need a space after them to not be recognized as a path.
:::

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

The range operator was abandoned in favor of the [`range` builtin function](../Built-In%20Functions.md#range).

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
