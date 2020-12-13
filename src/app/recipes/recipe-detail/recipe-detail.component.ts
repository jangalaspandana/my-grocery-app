import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() singlerecipeItem : Recipe;
 id : number;
  constructor(private recipeservice : RecipeService, private route : ActivatedRoute ,private router : Router)  { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (paramsid : Params) => {
        this.id = +[paramsid.id];// here we use the + sign to change from  string to int;
       this.singlerecipeItem = this.recipeservice.getSingleRecipe(this.id);
      }
    )
    //alternate method
    // this.id = +[this.route.snapshot.params.id];
    // this.singlerecipeItem = this.recipeservice.getSingleRecipe(this.id);
  }

  onAddToShoppingList(){
this.recipeservice.addIngToShoppingList(this.singlerecipeItem.ingridients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo : this.route});
    //this.router.navigate(['../', this.id , 'edit'], {relativeTo : this.route});
  }

}
