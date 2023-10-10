import { Injectable } from '@nestjs/common';
import { Person } from '../models/person.model';
import { CreatePersonDto } from '../dto/create-person.dto';

@Injectable()
export class PersonService {
  private readonly persons: Person[] = [];

  async create(personData: CreatePersonDto): Promise<Person> {
    const newPerson: Person = {
      id: this.persons.length + 1,
      ...personData,
    };
    this.persons.push(newPerson);
    return newPerson;
  }

  async findAll(): Promise<Person[]> {
    return this.persons;
  }
}
