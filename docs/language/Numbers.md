# Numbers

If a number has a `0x` or `0X` prefix it is parsed as a hexadecimal number.

When a number is written without a decimal point, it is by default of type `long`(`System.Int64`),
when there is a decimal point it is of type `double`(`System.Double`), and when it is a hexadecimal number, it is of type `ulong`(`System.Uint64`) by default.

Numbers can also have suffixes, which are case insensitive. A hexadecimal number cannot have a suffix that would make it a floating point number.

- `I` or `i` - `int`, can also have a `U` or `u` suffix to make it a `uint`
- `L` or `l` - `long`, can also have a `U` or `u` suffix to make it a `ulong`
- `F` or `f` - `float`
- `D` or `d` - `double`
- `M` or `m` - `decimal`

```rcaron
$h = 1; // long
$h = 1L; // long
$h = 1ul; // ulong
$h = 0xdeadbeef; // long
$h = 0xdeadbeefUL; // ulong
$h = 1I; // int

$h = 1.0F; // float
$h = 1.0; // double
$h = 1.0D; // double
$h = 1.0M; // decimal
```
