# Design guidelines

## SOLID

*   Design principles used in OOP (Object Oriented Programming);
*   Reduces dependencies;
*   Designs become easier to understand, maintain, and extend;
*   Allows developers to build adaptive, effective, and agile software.
*   The 5 principles are:

### (S)ingle-responsiblity Principle
*   "A class should have one, and only one, reason to change." - Robert Martin;
*   Each class only does one thing;
*   Decouple unrelated functionality and segregate classes;
*   Improves readability, reusability and maintainability;

### (O)pen-closed Principle
*    “You should be able to extend a class’s behavior without modifying it.” - Robert Martin;
*   Well-tested classes should be extended and not modified;
*   Introduce abstractions in front of the code that will eventually change;
*   Isolates code from requeriments changes;

### (L)iskov Substitution Principle
*   "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it." - Barbara Liskov;
*   Objects of a superclass can be replaced with objects of its subclasses without breaking the application;
*   Especially important for code that will be used by others;
*   Subtypes can be safely used instead of their supertypes;

### (I)nterface Segregation Principle
*   "Many client specific interfaces are better than one general purpose interface." - Robert Martin;
*   Ensures that software is split into independent parts;
*   Principle of least knowledge and minimal coupling;
*   Robust design, protects from design mistakes, better readability;

### (D)ependency Inversion Principle
*   "Depend upon Abstractions. Do not depend upon concretions." - Robert Martin;
*   High-level modules should be easily reusable and unaffected by changes in low-level modules;
*   Abstractions invert source code dependencies;
*   Protection from changes, reusability, breaking dependency on external modules;

## Repository patern
*   Isolates the data access layer;
*   Allows the application to work with an interface that replicates data collection;
*   Removes the need to deal with database concerns like connections, commands, cursors, or readers;

## Internal Coding guidelines
*   Refer to BA_MeX Wiki;
