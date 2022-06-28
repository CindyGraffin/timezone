import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge-container',
  templateUrl: './horloge-container.component.html',
  styleUrls: ['./horloge-container.component.css']
})


export class HorlogeContainerComponent implements OnInit {
  villes: any[] = [
    {
      villeName: 'Paris',
      hour: new Date().toLocaleTimeString('fr-FR', {timeZone: 'Europe/Paris'})
    },
    {
      villeName: 'Tokyo',
      hour:new Date().toLocaleTimeString('fr-FR', {timeZone: 'Asia/Tokyo'})
    },
    {
      villeName: 'Dubaï',
      hour: new Date().toLocaleTimeString('fr-FR', {timeZone: 'Asia/Dubai'})
    },
    {
      villeName: 'New-York',
      hour: new Date().toLocaleTimeString('fr-FR', {timeZone: 'America/New_York'})
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
