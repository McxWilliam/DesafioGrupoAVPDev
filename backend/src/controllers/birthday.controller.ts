import { Controller, Get } from '@nestjs/common';
import { BirthdayService } from '../services/birthday.service';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService) {}

  @Get()
  async getBirthdayData() {
    return await this.birthdayService.getBirthdayData();
  }
}
