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
*   Every class has responsiblity of only one functionality;
*   Code becomes easier to understand, test and maintain;

### (O)pen-closed Principle
*    “You should be able to extend a class’s behavior without modifying it.” - Robert Martin;
*   Well-tested classes should be extended and not modified;
*   Using abstractions, inheritance or polymorphic interfaces are good ways to comply with this principle;
*   Code becomes easier to maintain and revise;

### (L)iskov Substitution Principle
*   "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it." - Barbara Liskov;
*   Objects of a superclass can be replaced with objects of its subclasses without breaking the application;
*   Ensures and extends the Open-closed principle, because derived classes extend the base class without modifying it;
*   It can slow down development but ensures a smoother experience during updates or extensions to the software;

### (I)nterface Segregation Principle
*   "Many client specific interfaces are better than one general purpose interface." - Robert Martin;
*   Ensures that software is split into independent parts;
*   Allows easier extension of the software;

### (D)ependency Inversion Principle
*   "Depend upon Abstractions. Do not depend upon concretions." - Robert Martin;
*   High-level modules should be easily reusable and unaffected by changes in low-level modules;
*   Modules should depend on abstractions (interfaces);
*   Code becomes more agile, flexible and reusable;

## Repository patern
*   Isolates the data access layer;
*   Allows the application to work with an interface that replicates data collection;
*   Removes the need to deal with database concerns like connections, commands, cursors, or readers;

## Internal Coding guidelines
*   Refer to BA_MeX Wiki;