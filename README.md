# node-sql-orm
An ORM for a MySQL database using Node.js with Sequelize.

<h2>Notes:</h2>

<h3>How to create an ORM using Express JS, Sequelize, and MySQL:</h3>

<ol>
  <li>Create the database in MySQL;</li>
  <li>Install sequelize mysql2;</li>
  <li>Create a configuration file in your Express server and insert the MySQL database name;</li>
  <li>Create database models that will be used on the Express server. You can use npx terminal commands to generate them automatically;</li>
  <li>Run the migrations using npx;</li>
  <li>Develop the appropriate code to initialize Express, defining the database models that will be used;</li>
  <li>Use the appropriate Sequelize functions to define the CRUD operations you'll want to make for each model.</li>
</ol>

<h3>How to create tables with dependencies using Sequelize:</h3>

<ol>
  <li>Create the new tables' models;</li>
  <li>In the main table, add the dependencies using the hasMany() function;</li>
  <li>In the secondary tables, add the belongsTo statement;</li>
  <li>Add the foreignKeys, which are the fields in the child tables that will link to the parent table;</li>
  <li>Declare the references in the migration files;</li>
  <li>Execute the migrations.</li>
</ol>
