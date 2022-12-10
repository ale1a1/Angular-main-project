import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter();
  recipes: Recipe[] = [
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
  filteredRecipe;
  onRecipeSelected(recipeName) {
    this.filteredRecipe = this.onRecipeFiltered(recipeName);
    console.log(this.filteredRecipe.name + ' from recipe-list');
    this.recipeSelected.emit(this.filteredRecipe);
  }
  onRecipeFiltered(recipeName) {
    return this.recipes.filter((recipe) => recipe.name === recipeName)[0];
  }
}
