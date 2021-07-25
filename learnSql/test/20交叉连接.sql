SELECT 
	c.first_name AS customer,
    p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY c.first_name;

-- exe
SELECT 
	sh.name AS sh,
    p.name AS product
FROM shippers sh
CROSS JOIN products p
ORDER BY sh.name
