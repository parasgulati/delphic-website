import { Component } from '@angular/core';
import { BlogHeaderComponent } from '../../shared/components/blog-header/blog-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-best-seo-practices',
  standalone: true,
  imports: [BlogHeaderComponent, CommonModule, RouterModule],
  templateUrl: './best-seo-practices.component.html',
  styleUrl: './best-seo-practices.component.scss'
})
export class BestSeoPracticesComponent {

}
