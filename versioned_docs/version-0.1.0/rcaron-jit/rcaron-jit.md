# RCaron.Jit

A project to compile RCaron to LINQ expression trees. Which then allows them to be compiled to IL, JITed and executed at speeds close to C# code.

This comes at the price of "dry" run times, which include needing to compile the code to an expression tree, then into IL, then JITing. For code that runs only once this is significantly slower than using the interpreter.

## Usage

Currently it has no built-in way to be used from RCaron. You can manually build and load the `RCaron.Jit` project and use the functions in the `RCaron.Jit.Hook` type.

## Issues

- All variables have to be boxed to `object` in order to be assigned
- The `Compiler.CompileToBlock` method is a little messy, and uses local methods, which end up creating heap allocations for closures

## Not Implemented

- [Pipelines](../language/Pipelines.md), because they'd still be painful for performance

## Performance

The SimpleMathOp benchmark is `$h = 2 * (2 + 3);`

The Fibbonaci benchmark is:

```rcaron
// it literally runs only 2 cycles of Fibonacci
$a = 0; $b = 1; $c = 0;
for($i = 0; $i < 2; $i++) {  
    $c = $a + $b;
    $a = $b;
    $b = $c;
}
```

Ran on power plan "Power Saver" on my laptop.

```bash
BenchmarkDotNet=v0.13.2, OS=Windows 11 (10.0.25300.1000)
Intel Core i7-10750H CPU 2.60GHz, 1 CPU, 12 logical and 6 physical cores
.NET SDK=7.0.200-preview.22628.1
  [Host]    : .NET 7.0.0 (7.0.22.51805), X64 RyuJIT AVX2
  MediumRun : .NET 7.0.0 (7.0.22.51805), X64 RyuJIT AVX2

Job=MediumRun  PowerPlanMode=00000000-0000-0000-0000-000000000000  IterationCount=15
LaunchCount=2  WarmupCount=10
```

| Method                          |         Mean |       Error |      StdDev |  Ratio | RatioSD | Allocated | Alloc Ratio |
| ------------------------------- | ------------:| -----------:| -----------:| ------:| -------:| ---------:| -----------:|
| SimpleMathOpFull                |   4,878.9 ns |    68.12 ns |    97.70 ns |   1.00 |    0.00 |    3936 B |        1.00 |
| SimpleMathOpParsed              |     203.5 ns |     4.50 ns |     6.74 ns |   0.04 |    0.00 |      96 B |        0.02 |
| FibonacciFull                   |  14,268.9 ns |    79.44 ns |   113.94 ns |   2.93 |    0.04 |    9768 B |        2.48 |
| FibonacciParsed                 |   2,797.4 ns |    11.55 ns |    17.28 ns |   0.57 |    0.01 |    1248 B |        0.32 |
| SimpleMathOpFull_Jit            | 420,898.9 ns | 1,451.15 ns | 2,127.07 ns |  86.31 |    1.65 |   13282 B |        3.37 |
| SimpleMathOpParsed_Jit          |     366.7 ns |     2.04 ns |     3.06 ns |   0.08 |    0.00 |      48 B |        0.01 |
| FibonacciFull_Jit               | 746,974.3 ns | 2,817.50 ns | 4,217.10 ns | 153.21 |    3.47 |   25313 B |        6.43 |
| FibonacciParsed_Jit             |     185.2 ns |     0.54 ns |     0.79 ns |   0.04 |    0.00 |     264 B |        0.07 |
| SimpleMathOpFull_JitInterpret   |  14,516.7 ns |   155.73 ns |   233.08 ns |   2.98 |    0.03 |    7296 B |        1.85 |
| SimpleMathOpParsed_JitInterpret |     543.7 ns |     3.48 ns |     4.88 ns |   0.11 |    0.00 |     192 B |        0.05 |
| FibonacciFull_JitInterpret      |  48,200.6 ns |   151.12 ns |   221.51 ns |   9.88 |    0.22 |   18905 B |        4.80 |
| FibonacciParsed_JitInterpret    |     857.6 ns |     3.01 ns |     4.41 ns |   0.18 |    0.00 |     336 B |        0.09 |
