
Why we need constructor  in Angular component class?

In Angular, a constructor is added to a TypeScript class primarily for dependency injection and if any initialization needs to carried
before angular life cycle events 

1.Dependency Injection
2.Initialization & any configuration 

Angular life cycle hooks
----------------------
Angular, lifecycle hooks are methods that allow you to tap into the lifecycle of a component or directive. These hooks provide points in the component's or directive's lifecycle where you can perform actions or execute code. This enables you to manage the behavior of your application at different stages


Note
public and private are access modifiers that define the visibility of class members (properties and methods).


Public 

When a member (property or method) is marked as public, it means that it can be accessed from outside the class. This includes accessing it from other classes, instances of the class, or anywhere else in your code.


class Example{
    public x;

    constructor(x){
        this.x= x
    }


    public doSomething(){
       console.log(this.x)
    }
}

const instance1 = new Example(42);
console.log(instance1.x)


2. Private 

When a member is marked as private, it means that it can only be accessed within the class where it is defined. It is not accessible from outside the class

class Example{
    private x;

    constructor(x){
        this.x= x
    }


    public doSomething1(){
       console.log(this.x)
    }

     private doSomething2(){
       console.log(this.x)
    }
}

const instance1 = new Example(42);
console.log(instance1.x)  //Error x is private and cannot be accessed from outside the class

instance.doSomething2() //ERror doSomething2 private and cannot be accessed from outside the class


public and private access modifiers are important for defining the visibility of class members within components, services, directives

privateProperty cannot be accessed directly in the template.



Agenda ------  2/12/2023

Complex data binding - object and arrays
correcting the boostrap addition to angular project
correcting the typechecking process 
why package.json has symbols prefixed to package version

Directives and pipes




----Angular bundling

Bundling and Minification:

Bundling involves combining multiple files into a single file or a smaller set of files. This reduces the number of HTTP requests needed to load the application.
Minification involves removing unnecessary characters such as white spaces and comments from the code to further reduce file sizes.
Tools like Webpack are commonly used for bundling and minification.


What are symbols in package.json against packages/depdendencies
---------------------------

In a package.json file, the ^ and ~ symbols are used in version numbers to indicate the range of versions that your project is compatible with. These symbols are part of semantic versioning (SemVer) conventions.

Major version . Minor version . Patchversion
1.2.0

(npm, yarn)

1.^ (caret): The caret is used to specify a compatible update. When you use ^ followed by a version number (e.g., ^1.2.3), it means that your project is compatible with any version that is greater than or equal to 1.2.3  but less than the next major version.

project will work from 1.2.3 -1.9.9  but not with 2.0.0

2.~ (tilde): The tilde is used to specify a compatible update with a more restrictive constraint than the caret. When you use ~ followed by a version number (e.g., ~1.2.3), it means that your project is compatible with any version that is greater than or equal to 1.2.3
but less than next minor verison

project will work from 1.2.3 -1.2.9  but not with 1.3.0


package-lock.json - dependency auditing
--------------------------

he package-lock.json file is automatically generated by npm when dependencies are installed or updated.
It provides a detailed, version-locked representation of the project's dependencies and their sub-dependencies.
The package-lock.json file is used to lock down the versions of dependencies, ensuring that the same versions are installed on different machines.
When someone else clones your project and runs npm install, npm uses the information in package-lock.json to install the exact versions of dependencies specified during development.


class commands
---------------------
ng generate interface models/user.model
ng generate interface user.model


What are interfaces
--------------------------
Interfaces are a way to define the structure or shape of objects in TypeScript. They are used for type-checking and ensuring that objects conform to a specific structure



Directives - entities which extend properties of HTML tags
-----------------------------------
classified into two types 
1. Builtin 
    1.1 Strutural -enities which are helping in modification of structure of DOM elments
            *ngIf - for hinding and showing content
            *ngFor  - for iteration through content
             [ngWitch] - can be sued with ot without other directives to leverage conditional statements

    1.2 Attribute
2. Custom


