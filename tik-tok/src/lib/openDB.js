import { MongoClient } from 'mongodb';

export async function openDB() {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('mongodb conectado 🚀')
  if (!client.isConnected()) await client.connect();

  return client.db('tiktokclone'); //base de datos
 
}



