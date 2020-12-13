
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 // @Output() recipewasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[];
  constructor( private recipeService : RecipeService , private router : Router ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  
  // onRecipeSelected(recipe : Recipe){
  //   this.recipewasSelected.emit(recipe);
  // }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo : this.route});
  }
}
