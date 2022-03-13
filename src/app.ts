import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(3001, () => {
    console.log("Listening on port 3001")
})

export { app };
