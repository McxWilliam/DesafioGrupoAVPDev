import { Controller, Post, Body } from '@nestjs/common';
import { PersonService } from '../services/person.service';
import { CreatePersonDto } from '../dto/create-person-dto'; 

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async createPerson(@Body() personData: CreatePersonDto) {
    try {
      const createdPerson = await this.personService.create(personData);
      return { success: true, data: createdPerson };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
