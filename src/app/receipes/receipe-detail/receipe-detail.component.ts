import { Component, Input } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrl: './receipe-detail.component.css'
})
export class ReceipeDetailComponent {
  @Input() receipe: Receipe;

  constructor(private receipeService: ReceipeService) {

  }

  AddIngredientToShoppoingList() {
    this.receipeService.addIngredientToShoppoingList(this.receipe.ingredients);
  }
}
