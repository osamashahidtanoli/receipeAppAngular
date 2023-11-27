import { EventEmitter, Injectable } from '@angular/core';
import { Receipe } from "./receipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ReceipeService {
  selectedReceipe = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      'Test Receipe 1',
      'Test Receipe For description',
      'https://unsplash.com/photos/palm-tree-leaf-near-at-body-of-water-FbN2z3bEaSs',
      [
        new Ingredient('Ing', 1),
        new Ingredient('Ing', 2),
      ],
    ),
    new Receipe(
      'Test Receipe 2',
      'Test Receipe For description',
      'https://unsplash.com/photos/palm-tree-leaf-near-at-body-of-water-FbN2z3bEaSs',
      [
        new Ingredient('Ing for receipe 2', 1),
        new Ingredient('Ing for receipe', 2),
      ],
    ),
    new Receipe(
      'Test Receipe 3',
      'Test Receipe For description',
      'https://unsplash.com/photos/palm-tree-leaf-near-at-body-of-water-FbN2z3bEaSs',
      [
        new Ingredient('Ing for receipe 3', 1),
        new Ingredient('Ing for receipe 3', 2),
      ],
    ),
  ];

  constructor(private sLService: ShoppingListService) {

  }

  getReceipe() {
    return this.receipes.slice();
  }

  addIngredientToShoppoingList(ingredients: Ingredient[]) {
    this.sLService.addIngredients(ingredients);
  }
}