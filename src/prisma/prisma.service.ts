import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

type PrismaClientWithHooks = PrismaClient & {
  $on(event: 'beforeExit', callback: () => Promise<void>): void;
};

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    (this as PrismaClientWithHooks).$on('beforeExit', async () => await app.close());
  }
}
