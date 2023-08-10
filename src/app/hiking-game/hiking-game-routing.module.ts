import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HikingGameComponent } from './hiking-game.component';

const routes: Routes = [
  {
    path: '',
    component: HikingGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikingGamePageRoutingModule {}
