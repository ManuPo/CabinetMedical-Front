import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfirmiereListComponent } from './components/infirmiere-list/infirmiere-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InfirmiereListComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
