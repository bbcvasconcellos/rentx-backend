// pricipio de liskov -> etapas:
// 1. criar uma interface com os metodos que serão usados independentes da escolha do banco
// Isso é se mudar o banco, os metodos continuam o mesmo e não altera o código
// 2. extender a classe onde os metodos definidos pela interface são declarados
// 3. em service: declarar que o constructor da classe é do mesmo tipo da interface declarada aqui
// contrato -> associar com interface: classe que implementa uma interface

import { Category } from '../model/category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICreateCategoryDTO, ICategoriesRepository };
