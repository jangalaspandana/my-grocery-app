import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name : string;
    public description : string;
    public imagepath : string;
    public ingridients : Ingredient[];
     
    constructor(name : string , desc : string, imagepath : string, ingridients : Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagepath = imagepath;
        this.ingridients = ingridients;
    }
}