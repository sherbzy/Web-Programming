Module 10: PHP 3 - Add the UI



	PHP 3: Add the UI - Learning Goals
    1. The definition of idempotency in the context of computer science.
        ◦ Idempotence: the property of certain operations in mathematics and computer science that can be applied multiple times without changing the result beyond the initial application
        ◦ f ( f (x) ) == f (x)
        ◦ Example: absolute value of a number
    2. Which database operations are naturally idempotent.
        ◦ Database Idempotency
            ▪ naturally idempotent: SELECT, UPDATE, DELETE
            ▪ not idempotent: INSERT
        ◦ HTTP Idempotency
            ▪ naturally idempotent: GET, PUT, DELETE
            ▪ not idempotent: POST
    3. How to make all database operations idempotent.
        ◦ If the tables are properly normalized and there's a unique key (may include multiple columns) that is NOT auto-increment, then the second insertion will cause a primary key clash. This may generate an error that we'd have to handle, but no duplicate records. 
        ◦ If there is no natural unique key (as in our store code), then a common technique is to use a timestamp as a unique data item. 
