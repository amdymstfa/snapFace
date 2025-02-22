import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  // standalone: true,
})
export class FaceSnapComponent implements OnInit {
  // declare propreties by promess
  title!: string;
  description!: string;
  createdAt!: Date;
  snap!: number;

  //initialize properties 
  ngOnInit(): void{
    this.title = 'Remenber time' ;
    this.description = 'My best moments with her';
    this.createdAt = new Date();
    this.snap = 4000;
  }
}
