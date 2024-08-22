import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePartnershipRequestDto {
  @ApiProperty({
    description: 'The company from which the partnership request comes.',
    example: 'ABC_COMPANY, LLC',
  })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({
    description: 'Email to contact.',
    example: 'abc_company@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
