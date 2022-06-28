import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.css']
})
export class HorlogeComponent implements OnInit {

  @Input()
  ville: string = '';
  @Input()
  heure: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
