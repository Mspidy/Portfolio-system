import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title1="Full Stack Developer"
  data1 = ["Full Stack Developer", "Frontend Developer", "Backend Developer"]
  
  ngOnInit(){
    setTimeout(function(){
      
    },3000);
  }
}
