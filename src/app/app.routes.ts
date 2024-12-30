import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { LandingComponent } from './landing/landing.component';
import { BlogBuildWebsiteComponent } from './blog/blog-build-website/blog-build-website.component';
import { GridVsFlexboxComponent } from './blog/grid-vs-flexbox/grid-vs-flexbox.component';
import { BestSeoPracticesComponent } from './blog/best-seo-practices/best-seo-practices.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'blog',
        loadComponent: () => import ("./blog/blog.component").then((m)=>m.BlogComponent)
    },
    {
        path:'blog/build-a-website',
        loadComponent:()=>import('./blog/blog-build-website/blog-build-website.component').then((m)=>m.BlogBuildWebsiteComponent)
    },
    {
        path:'blog/grid-vs-flexbox',
        loadComponent:()=>import('./blog/grid-vs-flexbox/grid-vs-flexbox.component').then((m)=>m.GridVsFlexboxComponent)
    },
    {
        path:'blog/best-seo-practices',
        loadComponent:()=>import('./blog/best-seo-practices/best-seo-practices.component').then((m)=>m.BestSeoPracticesComponent)
    },
    {
        path: 'gallery',
        loadComponent:()=>import('./gallery/gallery.component').then((m)=>m.GalleryComponent)
    },
    {
        path:'**',
        component:LandingComponent
    }
];
