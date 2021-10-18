import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) { }
  // ei leidnud e mailist skripti ebay listi kohta 

  ngOnInit(): void {
    this.items = this.itemService.itemsFromService;
  }

}
