import { Component } from '@angular/core';
import { Icourses } from '../home/home.component';
import * as data from "../../assets/data.json";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  courses: Icourses[] = (data as any).default;
}
