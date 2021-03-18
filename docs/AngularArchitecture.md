## Angular Architecture

[Go To Root](README.md)

1.  ### What is Angular?

    Angular is a TypeScript-based open-source front-end platform that makes it easy to build applications with in web/mobile/desktop. The major features of this framework such as declarative templates, dependency injection, end to end tooling, and many more other features are used to ease the development.

2.  ### What is typescript?

    TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language. You can install it globally as npm install -g typescript

3.  ### What are the key components of Angular?

    Component: Angular Component encapsulates the data, the HTML Mark-up, and the logic required for a view.
    Modules: In Angular, a module is a container. In angular, a module is a mechanism to group components, services, directives, pipes. An application is divided into logical pieces and each piece of code is called a "module" which performs a single task.
    Template: This represents the views of an Angular application.
    Service: It is used to create components which can be shared across the entire application.
    Metadata: This can be used to add more data to an Angular class.

4.  ### What is Metadata?

    Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators.

5.  ### What is a decorator?

    With decorators we can configure and customise our classes at design time. It is implemented as functions. The name of the decorator starts with @ symbol following by brackets and arguments. The decorator provides metadata to angular classes, property, value, method, etc. and decorators are going to be invoked at runtime.

    4 types of decorators.

    - Class Decorators: @Component,@Injectable, @Pipe @Directive and @NgModule
    - Property Decorators: @Input and @Output (These two decorators are used inside a class)
    - Method Decorators: @HostListener (This decorator is used for methods inside a class like a click, mouse hover, etc.)
    - Parameter Decorators: @Inject (This decorator is used inside class constructor).

    ```ts
    // parameter decorators
    import { Component, Inject } from "@angular/core";
    import { MyService } from "./my-service";

    @Component({
      selector: "my-component",
      template: "<div>Parameter decorator</div>",
    })
    export class MyComponent {
      constructor(@Inject(MyService) myService) {
        console.log(myService); // MyService
      }
    }
    ```

6.  ### What is a component and describe component decorator?

    Component: Angular Component encapsulates the data, the HTML Mark-up, and the logic required for a view.

    Component Decorator:The @Component decorator in angular provides metadata to a component that determines how to process, instantiate and use the component at runtime.

    - selector: [ ]- The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
    - inputs:[‘name’,’id:custId’]-
    - outputs:['everySecond', 'fiveSecs:everyFiveSeconds']-
    - Template:string- inline view
    - templateUrl:[]-URL in an external file that contains a template for the view.
    - Style:string- inline style
    - stylesUrl: [ ]-URL list for style sheets that will be applied to the view of this component.
    - encapsulation:ViewEncapsulation.[ None |Native|]
    - changeDetection:ChangeDetectionStrategy.[OnPush|Default]. Each Angular component has an associated change detector, which is created at application startup time. We can explicitly create a change detector.
      - OnPush: sets the strategy to CheckOnce
      - Default: sets the strategy to CheckOnce
    - preserveWhiteSpaces:boolean- default false. Remove text node unwanted qhite space.
      - False: remove unwanted space in the dom’s text node
      - True: not remove white space

    Note: You can override the default behavior to preserve whitespace characters in certain fragments of a template.just use ngPreserveWhitespaces

7.  ### What is Module and Describe NgModule?

    In Angular, a module is a container. In angular, a module is a mechanism to group components, services, directives, pipes. An application is divided into logical pieces and each piece of code is called a "module" which performs a single task.

    NgModule: An NgModule is a collection of metadata describing components, directives, services, pipes, etc. When you add these resources to the NgModule metadata, Angular creates a component factory, which is just an Angular class that churns out components.

    ```ts
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { AppComponent } from "./app.component";

    @NgModule({
      imports: [BrowserModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
      providers: [],
      exports: [],
    })
    export class AppModule {}
    ```

    NgModules are built with metadata.

    - declarations - Declare views to make them privately available in this module.
    - exports - Makes the declared view public so they can be used by other modules.
    - imports - This is where you import other modules.
    - providers - Defines services that can be injected into this module’s views.
    - bootstrap - The component used to launch the app, the AppComponent by default. All apps must have at least one

8.  ### Why use multiple NgModules?

    Multiple NgModules provides two potential benefits.
    It keeps business logic organized. Try putting 100 resources in the default app module and see what happens.
    It opens the possibility for lazy loading via the router.

9.  ### Describe the types of NgModules?

    - Features - Related business logic that can be packaged into a single concern.
    - Routing - Used to manage routes. Should not declare anything.
    - Core/Service - Modules that only contain services/providers.
    - Widget/Shared- Components you use everywhere. Loading spinners, social media icons, etc.

10. ### Service:

    A service is used when a common functionality needs to be provided to various modules. Services allow for greater separation of concerns for your application and better modularity by allowing you to extract common functionality out of components.

    ```ts
    import { Injectable } from "@angular/core";
    import { Http } from "@angular/http";

    @Injectable({
      // The Injectable decorator is required for dependency injection to work
      // providedIn option registers the service with a specific NgModule
      providedIn: "root", // This declares the service with the root app (AppModule)
    })
    export class RepoService {
      constructor(private http: Http) {}

      fetchAll() {
        return this.http.get("https://api.github.com/repositories");
      }
    }
    ```

    The above service uses Http service as a dependency.

11. ### What is a provider?

    A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency(aka services created).

    ```js
    import { Injectable } from "@angular/core";

    @Injectable({
      providedIn: "root", //Angular provide the service in root injector
    })
    export class MyService {}
    ```

12. ### What is the recommendation for provider scope?

    You should always provide your service in the root injector unless there is a case where you want the service to be available only if you import a particular @NgModule.

13. ### How do you restrict provider scope to a module?

    It is possible to restrict service provider scope to a specific module instead making it available to the entire application. There are two possible ways to do it.

    Using providedIn in service:

    ```ts
    import { Injectable } from "@angular/core";
    import { SomeModule } from "./some.module";

    @Injectable({
      providedIn: SomeModule,
    })
    export class SomeService {}
    ```

    Declare provider for the service in module:

    ```ts
    import { NgModule } from "@angular/core";

    import { SomeService } from "./some.service";

    @NgModule({
      providers: [SomeService],
    })
    export class SomeModule {}
    ```

14. ### Service Decorator:@Injectable({})

    Decorator that marks a class as available to be provided and injected as a dependency.
    providedIn: 'root' that make service available in the root module.

15. ### What is Polyfills in typescript?

    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

16. ### How do you provide a singleton service?

    There are two possible ways to provide a singleton service.

    Set the providedIn property of the @Injectable() to "root". This is the preferred way(starting from Angular 6.0) of creating a singleton service since it makes your services tree-shakable.

    ```ts
    import { Injectable } from "@angular/core";

    @Injectable({
      providedIn: "root",
    })
    export class MyService {}
    ```

    Include the service in root module or in a module that is only imported by root module. It has been used to register services before Angular 6.0.

    ```ts
    @NgModule({
    ...
    providers: [MyService],
    ...
    })
    ```

17. ### Can I share services using modules?

    No, it is not recommended to share services by importing modules. i.e Import modules when you want to use directives, pipes, and components only. The best approach to get a hold of shared services is through 'Angular dependency injection' because importing a module will result in a new service instance.

18. ### What is angular CLI?

    Angular CLI(Command Line Interface) is a command line interface to scaffold and build angular apps using node js style (commonJs) modules. You need to install using below npm command,
    npm install @angular/cli@latest

    Below are the list of few commands, which will come handy while creating angular projects

    - Creating New Project: ng new
    - Generating Components, Directives & Services: ng generate/g The different types of commands would be,
    - ng generate class my-new-class: add a class to your application
    - ng generate component my-new-component: add a component to your application
    - ng generate directive my-new-directive: add a directive to your application
    - ng generate enum my-new-enum: add an enum to your application
    - ng generate module my-new-module: add a module to your application
    - ng generate pipe my-new-pipe: add a pipe to your application
    - ng generate service my-new-service: add a service to your application

19. ### What is NgZone?

    Angular provides a service called NgZone which creates a zone named angular to automatically trigger change detection when the following conditions are satisfied.
    When a sync or async function is executed.
    When there is no microTask scheduled.

20. ### What is Angular Universal?

    Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package. Recently Angular Universal is integrated with Angular CLI.

21. ### What is AOT and JIT?

    Ahead of Time compilation(AOT): Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the --aot option with the ng build or ng serve command as below,

    - ng build --aot
    - ng serve --aot
      Note: The ng build command with the --prod meta-flag (ng build --prod) compiles with AOT by default.

    Just In Time(JIT): Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands. i.e, the below commands used for JIT compilation,

    - ng build
    - ng serve

22. ### Why do we need a compilation process?

    The Angular components and templates cannot be understood by the browser directly. Due to that Angular applications require a compilation process before they can run in a browser. For example, In AOT compilation, both Angular HTML and TypeScript code are converted into efficient JavaScript code during the build phase before the browser runs it.

23. ### What are the advantages with AOT?

    Below are the list of AOT benefits,

    - Faster rendering: The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
    - Fewer asynchronous requests: It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
    - Smaller Angular framework download size: Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
    - Detect template errors earlier: Detects and reports template binding errors during the build step itself
    - Better security: It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.

24. ### What are the ways to control AOT compilation?

    You can control your app compilation in two ways,

    - By providing template compiler options in the tsconfig.json file
    - By configuring Angular metadata with decorators

25. ### What are the two phases of AOT?

    The AOT compiler works in three phases,

    - Code Analysis: The compiler records a representation of the source
    - Code generation: It handles the interpretation as well as places restrictions on what it interprets.
    - Validation: In this phase, the Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates.

26. ### Can I use arrow functions in AOT?

    No, Arrow functions or lambda functions can’t be used to assign values to the decorator properties.

27. ### What are macros?
    The AOT compiler supports macros in the form of functions or static methods that return an expression in a single return expression.
