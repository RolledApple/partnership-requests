import { ApiProperty } from '@nestjs/swagger';

export class CreatePartnershipRequestResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  email: string;
}
