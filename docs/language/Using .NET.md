---
description: Taking advantage of .NET with RCaron
---

Since RCaron is a .NET language it is designed to be able to take advantage of libraries written for .NET.
```rcaron
#System.Console:WriteLine('Hello, .NET!');
```
Above you can see a call to the `WriteLine` method on the `System.Console` type. It is a bit unsightly to have to specify the `System.Console` type in it's entirety each time. For this reason the `open` method exists. It works kind of like `using` in C#.
```rcaron  
open 'System';
#Console:WriteLine('Hello, slightly more pretty code!');
```
You can also use extension methods as extension methods in RCaron. Just use the `open_ext` method.
! Arrays in RCaron are created as arrays of `object` and there is currently no implicit conversion between that and for example `Int32[]`, which would implement `IEnumerable<Int32>`. Meaning that you currently can not use LINQ methods, such as `Max`, which do not accept `IEnumerable<TSource>`.
```rcaron
open_ext 'System.Linq';
foreach($val in @(1, 2, 2, 3, 3).Distinct()) {
    print $val;
}
```
## Calling static methods
To call a static method you separate the type and method name using a `:`.
```rcaron
#System.Console:WriteLine('Hello, static method!');
```
## Create new instance of type
You can create a new instance of a .NET type by calling an imaginary `new` static method.
```rcaron
$rng = #System.Random:New(1);
print $rng.Next(100);
```