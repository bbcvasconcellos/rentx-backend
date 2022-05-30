import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

// pense dessa forma -> classe service orquestra a classe repository

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExits = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExits) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
