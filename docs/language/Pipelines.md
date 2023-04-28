# Pipelines

Pipelines in RCaron use the `|` operator. It is used to pipe the result of an expression on the left to the right.

The right side can be a call to an RCaron function or a module method that has a parameter with the `FromPipeline` attribute.

The comments in the following example explain more:

```rcaron
// assign the argument to be accepted to the pipeline with $fromPipeline,
// this is a temporary measure before attributes are implemented,
// if the parameter is not set, then it will default to `RCaron.Parsing.RCaronParser.FromPipelineObject`
func Hell($pipeline = $fromPipeline) {
    if ($pipeline == #RCaron.Parsing.RCaronParser:FromPipelineObject) {
        println '$pipeline is not set';
        return;
    }

    // Enumerate helps us enumerate over an IEnumerable, IEnumerator, Pipeline or just an object we received
    foreach($item in @Enumerate $pipeline) {
        println $item;
    }
}

// EnumeratorRange returns an enumerable whose enumerator returns ints from 0 to 10(exclusive)
// Increment increments each int by 1
// Hell(above) prints each int
EnumeratorRange 0i 10i  | Increment | Hell;
// Outputs 1 2 3 4 5 6 7 8 9 10
```

Also see [Native Pipelines](../shell/Native%20Pipelines.md)(shell only).
