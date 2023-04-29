**Schema (MySQL v5.7)**

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      stock INTEGER NOT NULL
    );
    
    INSERT INTO products (name, description, price, stock)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200),
           ('Producto 4', 'Descripción del producto 4', 11.99, 300);
    
    UPDATE products
    set price = 12.99
    WHERE id = 1
    
    

---

**Query #1**

    SELECT * 
    FROM products as p;

| id  | name       | description                | price | stock |
| --- | ---------- | -------------------------- | ----- | ----- |
| 1   | Producto 1 | Descripción del producto 1 | 12.99 | 100   |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50    |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200   |
| 4   | Producto 4 | Descripción del producto 4 | 11.99 | 300   |

---
**Query #2**

    SELECT * 
    FROM products as p
    WHERE p.id = 1;

| id  | name       | description                | price | stock |
| --- | ---------- | -------------------------- | ----- | ----- |
| 1   | Producto 1 | Descripción del producto 1 | 12.99 | 100   |

---
**Query #3**

    SELECT p.name
    FROM products as p
    WHERE p.id = 1;

| name       |
| ---------- |
| Producto 1 |

---
**Query #4**

    DELETE FROM products
    WHERE id = 4;

There are no results to be displayed.

---
**Query #5**

    SELECT * 
    FROM products as p;

| id  | name       | description                | price | stock |
| --- | ---------- | -------------------------- | ----- | ----- |
| 1   | Producto 1 | Descripción del producto 1 | 12.99 | 100   |
| 2   | Producto 2 | Descripción del producto 2 | 19.99 | 50    |
| 3   | Producto 3 | Descripción del producto 3 | 5.99  | 200   |

---

[View on DB Fiddle](https://www.db-fiddle.com/)