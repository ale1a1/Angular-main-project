import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipeSelected;
  onRecipePassed(recipeObj) {
    this.recipeSelected = recipeObj;
    console.log(this.recipeSelected.name + ' from recipes-component');
  }
}
