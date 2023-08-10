import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HikingGamePageRoutingModule } from './hiking-game-routing.module';
import { HikingGameComponent } from './hiking-game.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HikingGamePageRoutingModule
  ],
  declarations: [HikingGameComponent]
})
export class HikingGamePageModule {}
