import { EventEmitter, Injectable } from '@angular/core';
import { HttpService } from '../http-service.service';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class ShoppingListService {
    ingridientsChanged = new EventEmitter<Ingredient[]>();
   public ingredients : Ingredient[] = [
        new Ingredient('chicken' ,30),
        new Ingredient('fish',40)
      ];
     public persondata =[];
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.getData().subscribe((data) => {
        this.persondata = Array.from(Object.keys(data), k=>data[k]);
       console.log(this.persondata);
    });
 }
      getIngridients() {
        return this.ingredients;
      }

       
      addIngidients(ing : Ingredient){
       this.ingredients.push(ing);
       this.ingridientsChanged.emit(this.ingredients);
       return this.ingredients;
       }


       addIngridientsFromRecipe(ing : Ingredient[] ){
        this.ingredients.push(...ing);//...we use for converting the array to list spread operator
        this.ingridientsChanged.emit(this.ingredients.slice());
       }

       addIngToRecipe(){
        return this.ingredients;
       }
}