
-- USE sql_store;
-- SELECT *
-- FROM customers
-- WHERE customer_id = 1 
-- ORDER BY first_name;


-- SELECT 
-- 	first_name, 
-- 	last_name, 
-- 	points, 
-- 	points+10*5 AS 'descount_factor'
-- FROM customers


-- SELECT DISTINCT state 
-- FROM customers 


SELECT 
	name,
    unit_price,
    unit_price*1.1 AS 'new_price'
FROM products;





