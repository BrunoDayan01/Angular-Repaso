import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron Man';
  public age: number = 40;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge(){
    return this.age = 20;

  }

}
