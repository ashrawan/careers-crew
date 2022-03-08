import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationGuard} from '@app/auth/guards/authentication.guard';
import {PublicPagesModule} from '@app/features/public-pages/public-pages.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => PublicPagesModule,
  },

  // Lazily loading
  // {
  //   path: '',
  //   loadChildren: () => import('@app/features/public-pages/public-pages.module')
  //     .then(m => m.PublicPagesModule),
  // },

  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('@app/features/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
