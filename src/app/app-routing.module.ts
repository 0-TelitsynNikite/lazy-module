import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(md => md.AdminModule)},
  {path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(md => md.CatalogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
