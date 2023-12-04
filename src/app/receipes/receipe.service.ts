import { Injectable } from '@angular/core';
import { Receipe } from "./receipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class ReceipeService {
  hasReceipeChanged = new Subject<Receipe[]>();
  private receipes: Receipe[] = []

  constructor(private sLService: ShoppingListService) {

  }

  getReceipe() {
    return this.receipes.slice();
  }

  setReceipe(receipes: Receipe[]) {
    this.receipes = receipes;
    this.hasReceipeChanged.next(this.receipes.slice());
  }

  getASingleReceipe(id: number) {
    return this.receipes[id];
  }

  addIngredientToShoppoingList(ingredients: Ingredient[]) {
    this.sLService.addIngredients(ingredients);
  }

  addReceipe(receipe: Receipe) {
    this.receipes.push(receipe);
    this.hasReceipeChanged.next(this.receipes.slice());
  }

  updateReceipe(index: number, receipe: Receipe) {
    this.receipes[index] = receipe;
    this.hasReceipeChanged.next(this.receipes.slice());
  }

  deleteReceipe(index: number) {
    this.receipes.splice(index, 1);
    this.hasReceipeChanged.next(this.receipes.slice());
  }
}