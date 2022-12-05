import { PostPlistAdminComponent } from './component/post/PostPlistAdmin/PostPlistAdmin.component';
import { UserPlistAdminComponent } from './component/user/user-plist-admin/user-plist-admin.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostPlistAdminComponent },
  { path: 'user', component: UserPlistAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
