import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss'
})
export class BlogHeaderComponent {
  currentBlogInDetail: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.findUrl();
  }

  private findUrl(): void {
    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    this.currentBlogInDetail = (lastSegment !== 'blog') ? lastSegment : '';
  }

}
