Module 9: PHP 2 - Database



	PHP 2: Database - Learning Goals
    1. How to create a table in a MySQL database
        ◦ CREATE TABLE table_name (
              column1 datatype,
              column2 datatype,
              column3 datatype,
              …. );
        ◦ DROP TABLE table_name;
    2. How to set primary and foreign keys
        ◦ CREATE TABLE Persons (
              ID int NOT NULL,
              LastName varchar(255) NOT NULL,
              FirstName varchar(255),
              Age int,
              PRIMARY KEY (ID);
        ◦ CREATE TABLE Orders (
              OrderID int NOT NULL,
              OrderNumber int NOT NULL,
              PersonID int,
              PRIMARY KEY (ID);
              FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
    3. How to select rows from a table
        ◦ SELECT * FROM table_name
        ◦ SELECT column_names FROM table_name
    4. How to insert rows into a table
        ◦ INSERT INTO table_name (column1, column2, column3, …)
          VALUES (value1, value2, value3, …),
                      (value1, value2, value3, …);
    5. How to update rows in a table
        ◦ UPDATE table_name
          SET column1 = value1, column2 = value2, …
          WHERE condition;
    6. How to connect to a MySQL database
        ◦ <?php
              $servername = “localhost”;
              $username = “lsherburne”;
              $password = “password”;
              $dbname = “lsherburne”;
              $conn = new mysqli($servername, $username, $password, $dbname);
              if ($conn→connect_error) {
                  die(“Connection failed: “ . $conn→connect_error);
		}
          ?>
    7. How a SQL Injection can occur
        ◦ SQL injection is one of the most common web hacking techniques in which the placement of malicious code in SQL statements gives the attacker access to view or change the database.
    8. What a Prepared Statement is, and how they work to guard against SQL Injections
        ◦ Prepared Statement – a feature used to execute the same (or similar ) SQL statements repeatedly with high efficiently; prepare, compile, then execute
        ◦ They guard against SQL injections because the query and the data are sent separately to the database server.
