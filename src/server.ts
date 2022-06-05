import express from 'express';
import { router } from './routes';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();
const port = 3003;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log('Server running on port: ', port);
});
