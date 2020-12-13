import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients : Ingredient[];
  constructor(private shoppingService : ShoppingListService,private router :Router ) { 
    
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngridients();
   this.shoppingService.ingridientsChanged.subscribe(
     (ing : Ingredient[]) => {
       this.ingredients = ing;
     }
   )
   this.ingredients;
  }

  checkOutRecipe(){
  this.router.navigate(["recipes"]);

  }
  

  // newIngAdded(data : Ingredient){
  //  this.ingredients.push(data);
  // }
}
