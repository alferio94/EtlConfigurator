import { SharedPrimeNgModule } from './../shared-prime-ng/shared-prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationModuleRoutingModule } from './configuration-module-routing.module';
import { DinamycFormComponent } from './components/dinamyc-form/dinamyc-form.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DinamycFormComponent, ConfigPageComponent],
  imports: [
    CommonModule,
    ConfigurationModuleRoutingModule,
    SharedPrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class ConfigurationModule {}
