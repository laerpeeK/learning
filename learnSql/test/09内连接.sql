SELECT o.customer_id
FROM orders o
JOIN customers 
ON o.customer_id = customers.customer_id;


SELECT oi.unit_price
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id;
