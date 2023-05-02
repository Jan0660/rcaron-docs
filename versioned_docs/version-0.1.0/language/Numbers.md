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

You can also use underscores to make numbers more readable. Note that the first character after a decimal point is not allowed to be an underscore.

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

$h = 1_000_000; // long
$h = 1_______; //long
$h = 1.0_0; // double
$h = 1.0_0D; // double
$h = 0x_____dead_beef____ul; // long

$h = 0x_____; // error
```
