This is how you will run this project on your local machine.

## Installation
1. Clone this repository
2. Clone Frontend Repository
3. Install the dependencies
4. Run the project

### 1. Clone this repository
```bash 
# SSH
git clone git@github.com:yogesh-sirsat/mobilicis_assignment.git

# HTTPS
git clone https://github.com/yogesh-sirsat/mobilicis_assignment.git
```
### 2. Clone frontend Repository
```bash
# SSH
git clone git@github.com:yogesh-sirsat/mobilicis_assignment_frontend.git

# HTTPS
git clone https://github.com/yogesh-sirsat/mobilicis_assignment_frontend.git
```

### 3. Install the dependencies
```bash
npm install
# run this command in both repositories
```

### 4. Run the project
```bash
npm start 
# run this command in both repositories
# npm run dev (for using nodemon at backend)
```

## API Reference

#### First Task

###### Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

```http
  GET /api/users/firstcriteria
```

#### Second Task

###### Male Users which have phone price greater than 10,000.

```http
  GET /api/users/secondcriteria
```

#### Third Task

###### Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

```http
  GET /api/users/thirdcriteria
```

#### Fourth Task

###### Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

```http
  GET /api/users/fourthcriteria
```

#### Fifth Task

###### Show the data of top 10 cities which have the highest number of users and their average income.

```http
  GET /api/cities/topten
```
