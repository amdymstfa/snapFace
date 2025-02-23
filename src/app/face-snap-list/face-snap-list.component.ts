import { Component, OnInit } from '@angular/core';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import { faceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  snaps!: faceSnap[];
  // mySnap!: faceSnap;
  // mySnapp!: faceSnap;
  // mySnappp!: faceSnap;
  constructor(private faceSnapService: FaceSnapsService){}

  ngOnInit(): void {
      this.snaps = this.faceSnapService.getfaceSnap();
      // this.snaps[1].setLocation('time square');
  }
}
