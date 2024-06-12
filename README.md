# Cardinal

The way microblogging should be.

# Host your own Cardinal

Cardinal is designed to be as easy to deploy as possible. If you want to host your own instance of Cardinal to federate your own community or to use for another project, follow the steps below:

First, clone the repo:

```sh
git clone https://github.com/cloudwithax/cardinal
```

Then go into the folder:

```sh
cd cardinal/
```

After that, install all the dependencies:

```sh
npm i
```

Then, make sure your .env has the following:

```sh
DATABASE_URL="<your cockroachdb general connection string here >"
JWT_SECRET="<your jwt secret here>"
```

Then, deploy the Prisma schema to the database:

```sh
npx prisma migrate deploy
```

You have the option of either starting the development server to do rapid prototyping for changes
or just to implement your own for your own needs, or starting the production server, which will build and serve
the app to which you can further configure to point to a domain.

To run the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

Alternatively, to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

And that's it! You should now have your own instance of Cardinal running on your machine.

The app will run on `http://localhost:3000` by default.

# Contributing

If you want to contribute to Cardinal, feel free to fork the repo and submit a pull request. We're always looking for new contributors to help make Cardinal the best it can be.

# License

Cardinal is licensed under the AGPL-3.0 License. See the LICENSE file for more information.

