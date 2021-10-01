import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfirmiereListComponent } from './infirmiere-list/infirmiere-list.component';
import { InfirmiereCardComponent } from './infirmiere-card/infirmiere-card.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InfirmiereListComponent,
    InfirmiereCardComponent,
    PatientCardComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
