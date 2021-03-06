import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private cartService: ShoppingCartService) {}
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
  clearCart() {
    this.cartService.clearCart();
  }
}
