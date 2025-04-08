import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarslideComponent } from './calendarslide.component';

describe('CalendarslideComponent', () => {
  let component: CalendarslideComponent;
  let fixture: ComponentFixture<CalendarslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarslideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
