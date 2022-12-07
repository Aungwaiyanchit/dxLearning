import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";



@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private route: Router) {}

    goTo(courseName: string) {
        this.route.navigate(['/courses', { courseName: courseName }]);
    }
}