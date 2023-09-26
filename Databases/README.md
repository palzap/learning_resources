# SQL vs. NoSQL Databases

## SQL (Structured Query Language) Database
*   Relational databases;
*   Data is organized in a table like maner;
*   Easily matches data by using common characteristics (name, age, etc...);
*   Single server type of database, scalability is dependent on hardware upgrades (RAM, CPU);
*   Easier to code SQL queries, meaning that the needed expertise to interact with this type of database is lower;
*   ACID (Atomicity, Consistency, Isolation, and Durability) compliance;

## NoSQL (Not Only SQL) Database
*   Non-relational databases;
*   Can store any type of data without the constraint of the table like scheme;
*   Easier to scale and more versatile to manage;
*   Multiple node share system, this means scalability can be done horizontally by adding more servers without the need to upgrade older ones;
*   Since data is unstructured, querying data on this type of database requires a higher expertise;
*   BASE (Basic Availability, Soft state, and Eventual consistency) model;

# ACID compliance
*   Set of properties for database transactions;
*   Guarantees data validity;
*   A transaction is a set of database operations that satisfy this compliance;
*   There are four characteristics:

### (A)tomicity
*   Transactions are treated as single units;
*   Transactions are indivisible, they either succeed or fail completely;
*   Prevents partial updates to the database;

### (C)onsistency
*   Data must meet all validation rules;
*   Data is only written to the database after all rules have been met;
*   After a successful write, any read from the database is updated; 

### (I)solation
*   Transactions may occur concurrently;
*   Ability to concurrently process multiple transactions without one affecting another;
*   Different levels of isolation affect the concurrency effects:
    *   Lower level increases enables more users to access data concurrently, but can create more negative effects (dirty reads, lost updates, etc.);
    *   Higher level reduces the possible negative effects created by concurrency, but needs more system resources and there's a higher chance for transactions to block each other; 

### (D)urability
*   Ensures that commited transactions survive in the database even in the event of failures;