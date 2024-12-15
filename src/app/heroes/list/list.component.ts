import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'Hulk', 'IronMan', 'Thor','Antman']
  public deletedHeroe?: string;

  removeLastHeroe():void{
    this.deletedHeroe = this.heroName.pop();

  }

}
