SELECT
    p.item_name,
    p.sku,
    p.quantity,
    p.price,
    c.name AS category_name
FROM products AS p
INNER JOIN categories AS c
    ON p.category_id = c.id
WHERE p.sku = 'MS-001'
  AND c.name = 'Electronics';