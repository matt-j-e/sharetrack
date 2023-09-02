# Sharetrack

An application to keep track of private company share transactions such that, at any moment in time, it should be possible to see who owns the shares in a given company AND all of the shares held by a given person.

## Background

I am building this project for some practice during a week's break after having completed the Backend module of Manchester Codes' Software Engineer Fasttrack. During that module we learned how to use ExpressJS on Node.js with Sequelize to access a MySQL database inside a Docker container.

That it precisely how this project is set up.

## Database tables

### Companies
* name: STRING
* crn: INTEGER
* incorp_date: DATEONLY

### People
* name: STRING
* date_of_birth: DATEONLY (optional)

### Shareholders
* PersonId: INTEGER
* CompanyId: INTEGER
- Exactly one of these is required

### Shares
* class: STRING
* COompanyId: INTEGER

### Transactions
* date: DATE
* quantity: INTEGER
* ShareId: INTEGER (the id of the share that is the subject of the transaction)
* ShareholderId: INTEGER (the id of the shareholder that is party to the transaction)
* TransactionTypeId: INTEGER (1=issue, 2=purchase, 3=sale, 4=cancellation)

### Transaction Types
* name: STRING

## Routes

ROUTE | ACTION | DATA
------|--------|------
`POST /person/` | Create a new Person and, simulaneously, create a new Shareholder linked to that Person | name [STRING], __optional__ date_of_birth [DATE]
`POST /company/` | Create a new Company and, simulaneously, create a new Shareholder linked to that Company | name [STRING], crn [INTEGER], incorp_date [DATE]