## Data Binding

[Go to Root](README.md)

1. ### What is Data Binding?

Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data.

There are four forms of data binding(divided as 3 categories):

- From Component to Template:
  - Interpolation {{value}}: Adds the value of a property from the component.
    Syntax: <li>Name: {{ user.name }}</li> or <img src=’{{user.img}}’/>
  - Property binding [property]="user.name": The value is passed from the component to the specified property or simple HTML attribute.
    Note: When setting an element property to a non-string data value, you must use property binding.
    Syntax: <button [disabled]="!loginForm.valid">Hello
- From Dom to Component (event)="function": When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component.
  Syntax: <button (click)="logout()"></button>

- Two way data binding: Two-way data binding allows to have the data flow both ways.
  Syntax: <input type="email" [(ngModel)]="user.email">

2. ### Difference between html attribute vs Dom?

Dom: DOM stands for Document Object Model. When a browser loads a web page, the browser creates a Document Object Model of that page.

- Attributes are defined by HTML, whereas properties are defined by the DOM.
- Attributes initialize DOM properties. Once the initialization completes, the attributes job is done.
- Property value can be changed but attribute values are always the same.
- The DOM represents HTML as a tree structure of tags. Every tree node is an object.

3. ### What is Attribute-binding?

Sometimes we want to bind some attribute according to property binding or interpolation and we get some errors. Example: <th colspan="{{ 2}}">....</th> or <th [ colspan ]="2">....</th>. This is because we do not have a corresponding property in the DOM for colspan attribute. To solve this we used Attribute-binding.
Syntax: </th> or <th [ attr.colspan ]="2">....</th> or<th attr.colspan="{{ 2}}">....</th>

4. ### What is Style-Binding?

Style binding is used to set a style of a view element. We can set inline styles with style binding.We can use style property with dashes or Camelcase format like background-color or backgroundColor

- [ style.width.px]="100", //unit must be included within []
- [style]="propertyName"

Note: We can bind style with NgClass Directive.

5. ### What is ClassBinding?

Class binding is used to set a class property of a view element. We can add and remove the CSS class names from an element's class attribute with class binding.
Syntax:

- [class.className]="className"
- <div class="myClass" [class]="myClassBinding">Setting all classes with binding</div>

Note : We can add class using NgClass Directive

6. ### Template Reference Variable:

Template Reference variable often a reference to a DOM element within a template.
We use # to declare a template reference variable.

- #name
- ref-name

7. ### Template Expression Operator:

- Pipe: |
- Safe navigation operator: ?
- Not null assertion: !
- Type casting: $any()
