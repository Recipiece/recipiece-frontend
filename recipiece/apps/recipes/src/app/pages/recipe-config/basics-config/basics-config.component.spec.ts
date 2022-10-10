import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsConfigComponent } from './basics-config.component';

describe('BasicsConfigComponent', () => {
  let component: BasicsConfigComponent;
  let fixture: ComponentFixture<BasicsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
