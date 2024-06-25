import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { AboutsComponent } from './components/abouts/abouts.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'abouts', component: AboutsComponent },
];
