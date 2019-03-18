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
      description: 'lorem ipsum ...'
    },
    {
      title: 'Quality Control Executive',
      date: 'March 2016 - January 2018',
      description: 'foo bar'
    },
    {
      title: 'Keele University',
      date: 'September 2012 - June 2015',
      description: ''
    }
  ];
  constructor() {}

  ngOnInit() {}
}
