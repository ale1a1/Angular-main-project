import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test 1',
      'description 1',
      'https://images.unsplash.com/photo-1669914207526-648beb5d2b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    ),
    new Recipe(
      'Test 2',
      'description 2',
      'https://images.unsplash.com/photo-1669914207526-648beb5d2b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
