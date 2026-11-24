import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AnstalldKort } from './anstalld-kort/anstalld-kort';
import { Detaljpanel } from './detaljpanel/detaljpanel';
import { AnstalldaSida } from './sidor/anstallda-sida/anstallda-sida';
import { LonespecSida } from './sidor/lonespec-sida/lonespec-sida';

@NgModule({
  declarations: [App, AnstalldKort, Detaljpanel, AnstalldaSida, LonespecSida],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
