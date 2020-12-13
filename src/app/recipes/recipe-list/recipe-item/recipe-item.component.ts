import { Component, OnInit, Input} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe : Recipe;
    @Input() index : number;
    ingredients : Ingredient[];
    //@Output() recipeSelected = new EventEmitter<void>();
    
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.geting();
  }

  // onSelectItem() {
  //   //this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //  }

  geting(){
   this.recipeService.getIngFromShoppingList();
  }
}
