---
sidebar_position: 2
---

# Getting Started

RCaron is currently unusable as a shell, a little usable as a scripting language.

## Installation

You can install the RCaron shell as a global tool with the following command, requires .NET 7:

```bash
dotnet tool install -g RCaron.Shell
```

You can then run the shell with the `rcaron` command.

[Also see a guide on configuring the shell](./shell/configuration.md)

## Hello World

```rcaron
print 'Hello World!'
```

You can put this code in a file and run it with `rcaron <file>`, or you can also just start the shell with `rcaron` and then type the code in.

## A bigger example

A simple number guessing game currently looks like this:

```rcaron
// we "open" a .NET namespace with open
open 'System'
// to use a .NET type we start it's name with a '#' and then access it's members with ':'
// from there we access the members of a variable, property or whatever with '.'
// variables don't have to be declared
$number = #Random:Shared.Next(1, 10000)
print 'Guess a number between 1 and 10000'
// 'loop' is a loop that can be exited with 'break'
loop {
    #Console:Write('Your guess: ')
    $guess = #Int32:Parse(#Console:ReadLine())
    // 'print' is a built-in function that prints arguments to the console with a space between them
    print 'You guessed:' $guess
    // operators look normal
    if ($guess < $number) {
        print 'Too low'
    }
    else if ($guess > $number) {
        print 'Too high'
    }
    else {
        print 'You guessed it!'
        break
    }
}
print 'congrats'
```

## Beware

- The `*` and `/` arithmetic operators require a space after them, so `1*2` is invalid, but `1 * 2` is valid. This is because they would end up getting parsed as a path.
- Numbers are parsed as `long` by default, so `1 / 10` ends up being `0`. To get `0.1` you have to write `1.0 / 10.0` or `1 / 10.0` or `1.0 / 10`.
