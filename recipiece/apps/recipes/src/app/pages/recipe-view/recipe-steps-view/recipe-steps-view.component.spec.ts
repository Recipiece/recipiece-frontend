import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStepsViewComponent } from './recipe-steps-view.component';

describe('RecipeStepsViewComponent', () => {
  let component: RecipeStepsViewComponent;
  let fixture: ComponentFixture<RecipeStepsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStepsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStepsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
