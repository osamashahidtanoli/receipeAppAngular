import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private sLService: ShoppingListService) {

  }

  onAddIng() {
    this.sLService.addIngredient({ name: this.nameInputRef.nativeElement.value, amount: Number(this.amountInputRef.nativeElement.value) });
  }

}
