import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

username:any;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.routes.snapshot.params['username']
  }


}
