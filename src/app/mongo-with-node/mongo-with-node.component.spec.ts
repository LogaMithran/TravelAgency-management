import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoWithNodeComponent } from './mongo-with-node.component';

describe('MongoWithNodeComponent', () => {
  let component: MongoWithNodeComponent;
  let fixture: ComponentFixture<MongoWithNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoWithNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoWithNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
