import { Category } from '../model/category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = []; // mocks the database for this project
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category); // push here will mock a db insert
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find((category) => category.name === name); // find will mock a select

    return category;
  }
}

export { CategoriesRepository };
