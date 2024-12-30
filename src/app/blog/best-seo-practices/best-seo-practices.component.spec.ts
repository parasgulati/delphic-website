import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSeoPracticesComponent } from './best-seo-practices.component';

describe('BestSeoPracticesComponent', () => {
  let component: BestSeoPracticesComponent;
  let fixture: ComponentFixture<BestSeoPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSeoPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSeoPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
