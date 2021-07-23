-- IN
SELECT *
FROM customers
WHERE state NOT IN ('VA', 'FL', 'GA');

SELECT * 
FROM  products
WHERE quantity_in_stock IN (49, 38, 72);


-- BETWEEN
SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000;

SELECT *
FROM customers 
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';


-- %any number of char 
-- _  single char

-- LIKE
SELECT * 
FROM customers 
WHERE last_name LIKE 'b____y';

SELECT *  
FROM customers
WHERE address LIKE '%trail%' OR
	address LIKE '%avenue%';


SELECT *
FROM customers 
WHERE phone NOT LIKE '%9'
