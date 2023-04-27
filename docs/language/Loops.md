---
description: The for, qfor, foreach, while, dowhile and loop loops
---

# Loops

## The `for` loop

```rcaron
for ($i = 0; $i < 5; $i++) {
    print $i;
}
// Outputs 0 1 2 3 and 4
// $i is still accesible
// Outputs 5
print $i;
```

:::caution
Note that in C# the initializer and iterator can have multiple expressions separated by `,`, RCaron does not support this yet.
:::

- The initializer section(`$i = 0`) is executed only once. It is executed in the current scope, meaning that it is accessible outside the loop body as demonstrated in the example.
- The condition section(`$i < 5`) determines whether the loop should continue or not. If `false` the loop cancels.
- The iterator section(`$i++`) is executed after each execution of the loop body.

### The `qfor` loop

The `for` statement except it uses a single scope for all of the loop body runs. It is unsafe since variables from the previous run of the loop body can be accessed by the next.

## The `foreach` loop

The `foreach` statement executes a code block for each element provided by the enumerator of a type that implements `IEnumerable`.

:::note
The right side of the `foreach` can also be an `IEnumerator`.
:::

:::note
Note the type has to implement `IEnumerable` while C# only requires the type to have a parameterless GetEnumerator and [blablabla](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements#the-foreach-statement).
:::

```rcaron
foreach ($num in @(0, 1, 2, 3)) {
    print $num;
}
// Outputs 0 1 2 and 3
```

## The `while` loop

The `while` statement executes it's body zero or more times as long as it's condition is true.

```rcaron
$n = 0;
while ($n < 4) {
    print $n;
    $n++;
}
// Outputs 0 1 2 and 3
```

## The `dowhile` loop

The `dowhile` statement executes it's body at least once and continues as long as it's condition is true.

```rcaron
$n = 0;
dowhile ($false) {
    print $n;
    $n++;
}
// Outputs 0
```

## The `loop` loop

The `loop` loop continues with no condition. It just continues. Only way to escape out of it is the `break` statement.

```rcaron
$n = 0;
loop {
    print $n;
    if ($n == 5) {
        break;
    }
    $n++;
}
// Outputs 0 1 2 3 4 and 5
```
