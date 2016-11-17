# AngularSpring

### Requirements:

`Postgres` sql database running on port `5432` with database `example` owned by 
  > user: postgres
  > password: postgres

See: [application.yml](application.yml) for more info.

### How to start development server

```gradle bootRun``` 

will install all required dependencies, run the initial database migrations on the database and start the server on port 8080


### TODO:
 - write tests using in-memory database
 - union of new_ and edit_ users_controllers 
 - introduce rx java and rx angular