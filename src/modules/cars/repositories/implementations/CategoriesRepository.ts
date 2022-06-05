import { Category } from '../../model/category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../interfaces/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // singleton
  private static INSTANCE: CategoriesRepository;

  // only the class CategoriesRepository can call the constructor
  private constructor() {
    this.categories = []; // mocks the database for this project
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
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
