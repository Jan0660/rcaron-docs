# Characters Literals

Character literals in RCaron begin with `@'` or `@"` and end with the same quote. They can contain [the same escape sequences as strings](./strings.md#escape-sequences), except for the UTF-32 unicode escapes. They can also of course contain only a single character.

```rcaron
print @'a';
print @'"';
print @"a";
print @"'";
print @'\n';
print @'\u0041';

// but not, this should be highlighted as an error by the language server
print @'\U00000041';
```
