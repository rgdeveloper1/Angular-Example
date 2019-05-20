import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionalComponent } from './conditional/conditional.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpolation',
    pathMatch: 'full'
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'property',
    component: PropertyBindingComponent
  },
  {
    path: 'conditional',
    component: ConditionalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
