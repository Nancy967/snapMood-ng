import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Posts', link: '/posts' },
    { label: 'Abouts', link: '/abouts' },
    { label: 'Photos', link: '/photos' },
    { label: 'Videos', link: '/videos' },
  ];
}
