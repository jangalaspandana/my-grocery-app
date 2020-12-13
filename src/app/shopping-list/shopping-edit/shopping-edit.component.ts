import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInfotext') inputNameRef : ElementRef;
 @ViewChild('amountInfotext') inputAmountRef : ElementRef;
 //@Output() ingridientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }
   
  onAddItem(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngridient = new Ingredient(ingName, ingAmount); 
    //this.ingridientAdded.emit(newIngridient);
    this.shoppingService.addIngidients(newIngridient);
  }

}
