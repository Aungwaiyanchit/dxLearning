import { Component, OnInit } from '@angular/core';
import * as data from "../../assets/data.json";
import { HomeService } from '../services/home.service';


export interface Icourses {
  id: number,
  title: string,
  description: string,
  img_url: string | null,
  instructor_name: string,
  student_count: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  courses: Icourses[] = (data as any).default;
  constructor(private homeService:  HomeService){}

  ngOnInit() {
    console.log(this.courses);
  }

  goTo(courseName: string) {
    this.homeService.goTo(courseName);
  }

  trackByid(index: number, course: Icourses) {
    return course.id;
  }

}
