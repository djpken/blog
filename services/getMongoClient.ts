import { MongoClient } from 'mongodb';

const uri = "mongodb://mongo:d2VBboS8etvXnw1J74RlNQ9a603YM5Zz@hkg1.clusters.zeabur.com:31319";

export default async function getMongoClient() {
  if (!uri) throw new Error('Server cannot connect to database.');
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}
