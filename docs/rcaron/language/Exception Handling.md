---
description: The throw method and try, catch and finally blocks
---

# Exception Handling

## The `throw` method

You can use the `throw` method to throw an exception.

```rcaron
throw #System.Exception:new('funny');
// also
throw(#System.Exception:new('funny'));
```

## The `try` block

The try block runs a code block that might throw an exception safely.

```rcaron
try {
    throw #System.Exception:new('funny');
}
print 'did not exit';
// Output: did not exit
```

### The `catch` block

The `try` block can optionally be provided with the `catch` block. The `catch` block will be executed if an exception is thrown with the exception in the `exception` variable.

```rcaron
try {
    throw #System.Exception:new('funny');
}
catch {
    print $exception.Message;
}
// Output: funny
```

### The `finally` block

The `try` block can be optionally provided with the `finally` block. The `finally` block will execute always after the `try` block and the `catch` block. If there is no catch block then the exception is thrown just like in C#.

```rcaron
try {
    throw #System.Exception:new('funny');
}
catch {
    print 'catch';
}
finally {
    print 'finally';
}
// Output:
// catch
// finally

try {
    throw #System.Exception:new('funny');
}
finally {
    print 'finally';
}
// Output: finally

// System.Exception: funny
```
