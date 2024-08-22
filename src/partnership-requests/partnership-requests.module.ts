import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { PartnershipRequestsService } from './partnership-requests.service';
import { PartnershipRequestsController } from './partnership-requests.controller';

@Module({
  controllers: [PartnershipRequestsController],
  providers: [PartnershipRequestsService],
  imports: [PrismaModule],
})
export class PartnershipRequestsModule {}
