import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICourseItem } from '../../types/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  public courses: ICourseItem[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.sub = this.api.getAllCourses().subscribe({
      /* @todo implement loading indicator */
      next: data => {
        this.courses = data.result;
      },
      /* @todo implement better error handling. */
      error: err => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
