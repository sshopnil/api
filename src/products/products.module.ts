import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { AutoIncrementID, AutoIncrementIDOptions } from '@typegoose/auto-increment';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'products',
        useFactory: async () => {
          const schema = ProductSchema;

          schema.plugin(AutoIncrementID, {
            field: 'prod_id',
            startAt: 1,
          } satisfies AutoIncrementIDOptions);

          return schema;
        },
        inject: [getConnectionToken()],
      }
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule { }