import { ISpecificationsRepository } from '../../repositories/interfaces/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationExists = this.specificationRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specification already registred!');
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
