import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'abouts', component: AboutsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
];
