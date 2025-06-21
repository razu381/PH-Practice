"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://razu381:Evanevan381@cluster0.ve9ya7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
