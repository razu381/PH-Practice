import { client } from "../config/mongodb-config";
import app from "./app";

let server;
const port = 3000;

const bootstrap = async () => {
  await client.connect();
  console.log("connected to mongodb");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
