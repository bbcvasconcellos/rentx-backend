import { Category } from '../../model/category';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const getAllCategories = this.categoriesRepository.list();

    return getAllCategories;
  }
}

export { ListCategoriesUseCase };
