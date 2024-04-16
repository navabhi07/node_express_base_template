This is  a base node js template, which anyonr can use it it has been  prepared, by keeping some if the most important code principles and project management recommendation .Feel free to change anything.

`src`=INside the src folder all the actual source code regarding the project will reside,this will not include any kind of tets.You might want to take separate tests folder.

Lets's take a look inside the src folder

1.`config`->In this folder anything and everything regarding any configurations or setup of a library or module will be done .

for ex:-setting up 'dotenv' so that we can use environmental variables anywhere in a cleaner fashion.This is done in server config.js

->one more example can be to setup you logging library that ca help you to prepare meaningful logs ,so configurations for this library should also be done here.

2.`Routes`->In the routes folder,we register a route and the corresponding middlelwares and controllers to it.

3.`Middlewares`->They are just going to intercepts the incoming requests where we can write our validators ,authenticators etc

4.`Controllers`->They are kind of the last middlewares as post them you call your bussiness layer to execute the business logic .In controller w e just receive the incoming request and data then pass to it business layer and once business return in output . we structure the API Response in controllers and send output.


5.`Repositries`->This folder contains all the logic which we interact the DB by writes queries and all the raw queries or ORM queries will go.

5.`Services`-> Contains the business logic and interact with repositries for data from the databases.

6.`Utils`-> Contains helper methods ,error classes etc.




//Set up projects

Download this template from github and open it your vs Code

In the root directory create a `.env` file and the following env variables

```
PORT:3000

```


go inside the src folder and execute this command  

```
 npx sequelizze init

 ```

 BY executing above command  ,you will get migrations and seeders folder along with a get migrations and seeders folder along with a config.json inside the config folder

 
 to run the server use npm run dev 