import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataformComponent } from './dataform.component';

describe('DataformComponent', () => {
  let component: DataformComponent;
  let fixture: ComponentFixture<DataformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
