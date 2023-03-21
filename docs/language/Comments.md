# Comments

Single line comments start with `//`:

```rcaron
// This is a comment
```

Multi line comments start with `/#` and end with `#/`,
just think of it as if the C-style `//` and POSIX-style `#` comments were combined to form this multi line comment:

```rcaron
/# This is a
multi line
comment #/
```

## Shebang

A shebang can also be used in RCaron.

```rcaron
#!/usr/bin/env rcaron
print 'normal code'
```
