import { Request, Response, Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  createSpecificationService.execute({ name, description });

  response.status(201).send();
});

export { specificationRoutes };
