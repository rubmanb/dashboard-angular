import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/products.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  public product = input.required<Product>()

  public onIncrementQuantity = output<number>()


  incrementQuantity(): void{
    this.onIncrementQuantity.emit(this.product().quantity + 1)
  }

  loginEffect = effect(() => console.log(this.product().name))
}
