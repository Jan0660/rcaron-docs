# Arrays

Arrays can be instantiated in RCaron by using `@` as if it were a method name.

```rcaron
$arr = @(1, 2, 3);
foreach($val in $arr) {
    print $val;
}
// Output: 1, 2 and 3
```

:::caution
Arrays instantiated using `@` are created as arrays of `object` instead of whatever type they could be. RCaron can consume arrays of any type. They just aren't automatically instantiated like that using `@`.
:::
