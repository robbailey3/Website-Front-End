import { Component } from '@angular/core';

@Component({
  selector: 'rb-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  public now = new Date().getFullYear();
  public history = [
    {
      title: 'Udacity Front End Developer NanoDegree',
      date: 'October 2018 - January 2019',
      startDate: new Date('2018-10'),
      endDate: new Date('2019-01'),
      content: ''
    },
    {
      title: 'Quality Control Branding Specialist - Oleeo Plc',
      date: 'January 2018 - Present',
      startDate: new Date('2018-01'),
      endDate: new Date(),
      content: `In this role, I am fully responsible for the entire branding process.
        From communicating with the client to gather requirements to implementing the brand using HTML and SCSS.`
    },
    {
      title: 'Quality Control Executive - Oleeo Plc',
      date: 'March 2016 - January 2018',
      startDate: new Date('2016-03'),
      endDate: new Date('2018-01'),
      content: `Conducted manual tests on a complex web application`
    },
    {
      title: 'Keele University',
      date: 'September 2012 - June 2015',
      startDate: new Date('2012-09'),
      endDate: new Date('2015-06'),
      content: `I graduated with an upper second class honours (BSc) in Physics with Philosophy.\n`
    }
  ];
  constructor() {}
}
