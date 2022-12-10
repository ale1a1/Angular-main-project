import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  onRecipePassed(recipeObj) {
    console.log(recipeObj.name + ' from recipes-component');
  }
}
