import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEventComponent } from './events/components/newEvent.component';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/component/sidebar/sidebar.component';
import { InputFieldComponent } from './shared/component/input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEventComponent,
    DashboardComponent,
    SidebarComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
