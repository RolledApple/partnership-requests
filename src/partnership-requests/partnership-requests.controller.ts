import {
  Body,
  Controller,
  Post,
  UsePipes,
  HttpStatus,
  HttpException,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { PartnershipRequest } from '@prisma/client';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';

import { PartnershipRequestsService } from './partnership-requests.service';
import { CreatePartnershipRequestDto } from './dtos/create-partnership-request.dto';
import { CreatePartnershipRequestResponseDto } from './dtos/create-partnership-request-response.dto';

@Controller('partnership-requests')
@ApiTags('partnership-requests')
export class PartnershipRequestsController {
  constructor(
    private readonly partnershipRequestsSvc: PartnershipRequestsService,
  ) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: () => new BadRequestException('Invalid input data.'),
    }),
  )
  @ApiOperation({ summary: 'Create a partnership request' })
  @ApiResponse({
    status: 201,
    description: 'Request created successfully',
    type: CreatePartnershipRequestResponseDto,
    example: {
      id: 1,
      companyName: 'ABC_COMPANY, LLC',
      email: 'abc_company@gmail.com',
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - issues in processing your request.',
  })
  async createRequest(
    @Body() @Body() createPartnershipRequestDto: CreatePartnershipRequestDto,
  ): Promise<PartnershipRequest> {
    try {
      return this.partnershipRequestsSvc.createRequest(
        createPartnershipRequestDto,
      );
    } catch (error) {
      throw new HttpException(
        'Internal Server Error - issues in processing your request.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
