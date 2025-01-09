import { Component } from '@angular/core';
import {Pic} from '../../pic';

@Component({
  selector: 'app-protofolio',
  imports: [],
  templateUrl: './protofolio.component.html',
  styleUrl: './protofolio.component.css'
})
export class ProtofolioComponent {
  pics: Pic[] = [
    {
      src: 'poert1.png',
      alt: 'pic1'
    },
    {
      src: 'port2.png',
      alt: 'pic2'
    },
    {
      src: 'port3.png',
      alt: 'pic3'
    },
    {
      src: 'poert1.png',
      alt: 'pic4'
    },
    {
      src: 'port2.png',
      alt: 'pic5'
    },
    {
      src: 'port3.png',
      alt: 'pic6'
    }
  ]
}
