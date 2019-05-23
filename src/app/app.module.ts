import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { MessageComponent } from './message/message.component';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ConditionalComponent,
    MessageComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
