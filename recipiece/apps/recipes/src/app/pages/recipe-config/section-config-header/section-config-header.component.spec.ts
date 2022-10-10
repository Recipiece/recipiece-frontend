import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionConfigHeaderComponent } from './section-config-header.component';

describe('SectionConfigHeaderComponent', () => {
  let component: SectionConfigHeaderComponent;
  let fixture: ComponentFixture<SectionConfigHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionConfigHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionConfigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
