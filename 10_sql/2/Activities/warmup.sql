CREATE DATABASE Second_International_Bank;

USE Second_International_Bank;

CREATE TABLE customers (
  ID INTEGER(10) NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(30),
  LastName VARCHAR(30),
  Loan BOOLEAN,
  Checking DECIMAL(10,2),
  Savings DECIMAL(10,2),
  PRIMARY KEY (id)
);

INSERT INTO customers (FirstName, LastName, Loan, Checking, Savings)
VALUES ('Mark', 'Groner', 0, 999999999.99, 9999999999.99),
('Bear', 'Groner', 0, 100, 100),
('TJ', 'Groner', 0, 700, 1700);
