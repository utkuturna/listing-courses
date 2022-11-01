import { Component, Input, OnInit } from '@angular/core';
import { ICourseDetail } from '../../types/course-detail';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  constructor() {}
  @Input('course') course!: ICourseDetail;
  ngOnInit(): void {}
}
