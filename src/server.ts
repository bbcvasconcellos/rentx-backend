import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();
const port = 3003;

app.use(express.json());
app.use('/categories', categoriesRoutes); // todos os metodos de categoriesRoutes tem '/categories' como path inicial e comum a todas elas
app.use('/specifications', specificationRoutes);

app.listen(port, () => {
  console.log('Server running on port: ', port);
});
