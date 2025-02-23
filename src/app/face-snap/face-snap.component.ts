import { Component, Input, OnInit } from '@angular/core';
import {faceSnap} from '../models/face-snap'
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  // standalone: true,
})
export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap!: faceSnap;
  // declare propreties by promess
  // title!: string;
  // url!: string;
  // description!: string;
  // createdAt!: Date;
  // snap!: number;
  textButton! : string
  userHasSnap! : boolean;

  //initialize properties 
  ngOnInit(): void{
    // this.title = 'Remenber time and me' ;
    // this.url = 'data:image/jpeg;base64,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';
    // this.description = 'My best moments with her';
    // this.createdAt = new Date();
    // this.snap = 0;
    this.textButton = 'Snap!';
    this.userHasSnap = false;
  }

  // methodes for litening events
  onSnap(): void {
    if (this.userHasSnap){
      this.snapp();
    }else {
      this.unsnap();
    }
  }

  snapp() : void {
      this.FaceSnap.addSnapp();
      this.textButton = 'Snap!';
      this.userHasSnap = false;
  }

  unsnap(): void {
      this.textButton = 'Ooups!';
      this.FaceSnap.removeSnap();
      this.userHasSnap = true;
  }
}
