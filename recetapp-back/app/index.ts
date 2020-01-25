import {config} from "./utils/config";
import {init} from "./server";
import * as mongo from "mongodb";

const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://pepinoconcrema:BjdrxKOkGhbApMuT@cluster0-x3hwo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  init(config.port, client.db("test"));
});

