import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PartnershipRequestsModule } from './partnership-requests/partnership-requests.module';

@Module({
  imports: [PartnershipRequestsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
