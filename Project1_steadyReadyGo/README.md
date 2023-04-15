<p align="center">
  <img width="460" height="300" src="https://www.womenwhocode.com/assets/WWCode_Progress_Pride_Logo_Black-8640a72547cacc4a741d6d242e84cd3fcf5f9bf97a13644e11d21e831b82a327.png">
</p>

# 🏁  Steady, Ready, Go

"*Steady, ready, go*" is the first module of The course _"From hero to Superhero Backend node js"_ taugh by ***Women Who Code Medellin*** and its parther and sponsor ***Softserve***. 


## 🚀 About Me


Hello, I am ***Dani Tejada***, a biological engineer and enthusiast learner of backend, frontend, and data science. I would like to learn many things and be part of significant projects around the tech area, working with kind, smart and open-minded people. That is the goal! 

## 🤝 Connect with me:

<a href="https://www.linkedin.com/in/dtejadah"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/linkedin.svg" alt="Dani Tejada | LinkedIn" width="21px"/></a>
<a href="https://instagram.com/yonosoyrafael"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/instagram.svg" alt="Dani Tejada| Instagram" width="21px"/></a>

<br />

## 👨🏻‍💻 Documentation

The objective of this project is the backend development of a virtual store dedicated to technology devices such as laptops, cell phones, TVs, among others. For it :

  1. Services were built to make a **CRUD** of products.
  2. The **persistence** of the data was carried out in a **.txt** file that acts as a database, which is constantly updated.


## 🛠️ Installation

Clone repository
```bash
  git clone BioDani/wwc-backend 
```
Navigate to the project folder
```bash
  cd Project1_steadyReadyGo  
```
Install express
```bash
  npm install express 
```
Run npm (download the dependencies specified in the package.json)
```bash
  npm install 
```
Run the project
```bash
  npm run dev 
```

## 📍 Tech Stack

**Server:** Node, Express

## 📍 Dependences for DEV

1. Nodemon
2. eslint
3. eslint-plugin-prettier
4. eslint-config-prettier

## 📍 Dependences 

1. express
2. fs/promises
3. hapi/boom
2. joi


## 📍 API Reference

#### Get all products

```http
  GET /api/v1/products
```

#### Get a specific product

```http
  GET /api/v1/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Product Id( int number)|


#### Create a new product

```http
  POST /api/v1/products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Product name |
| `description`      | `string` | **Required**. Product characteristics |
| `price`      | `number` | **Required** Price (real numer)  |
| `discountPercentage`      | `number` | **Required**. Percentage % (real numer)|
| `rating`      | `number` | **Required**. Rank from 0 to 5 (real number)|
| `stock`      | `number` | **Required**. Stock in storage (int number) |
| `brand`      | `string` | **Required**. Product brand characteristics |
| `category`      | `string` | **Required**. Product category |
| `images`      | `list` | **Required**. List of image links |

#### Update a product

```http
  PUT /api/v1/products/{id}
```

```http
  PATCH /api/v1/products/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Product Id( int number)|
| `title`      | `string` | **Optional**. Product name |
| `description`      | `string` | **Optional**. Product characteristics |
| `price`      | `number` | **Optional** Price (real numer)  |
| `discountPercentage`      | `number` | **Optional**. Percentage % (real numer)|
| `rating`      | `number` | **Optional**. Rank from 0 to 5 (real number)|
| `stock`      | `number` | **Optional**. Stock in storage (int number) |
| `brand`      | `string` | **Optional**. Product brand characteristics |
| `category`      | `string` | **Optional**. Product category |
| `images`      | `list` | **Optional**. List of image links |


#### Delete a specific product

```http
  DELETE /api/v1/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Product Id( int number)|


## 🤯 References

1. Transform a CSV file to JSON file: [Link](https://csvjson.com/csv2json)

2. HTTP-friendly error objects: [Documentation](https://hapi.dev/module/boom/)

3. Schema description language and data validator for JavaScript: [Documentation](https://joi.dev/api/?v=17.9.1)

3. Markup language - Markdown: [Documentation 1](https://www.markdownguide.org) - [Documentation 2](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/tutorial-de-markdown/) - [Documentation 3](https://platzi.com/tutoriales/1650-prework/5836-guia-de-uso-de-markdown-herramienta-de-conversion-de-texto-a-html/)

4. Create useful .gitignore files for your project: [Link](https://www.toptal.com/developers/gitignore/)


