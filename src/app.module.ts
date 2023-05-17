import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, CartService, Cart],
})
export class AppModule {}
