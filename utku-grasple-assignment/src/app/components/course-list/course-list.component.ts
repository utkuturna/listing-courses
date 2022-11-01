import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ICourseItem } from '../../types/course';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, AfterViewInit {
  data: MatTableDataSource<ICourseItem> = new MatTableDataSource<ICourseItem>();
  displayedColumns: string[] = ['id', 'name'];
  constructor(private router: Router) {}
  @Input('courses') dataSource!: ICourseItem[];
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.data.data = this.dataSource;
  }

  handleClickRow(row: ICourseItem): void {
    this.router.navigate([`/${row.id}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }
}
