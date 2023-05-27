**Schema (MySQL v5.7)**

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      stock INT NOT NULL,
      category INT NOT NULL
    );
    
    CREATE TABLE categories (
      id SERIAL PRIMARY KEY,
      description VARCHAR(100) NOT NULL
    );
    
    
    INSERT INTO products (name, description, price, stock, category)
    VALUES ('Producto 1', 'Descripción del producto 1', 10.99, 100, 1),
           ('Producto 2', 'Descripción del producto 2', 19.99, 50, 1),
           ('Producto 3', 'Descripción del producto 3', 5.99, 200, 2),
           ('Producto 4', 'Descripción del producto 4', 14, 100, 2),
           ('Producto 5', 'Descripción del producto 5', 15, 200, 2),
           ('Producto 6', 'Descripción del producto 6', 27, 300, 2),
           ('Producto 7', 'Descripción del producto 7', 100, 30, 2),
           ('Producto 8', 'Descripción del producto 8', 101, 3, 3),
           ('Producto 9', 'Descripción del producto 9', 11.99, 300, 3),
           ('Producto 10', 'Descripción del producto 10', 100, 1, 3);
    
    
    INSERT INTO categories (description)
    VALUES ('Category 1'),
           ('Category 2'),
           ('Category 3');

---

**Query #1**

    SELECT *
    FROM products
    WHERE price IN (SELECT MAX(price) FROM products);

| id  | name       | description                | price  | stock | category |
| --- | ---------- | -------------------------- | ------ | ----- | -------- |
| 8   | Producto 8 | Descripción del producto 8 | 101.00 | 3     | 3        |

---
**Query #2**

    SELECT p.*,  c.description
    FROM products p, categories c
    WHERE p.category = c.id;

| id  | name        | description                 | price  | stock | category | description |
| --- | ----------- | --------------------------- | ------ | ----- | -------- | ----------- |
| 1   | Producto 1  | Descripción del producto 1  | 10.99  | 100   | 1        | Category 1  |
| 2   | Producto 2  | Descripción del producto 2  | 19.99  | 50    | 1        | Category 1  |
| 3   | Producto 3  | Descripción del producto 3  | 5.99   | 200   | 2        | Category 2  |
| 4   | Producto 4  | Descripción del producto 4  | 14.00  | 100   | 2        | Category 2  |
| 5   | Producto 5  | Descripción del producto 5  | 15.00  | 200   | 2        | Category 2  |
| 6   | Producto 6  | Descripción del producto 6  | 27.00  | 300   | 2        | Category 2  |
| 7   | Producto 7  | Descripción del producto 7  | 100.00 | 30    | 2        | Category 2  |
| 8   | Producto 8  | Descripción del producto 8  | 101.00 | 3     | 3        | Category 3  |
| 9   | Producto 9  | Descripción del producto 9  | 11.99  | 300   | 3        | Category 3  |
| 10  | Producto 10 | Descripción del producto 10 | 100.00 | 1     | 3        | Category 3  |

---
**Query #3**

    SELECT * 
    FROM products p
    JOIN categories c
    ON p.category = c.id;

| id  | name        | description                 | price  | stock | category | id  | description |
| --- | ----------- | --------------------------- | ------ | ----- | -------- | --- | ----------- |
| 1   | Producto 1  | Descripción del producto 1  | 10.99  | 100   | 1        | 1   | Category 1  |
| 2   | Producto 2  | Descripción del producto 2  | 19.99  | 50    | 1        | 1   | Category 1  |
| 3   | Producto 3  | Descripción del producto 3  | 5.99   | 200   | 2        | 2   | Category 2  |
| 4   | Producto 4  | Descripción del producto 4  | 14.00  | 100   | 2        | 2   | Category 2  |
| 5   | Producto 5  | Descripción del producto 5  | 15.00  | 200   | 2        | 2   | Category 2  |
| 6   | Producto 6  | Descripción del producto 6  | 27.00  | 300   | 2        | 2   | Category 2  |
| 7   | Producto 7  | Descripción del producto 7  | 100.00 | 30    | 2        | 2   | Category 2  |
| 8   | Producto 8  | Descripción del producto 8  | 101.00 | 3     | 3        | 3   | Category 3  |
| 9   | Producto 9  | Descripción del producto 9  | 11.99  | 300   | 3        | 3   | Category 3  |
| 10  | Producto 10 | Descripción del producto 10 | 100.00 | 1     | 3        | 3   | Category 3  |

---

[View on DB Fiddle](https://www.db-fiddle.com/)