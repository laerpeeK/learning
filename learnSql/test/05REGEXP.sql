-- SELECT *
-- FROM customers
-- WHERE last_name REGEXP 'field$|mac|rose';

SELECT *
FROM customers
WHERE first_name REGEXP 'ELKA|AMBUR';


SELECT *
FROM customers 
WHERE last_name REGEXP 'EY$|on$';

SELECT *
FROM customers
WHERE last_name REGEXP '^MY|^SE';

SELECT *
FROM customers
WHERE lastname REGEXP ' b[ru] ';
