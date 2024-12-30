import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBuildWebsiteComponent } from './blog-build-website.component';

describe('BlogBuildWebsiteComponent', () => {
  let component: BlogBuildWebsiteComponent;
  let fixture: ComponentFixture<BlogBuildWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBuildWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBuildWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
