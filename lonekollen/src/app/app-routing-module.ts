import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnstalldaSida } from './sidor/anstallda-sida/anstallda-sida';
import { LonespecSida } from './sidor/lonespec-sida/lonespec-sida';

const routes: Routes = [
  { path: '', redirectTo: 'anstallda', pathMatch: 'full' },
  { path: 'anstallda', component: AnstalldaSida },
  { path: 'anstallda/:id/lonespec', component: LonespecSida },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
