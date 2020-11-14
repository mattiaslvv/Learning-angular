import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe('Schnitzel Recipe', 
    'Recipe for delicious breaded pork.', 
    'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    [
      new Ingredient('Pork Meat', 1),
      new Ingredient('Eggs', 1),
      new Ingredient('Panko or bread crumbs', 2),
      new Ingredient('French fries', 20),
      new Ingredient('Mustard', 1),
    ]),
    new Recipe('Cheeseburger Recipe', 
    'Delicious American classic.', 
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg',
    [
      new Ingredient('Ground beef', 1),
      new Ingredient('Potato buns', 2),
      new Ingredient('American cheese', 2),
      new Ingredient('French fries', 20),
      new Ingredient('Mustard', 1),
      new Ingredient('Mayonnaise', 1),
      new Ingredient('Caramelized onions', 2),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngrToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}