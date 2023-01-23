import { Component, Input } from '@angular/core';

import { Product } from '../../../../config/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
 
  @Input() product!: Product; // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
}
