import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineProyectosComponent } from './timeline-proyectos.component';

describe('TimelineProyectosComponent', () => {
  let component: TimelineProyectosComponent;
  let fixture: ComponentFixture<TimelineProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
