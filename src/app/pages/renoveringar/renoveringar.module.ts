import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenoveringarPageRoutingModule } from './renoveringar-routing.module';

import { RenoveringarPage } from './renoveringar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RenoveringarPageRoutingModule
  ],
  declarations: [RenoveringarPage]
})
export class RenoveringarPageModule {}
