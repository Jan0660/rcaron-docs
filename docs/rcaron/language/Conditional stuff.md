---
description: The if, else if, else and switch statements
---

# Conditional stuff

## `if` statement

Executes it's code block if the expression in the parentheses evaluates to `true`.

```rcaron
if ($true) { print 'true'; }
if ($false) { print 'false'; }
// Output: true
```

### `else if` and `else`

`else if` and `else` can be used with the `if` statement just as in other normal languages.

## `switch` statement

The `switch` statement is a bit weird in RCaron.

```rcaron
$str = 'fun';
switch ($str) {
    'fun' { print 'fun'; }
    default { print 'default'; }
}
// Output: fun
```
