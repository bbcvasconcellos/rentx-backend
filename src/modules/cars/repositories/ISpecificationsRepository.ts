import { Specification } from '../model/specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
