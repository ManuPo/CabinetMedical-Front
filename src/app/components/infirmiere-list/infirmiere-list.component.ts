import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infirmiere-list',
  templateUrl: './infirmiere-list.component.html',
  styleUrls: ['./infirmiere-list.component.css']
})
export class InfirmiereListComponent implements OnInit {

  infirmieres = [
    {
      id: 1,
      numeroProfessionnel: "00011515",
      nom: "Martin",
      prenom: "Machine",
      telPro: "894561651",
      telPerso: "4646513",
      adresse:
      {
        id: 1
      },
      patients:
        [
          {
            id: 1
          },
          {
            id:2
          },
        {
          id:3
        }]
    },
    {
      id: 2,
      numeroProfessionnel: "00051512",
      nom: "Dupont",
      prenom: "Biduler",
      telPro: "42214",
      telPerso: "0125445",
      adresse:
      {
        id: 2
      },
      patients:
        [
          {
            id: 3
          },
          {
            id: 2
          },
        {
          id:6
        }]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
