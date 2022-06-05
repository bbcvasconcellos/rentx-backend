import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes); // todos os metodos de categoriesRoutes tem '/categories' como path inicial e comum a todas elas
router.use('/specifications', specificationRoutes);

export { router };
