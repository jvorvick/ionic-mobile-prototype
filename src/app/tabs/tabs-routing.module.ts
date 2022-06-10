import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'broadcast',
        loadChildren: () => import('../broadcast/broadcast.module').then( m => m.BroadcastPageModule)
      },
      {
        path: 'collect',
        loadChildren: () => import('../collect/collect.module').then( m => m.CollectPageModule)
      },
      {
        path: 'plan',
        loadChildren: () => import('../plan/plan.module').then( m => m.PlanPageModule)
      },
      {
        path: 'settle',
        loadChildren: () => import('../settle/settle.module').then( m => m.SettlePageModule)
      },
      {
        path: 'connect',
        loadChildren: () => import('../connect/connect.module').then( m => m.ConnectPageModule)
      },
      {
        path: 'timeline',
        loadChildren: () => import('../timeline/timeline.module').then( m => m.TimelinePageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/connect',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/connect',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
