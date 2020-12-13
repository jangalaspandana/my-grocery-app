import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    public ing : Ingredient[] ;
 private recipes : Recipe[] = [
        new Recipe('Chicken','Tasty indian chicken','https://static.toiimg.com/photo/58394256.cms',
        [
            new Ingredient('chicken',1),
            new Ingredient('leafy vegetables', 20)
           
        ]),
        new Recipe('Thandoori',' Tasty thandoori','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg?resize=980:*',
       [
        new Ingredient('Full Chicken',1),
        new Ingredient('Salad', 20)
       ] ),

        ];
  constructor(private shoppinglistservice : ShoppingListService){


  }
        getRecipes() {
            return this.recipes.slice();
        }
        getSingleRecipe(index : number){
          return this.recipes[index];
        }

        addIngToShoppingList(ing : Ingredient[]){
             this.shoppinglistservice.addIngridientsFromRecipe(ing);
        }

        getIngFromShoppingList(){
          this.ing =  this.shoppinglistservice.addIngToRecipe();
          //this.ing.push( ...this.shoppinglistservice.ingred
        }

}