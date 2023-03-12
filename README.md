# GraphQl-Pothos

GraphQl Yoga server implementation using Pothos to convert prisma schema to GraphQl schema.

# Starting the Project

To run this project locally

1. Clone the repo
2. yarn (to install dependencies)
3. As backend is Postgres, you can create an account at railway.app to create a cloud Postgres instance to store your data and give the connection URL in DATABASE_URL variable in .env file
4. npx prisma migrate dev --name intial (to migrate your prisma schema to sql. this will create the required tables in Postgres)
5. yarn dev :)
