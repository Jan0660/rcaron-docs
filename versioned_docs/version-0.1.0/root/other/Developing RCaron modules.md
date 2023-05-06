# Developing RCaron modules

## Getting started

1. Create a new class library project targeting .NET 7. This guide goes along with the name `ClassLibrary2`, so remember to change that from the examples.
2. Install the `RCaron` and `RCaron.LibrarySourceGenerator` packages
3. Add a partial class that inherits from `RCaron.IRCaronModule` and has the `Module` attribute:

    ```csharp
    using RCaron;
    using RCaron.LibrarySourceGenerator;

    namespace ClassLibrary2;

    [Module("hello")]
    public partial class HelloModule : IRCaronModule
    {
        [Method("Hello")]
        public void Hello(Motor _, string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }
    }
    ```

4. Build the project
5. Import the module in RCaron:

    ```rcaron
    // importing is currently kind of hell
    $ass = #System.Reflection.Assembly:LoadFrom('/path/to/ClassLibrary2.dll');
    $current_motor.MainFileScope.Modules.Add(#ClassLibrary2.HelloModule:new());
    Hello 'World';
    ```

## Consuming pipeline input

To accept pipeline input, add a parameter with the `FromPipeline` attribute:

```csharp
[Method("Hello")]
public void Hello(Motor _, [FromPipeline] string name)
{
    Console.WriteLine($"Hello, {name}!");
}
```

```rcaron
'pipelines' | Hello;
```

If parameter is of type:

- `IEnumerable` - cannot be accepted from the pipeline, only as an object e.g. `/* IEnumerable */ | Hello;`
- `IEnumerator` - accepts the pipeline's enumerator, which can also be the the IEnumerator returned by the left side of the pipeline
- `Pipeline` - receives the pipeline itself, note the GetEnumerator may be called only once
- `object` or others - method is called for each item in the pipeline

Also see [Native Pipelines](../shell/Native%20Pipelines.md)(shell only) and [Pipelines](../language/Pipelines.md).
