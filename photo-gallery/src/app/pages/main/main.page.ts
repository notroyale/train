import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  cards = [
    0,1,2,3,4,5,6
  ]

  constructor(private storageService: StorageService, private router: Router) {}


  ngOnInit():void {

  }

}
