import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateListComponent } from './collaborate-list.component';

describe('CollaborateListComponent', () => {
  let component: CollaborateListComponent;
  let fixture: ComponentFixture<CollaborateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
