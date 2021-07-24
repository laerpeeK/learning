SELECT *
FROM customers
LIMIT 6, 3;

-- page1: 1-3
-- page2: 4-6
-- ...


SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3