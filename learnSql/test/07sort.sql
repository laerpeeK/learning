SELECT first_name, last_name, 10 AS points
FROM customers
ORDER BY state DESC, first_name DESC;

SELECT *,quantity * unit_price AS total_price
FROM order_items
WHERE order_id = 2
ORDER By total_price DESC

