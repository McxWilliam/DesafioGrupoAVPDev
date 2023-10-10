import { Injectable } from '@nestjs/common';
import { Company } from '../models/company.model';
import { CreateCompanyDto } from '../dto/create-company.dto';

@Injectable()
export class CompanyService {
  private readonly companies: Company[] = [];

  async create(companyData: CreateCompanyDto): Promise<Company> {
    const newCompany: Company = {
      id: this.companies.length + 1,
      ...companyData,
    };
    this.companies.push(newCompany);
    return newCompany;
  }

  async findAll(): Promise<Company[]> {
    return this.companies;
  }

  async getCompanyCount(): Promise<number> {
    return this.companies.length;
  }
}
