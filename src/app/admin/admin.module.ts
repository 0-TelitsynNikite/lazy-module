import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule
    ]
})
export class AdminModule { }
