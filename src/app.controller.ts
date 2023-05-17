import { Controller, Get, Param } from "@nestjs/common";
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart.entity';
import { CartItemService } from "./cart-item/cart-item.service";
import { CartItem } from "./cart-item/cart-item.entity";

@Controller('app')
export class AppController {
  constructor(private readonly cartService: CartService, private readonly cartItemService: CartItemService) {}

  @Get('/carts')
  getHello(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Get('/cart-item/:id')
  getById(@Param() params: any): Promise<CartItem> {
    return this.cartItemService.getById(params.id);
  }
}
