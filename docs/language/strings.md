# Strings

You currently make strings using single quotes(`'`).

```rcaron
print 'this is a string'
```

## Escape sequences

You can use escape sequences in strings, they are started with the backslash character(`\`).

```rcaron
print 'this is a string with a pretty \r\n newline'
```

- `\'` - single quote
- `\\` - backslash
- `\0` - null
- `\a` - alert
- `\b` - backspace
- `\f` - form feed
- `\n` - newline
- `\r` - carriage return
- `\t` - horizontal tab
- `\v` - vertical tab

Then we also have the unicode escape codes. The one start with `\u` takes 4 he digits and the one started with `\U` takes 8 hex digits.

```rcaron
print '\u0041' # A
```
