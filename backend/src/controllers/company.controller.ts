// backend/src/controllers/company.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/create-company-dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(@Body() companyData: CreateCompanyDto) {
    try {
      const createdCompany = await this.companyService.create(companyData);
      return { success: true, data: createdCompany };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Get('count')
  async getCompanyCount() {
    try {
      const count = await this.companyService.getCompanyCount();
      return { success: true, count };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
