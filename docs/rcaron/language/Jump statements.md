---
description: return, break and continue
---

# Jump Statements

## `return`

Returns a value or nothing in a function or the global scope. Using `return` without any arguments returns `RCaronInsideEnum.ReturnWithoutValue`.

```rcaron
func Fun() {
    return 1;
}
print Fun();
// Output: 1
```

## `break`

Terminates a loop.

```rcaron
$h = 0;
loop {
    $h = $h + 1;
    if ($h == 5) { break; }
}
print $h;
// Output: 5
```

## `continue`

Continues to the next iteration of a loop.
