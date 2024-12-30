import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  isImage: boolean = true;
  modalSrc: string = '';
  modalAlt: string = '';
  mediaItems = [
    { src: 'https://images.unsplash.com/photo-1641951822637-9622ad2a1cad?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', alt: 'Image 1', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', alt: 'Image 2', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80', alt: 'Image 3', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', alt: 'Image 4', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', alt: 'Image 5', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', alt: 'Image 6', type: 'image' },
    { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80', alt: 'Image 7', type: 'image' },
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Video 1', type: 'video' }, // Sample video URL
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Video 2', type: 'video' },
    { src:'https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=1024x1024&w=is&k=20&c=-xbFG0w2X_ck1VUHnupztZdT86xOopFAc-y0fr2j13A=',
      alt:'image9', type:'image'
    }
  ];

  constructor(private sanitize: DomSanitizer) { }

  // sanitizeMedia(item: string): SafeUrl {
  //   try {
  //     if (!item) {
  //       return '';
  //     }
  //     return this.sanitize.bypassSecurityTrustResourceUrl(item);
  //   } catch (error) {
  //     console.error('Error sanitizing image URL:', error);
  //     return '';
  //   }
  // }

  setModalMedia(src: string, alt: string, type: string) {
    this.modalSrc = src;
    this.modalAlt = alt;
    this.isImage = (type === 'image');
  }

  setModalImage(src: string, alt: string) {
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    if (modalImage) {
      modalImage.src = src;
      modalImage.alt = alt;
    }
  }

}
