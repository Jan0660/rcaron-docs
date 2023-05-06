# Configuration

Your profile is located at `~/.rcaron/profile.rcaron`. You can use this to configure the shell and run code on startup.

## Autocomplete

Autocomplete is enabled by default. It has the following properties on `$prompt_callbacks`:

- `EnableAutoCompletions`: `bool` - Enables or disables autocomplete
- `MaxCompletions`: `int` - The maximum amount of completions to get
- `ThrowOnCompletionError`: `bool` - If `true` the shell will throw an exception and die if an error occurs while getting completions

## Bracket Pair Colorization

Bracket pair highlighting is enabled by default. It affects the round(`()`), square(`[]`) and curly(`{}`) brackets.

It has the following properties on `$prompt_callbacks`:

- `HighlightBracketPairs`: `bool` - Enables or disables bracket pair colorization
- `ColorizeBracketsOutOfLimit`: `bool` - If `true` bracket that are out of the `NestedPairLimit` will be colored, if `false` they will be colored white
- `NestedPairLimit`: `int` - The maximum amount of nested pairs
- `PairErrorFormat`: `PrettyPrompt.Highlighting.ConsoleFormat` - The format for unpaired brackets
- `PairColors`: `PrettyPrompt.Highlighting.AnsiColor[]` - The colors for the pairs, loops around if there are more pairs than colors

## Syntax Highlighting

Setting up syntax highlighting is currently complicated.

For this example you need to get the `syntaxes/rcaron.tmLanguage.json` file from the [rcaron-vscode](https://github.com/Jan0660/rcaron-vscode) repository,
and `dark_plus.json` and `dark_vs.json` from the `extensions/theme-defaults/themes` directory in the [vscode](https://github.com/microsoft/vscode) repository.

```rcaron
$registry = #RCaron.Shell.Prompt.LocalRegistryOptions:new()
$registry.GrammarPaths.Add('source.rcaron', 'C:\\Users\\Jan\\source\\rcaron-vscode\\syntaxes\\rcaron.tmLanguage.json')
$registry.DefaultThemePath = 'C:\\Users\\Jan\\source\\vscode\\extensions\\theme-defaults\\themes\\dark_plus.json'
$registry.ThemePaths.Add('./dark_vs.json', 'C:\\Users\\Jan\\source\\vscode\\extensions\\theme-defaults\\themes\\dark_vs.json')
$prompt_callbacks.UseTextMate($registry)
```

## Prompt

You can set a function that returns a string to be used as the prompt with `Set-Prompt`.

Example:

```rcaron
func Funny() {
    return 'lol'
}
Set-Prompt Funny
```

### Using oh-my-posh

Due to [an issue in PrettyPrompt](https://github.com/waf/PrettyPrompt/issues/247) ANSI escape codes make the prompt not work correctly.
This can be worked around by removing them using Regex.

You can use the following code in your profile, note this does not work with a transient prompt, you need to have `oh-my-posh` installed and replace `$themePath` with the path to your theme.

```rcaron
#System.AppDomain:CurrentDomain.Load('System.Diagnostics.Process');
#System.AppDomain:CurrentDomain.Load('System.Text.RegularExpressions');

func Prompt() {
    $startInfo = #System.Diagnostics.ProcessStartInfo:new();
    $startInfo.FileName = 'oh-my-posh';
    $themePath = '~/.poshthemes/jan.omp.json';
    $startInfo.Arguments = 'print primary --shell rcaron --pwd ' + #Environment:CurrentDirectory + ' --config ' + $themePath + ' -w=' + #System.Console:WindowWidth.ToString();
    $startInfo.UseShellExecute = $false;
    $startInfo.StandardOutputEncoding = #System.Text.Encoding:UTF8;
    $startInfo.RedirectStandardOutput = $true;
    $process = #System.Diagnostics.Process:Start($startInfo);
    $process.WaitForExit()
    $output = $process.StandardOutput.ReadToEnd();
    $lines = $output.Split('\n');
    for($i = 0; $i < $lines.Length - 1; $i++){
        print $lines[$i];
    }
    $final = #System.Text.RegularExpressions.Regex:Replace($lines[$lines.Length - 1], '\u001b\\[[0-9;]*m', '');
    $final = #System.Text.RegularExpressions.Regex:Replace($final, '\u001b\\].*\a', '');
    return $final;
}

Set-Prompt 'Prompt';
```

### Aliases

You can set executable aliases with `Set-ExecAlias`, this currently only works with the executable name.

```rcaron
// (Linux)
Set-ExecAlias 'list' 'ls'
list
```

You can also retrieve the set aliases with `Get-ExecAlias`:

```rcaron
Set-ExecAlias 'list' 'ls'
print (@Get-ExecAlias 'list')
```
