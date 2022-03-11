import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options: cors.CorsOptions = {
  methods: "OPTIONS, POST",
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(options));

app.use(express.json());

app.use(router);

export { app };
