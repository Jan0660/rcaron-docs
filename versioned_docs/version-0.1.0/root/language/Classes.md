---
description: RCaron classes
---

# Classes

Currently all you can do with classes is properties and functions. Properties are currently only read-write public and can also optionally have a default value. Functions of course have access to the class instance's properties.

```rcaron
class Funny {
    $prop;
    $propWithDefaultValue = 3;
    static $staticProp = 1;

    func Function() {
        print 'prop is' $prop;
        print 'propWithDefaultValue is' $propWithDefaultValue;
    }

    static func StaticFunction($h) {
        $staticProp = $h;
    }
}

// call static function
#Funny:StaticFunction(123);
print 'staticProp is' #Funny:staticProp;
// create new instance of Funny class
$fun = #Funny:new();
$fun.prop = 123;
$fun.Function();
```

:::note
Note that you can not call a class function from outside the class with the keyword plain call [call type](./Call%20Types.md).
:::

:::note
Note that a static property must have a value assigned to it when it is declared. The value must be a constant(number, string, `$false`, `$true`, `$null`).
:::
