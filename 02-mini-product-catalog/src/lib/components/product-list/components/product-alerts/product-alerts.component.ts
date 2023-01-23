import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../../config/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
 
  @Input() product!: Product; // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.

  @Output() notify = new EventEmitter(); // @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
}
