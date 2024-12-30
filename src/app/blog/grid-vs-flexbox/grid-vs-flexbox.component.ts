import { Component } from '@angular/core';
import { BlogHeaderComponent } from '../../shared/components/blog-header/blog-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grid-vs-flexbox',
  standalone: true,
  imports: [CommonModule,RouterModule, BlogHeaderComponent],
  templateUrl: './grid-vs-flexbox.component.html',
  styleUrl: './grid-vs-flexbox.component.scss'
})
export class GridVsFlexboxComponent {

}
