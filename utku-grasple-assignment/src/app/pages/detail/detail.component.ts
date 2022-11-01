import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ICourseDetail } from '../../types/course-detail';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  private id!: string;
  public course!: ICourseDetail;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sub = this.api.getOneCourse(this.id).subscribe({
        /* @todo implement loading indicator */
        next: data => {
          this.course = data.result;
        },
        /* @todo implement 404 case if no course found with id */
        /* @todo implement better error handling. */
        error: err => {
          console.log(err);
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
