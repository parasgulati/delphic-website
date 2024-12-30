import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { BlogHeaderComponent } from "../shared/components/blog-header/blog-header.component";

interface BlogItem {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, BlogHeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  selectedRegion: string = 'Select Region';
  selectedObj: any;
  blogName: string = '';
  blogItems: BlogItem[] = [
    {
      title: 'How to build a website',
      author: 'John Doe',
      date: '01 Jan, 2025',
      imageUrl: 'assets/img/blog-img/build-website.jpg',
      category: 'Web Design',
      description: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
      link: 'blog/build-a-website'
    },
    {
      title: 'CSS Grid vs Flexbox',
      author: 'Alice Johnson',
      date: '10 Dec, 2024',
      imageUrl: 'assets/img/blog-img/gridvsflexbox.webp',
      category: 'Web Design',
      description: 'A comprehensive comparison of CSS Grid and Flexbox for responsive layouts.',
      link: 'blog/grid-vs-flexbox'
    },
    {
      title: 'SEO Best Practices for 2025',
      author: 'Bob Brown',
      date: '20 Apr, 2045',
      imageUrl: 'assets/img/blog-img/seo.jpg',
      category: 'Digital Marketing',
      description: 'Learn the latest SEO strategies to improve your website’s visibility in search engines.',
      link: 'blog/best-seo-practices'
    }
  ];

  constructor(private route: Router){}

}
