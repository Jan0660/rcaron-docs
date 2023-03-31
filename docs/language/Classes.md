---
description: RCaron classes
---

# Classes

Currently all you can do with classes is properties and functions. Properties are currently only read-write public and can also optionally have a default value. Functions of course have access to the class instance's properties.

```rcaron
class Funny {
    $prop;
    $propWithDefaultValue = 3;

    func Function() {
        print 'prop is' $prop;
        print 'propWithDefaultValue is' $propWithDefaultValue;
    }
}

// create new instance of Funny class
$fun = #Funny:new();
$fun.prop = 123;
$fun.Function();
```

:::note
Note that you can not call a class function from outside the class with the keyword plain call [call type](./Call%20Types.md).
:::
