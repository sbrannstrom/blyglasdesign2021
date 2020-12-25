import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderGlaskonstComponent } from './header-glaskonst/header-glaskonst.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderGlaskonstComponent
  ],
  entryComponents: [],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    HeaderGlaskonstComponent
  ],
  providers: [

  ],
})
export class ComponentsModule {}