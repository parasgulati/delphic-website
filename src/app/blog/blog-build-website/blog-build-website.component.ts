import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogHeaderComponent } from '../../shared/components/blog-header/blog-header.component';

@Component({
  selector: 'app-blog-build-website',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, BlogHeaderComponent],
  templateUrl: './blog-build-website.component.html',
  styleUrl: './blog-build-website.component.scss'
})
export class BlogBuildWebsiteComponent {

}
