import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  public now = new Date().getFullYear();
  public history = [
    {
      title: 'Quality Control Branding Specialist',
      date: 'January 2018 - Present',
      description: `In this role, I am fully responsible for the entire branding process.
        From communicating with the client to gather requirements to implementing the brand using HTML and SCSS.`
    },
    {
      title: 'Quality Control Executive',
      date: 'March 2016 - January 2018',
      description: 'foo bar'
    },
    {
      title: 'Keele University',
      date: 'September 2012 - June 2015',
      description: `BSc Physics with Philosophy.`
    }
  ];
  constructor() {}

  ngOnInit() {}
}
