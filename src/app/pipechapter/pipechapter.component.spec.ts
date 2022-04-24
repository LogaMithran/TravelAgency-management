import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipechapterComponent } from './pipechapter.component';

describe('PipechapterComponent', () => {
  let component: PipechapterComponent;
  let fixture: ComponentFixture<PipechapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipechapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipechapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
