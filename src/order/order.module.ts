import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order.schema';
import { AutoIncrementID, AutoIncrementIDOptions } from '@typegoose/auto-increment';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'orders',
        useFactory: async () => {
          const schema = OrderSchema;

          schema.plugin(AutoIncrementID, {
            field: 'id',
            startAt: 1,
          } satisfies AutoIncrementIDOptions);

          return schema;
        },
        inject: [getConnectionToken()],
      }
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
