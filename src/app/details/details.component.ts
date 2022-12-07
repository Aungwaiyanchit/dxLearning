import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from "../../assets/data.json";
import { Icourses } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
  courseId!: string | null;
  courses: Icourses[] = (data as any).default;
  filtered: Icourses | null = null;
  isEnroll: boolean = false;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
    })  
    if (this.courseId !== null) {
      this.filterCourses(this.courseId);
    }
  }
  
  filterCourses(courseId: string): void {
      this.filtered = this.courses.filter(course => course.id===parseInt(courseId))[0];
  }

  enrollCourse(): void {
    setTimeout(() => {
      this.isEnroll = true;
    }, 1000);
  }

}
