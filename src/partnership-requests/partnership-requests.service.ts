import { Injectable } from '@nestjs/common';
import { PartnershipRequest } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartnershipRequestsService {
  constructor(private prisma: PrismaService) {}

  async createRequest(data: {
    companyName: string;
    email: string;
  }): Promise<PartnershipRequest> {
    const createdRequest = await this.prisma.partnershipRequest.create({
      data,
    });
    return createdRequest;
  }
}
