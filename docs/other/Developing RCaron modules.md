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
