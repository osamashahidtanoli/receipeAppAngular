import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private IgChanged: Subscription;

  constructor(private sLService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.sLService.getIngredient();
    this.IgChanged = this.sLService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => this.ingredients = newIngredients
    );
  }

  onEdit(index: number) {
    this.sLService.ingredientsEdit.next(index);
  }

  ngOnDestroy(): void {
    this.IgChanged.unsubscribe();
  }
}
