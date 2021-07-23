SELECT *
FROM customers;
-- WHERE state <> 'VA'
-- WHERE birth_date > '1990-01-01'

-- GET the orders placed this year
SELECT *
FROM orders
WHERE order_date >= '2019-01-01';
