import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailComponent } from './course-detail.component';
import { MOCK_COURSE_DETAIL } from '../../mocks/course-detail';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct course title', () => {
    component.course = MOCK_COURSE_DETAIL.result;
    const title = MOCK_COURSE_DETAIL.result.name;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-test-id="course-title"]')?.textContent
    ).toEqual(title);
  });

  it('should render correct course description', () => {
    component.course = MOCK_COURSE_DETAIL.result;
    const description = MOCK_COURSE_DETAIL.result.description;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[data-test-id="course-description"]')?.textContent
    ).toEqual(description);
  });
});
