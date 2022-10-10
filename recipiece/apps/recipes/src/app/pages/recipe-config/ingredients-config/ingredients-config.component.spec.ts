import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsConfigComponent } from './ingredients-config.component';

describe('IngredientsConfigComponent', () => {
  let component: IngredientsConfigComponent;
  let fixture: ComponentFixture<IngredientsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
