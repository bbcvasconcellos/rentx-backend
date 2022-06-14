import fs from 'fs';
import { parse } from 'csv-parse';

import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  // file data treatment
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse({
        delimiter: ',',
      });

      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path); // removes the files from tmp
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map(async (category: IImportCategory) => {
      const { name, description } = category;

      const categoryExists = this.categoriesRepositories.findByName(name);
      if (!categoryExists) {
        this.categoriesRepositories.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
