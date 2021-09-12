import { Component, Input, OnInit } from '@angular/core';
import { image } from '../_models/image';
import { User } from '../_models/user';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
@Input() images? :image[];
@Input() profileImageUrl?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
