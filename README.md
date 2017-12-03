# ng-Contacts a contact app

Contacts application built in MEAN stack (AngularJS 1.x)

## Backend - Node, Express, and MongoDB 

### Server 

``` server.js ```

### MongoDB Configuration 

Defines MongoDB configuration settings to make connection with MongoDB databse 

``` server/config/db.js ```

### Mongoose Model 

Defines MongoDB user document mappings with help of Mongoose model. The Mongoose model handles CRUD operations on user account. 

``` server/models/user.js ```

### Creating User API Controller 

Performs CRUD operations on MongoDB's user document. 

``` server/controllers/user.api.js ```

### Routes Configuration 

Configures routes for REST API and web (Angular App)

``` server/routes/api.js ```

and web

``` server/routes/web.js ```

--- _**(end of backend)**_ ---

