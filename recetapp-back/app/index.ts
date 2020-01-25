import {init} from "./server";
import {config} from "./utils/config";
import * as mongo from "mongodb";

const MongoClient = mongo.MongoClient;
const connectionString = config.connectionString;
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (!err) init(config.port, client.db("test"));
});
