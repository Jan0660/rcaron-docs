# Native Pipelines

Native [pipelines](../language/Pipelines.md) are pipelines that are implemented in RCaron.Shell and allow you to pipe from/to a native command.

Example(Linux):

```rcaron
ls -a / | grep '\\.';
```

:::caution
Piping anything but a native command to a native command is currently not implemented.
:::

You can currently pipe from a native command to RCaron code, but it currently just passes the output line by line as strings:

```rcaron
func Hell($pipeline = $fromPipeline) {
    if ($pipeline == #RCaron.Parsing.RCaronParser:FromPipelineObject) {
        println '$pipeline is not set';
        return;
    }

    foreach ($item in @Enumerate $pipeline) {
        println $item;
    }
}

cat /home/jan/woo | Hell;
```
