import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridVsFlexboxComponent } from './grid-vs-flexbox.component';

describe('GridVsFlexboxComponent', () => {
  let component: GridVsFlexboxComponent;
  let fixture: ComponentFixture<GridVsFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridVsFlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridVsFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
