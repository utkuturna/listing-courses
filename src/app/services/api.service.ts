import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_COURSES } from '../mocks/courses';
import { ICourseResponse } from '../types/course';
import { ICourseDetailResponse } from '../types/course-detail';
import { MOCK_COURSE_DETAIL } from '../mocks/course-detail';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  /* @todo add http client with common headers and interceptors */
  /* @todo implement caching logic */

  getAllCourses(): Observable<ICourseResponse> {
    console.log('Getting all courses');
    /* @todo add pagination and maybe filter logic in the future */
    return of(MOCK_COURSES);
  }

  getOneCourse(id: string): Observable<ICourseDetailResponse> {
    console.log('Getting course with id: ', id);
    /* @todo implement get course by id logic in the future */
    return of(MOCK_COURSE_DETAIL);
  }
}
