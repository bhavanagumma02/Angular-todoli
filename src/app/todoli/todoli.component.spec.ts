import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoliComponent } from './todoli.component';

describe('TodoliComponent', () => {
  let component: TodoliComponent;
  let fixture: ComponentFixture<TodoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
