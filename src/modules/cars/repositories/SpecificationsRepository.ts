import { Specification } from '../model/specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  create({ description, name }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find((specification) => specification.name === name);

    return specification;
  }
}

export { SpecificationRepository };
