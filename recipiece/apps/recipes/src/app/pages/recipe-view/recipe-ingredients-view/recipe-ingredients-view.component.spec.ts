import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsViewComponent } from './recipe-ingredients-view.component';

describe('RecipeIngredientsViewComponent', () => {
  let component: RecipeIngredientsViewComponent;
  let fixture: ComponentFixture<RecipeIngredientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngredientsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
