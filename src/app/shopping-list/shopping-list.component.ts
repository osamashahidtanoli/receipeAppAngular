import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private sLService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredient();
    this.sLService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => this.ingredients = newIngredients
    );
  }
}
