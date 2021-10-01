import { Component, OnInit } from '@angular/core';
import { Infirmiere } from 'src/app/models/infirmiere';
import { InfirmiereService } from 'src/app/services/infirmiere.service';

@Component({
  selector: 'app-infirmiere-list',
  templateUrl: './infirmiere-list.component.html',
  styleUrls: ['./infirmiere-list.component.css']
})
export class InfirmiereListComponent implements OnInit {

  infirmieres: Infirmiere[] = [];

  constructor(private infirmiereService: InfirmiereService) { }

  ngOnInit(): void {
    this.infirmiereService.getInfirmieres().subscribe(infirmiere => {
      this.infirmieres = infirmiere;
    })
  }

}
