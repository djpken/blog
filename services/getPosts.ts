import Post from '../models/post';
import { MongoClient } from 'mongodb';

const uri = "mongodb://mongo:d2VBboS8etvXnw1J74RlNQ9a603YM5Zz@hkg1.clusters.zeabur.com:31319/";


export async function getPostsInMongo(): Promise<Post[]> {
  if (!uri) throw new Error('Server cannot connect to database.');
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db('blog').collection('posts');
    const find = await collection.find<Post>({});
    return (await find.toArray()).map(post => ({
      ...post,
      content: post.content.trim().substring(0, 100) + ' ...'
    })).sort((a: Post, b: Post) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } finally {
    await client.close();
  }
}
