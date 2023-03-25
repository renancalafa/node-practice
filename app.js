import express from 'express';
import 'dotenv/config';
import './config/database';
import postsRoute from './routes/posts';

const app = express();

app.use(express.json());

//routes
app.use('/posts', postsRoute);

app.listen(3000);