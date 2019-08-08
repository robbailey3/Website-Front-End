import { Component, Input, OnInit } from '@angular/core';

import { TimelineItem } from './timeline-item.interface';

@Component({
  selector: 'rb-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() items: TimelineItem[];
  @Input() title: string;
  /**
   * The start year of the timeline.
   */
  private timelineStartYear: number;
  /**
   * The end year of the timeline.
   */
  private timelineEndYear: number;
  constructor() {}

  /**
   * Function which is called when the component initialises.
   */
  ngOnInit() {
    this.sortItems();
    this.getTimelineStartYear();
    this.getTimelineEndYear();
  }

  /**
   * Sort the items passed to the component by start date descending.
   */
  private sortItems(): void {
    if (!this.items || this.items.length === 0) {
      return;
    }
    this.items.sort((a, b) => {
      return b.startDate.getTime() - a.startDate.getTime();
    });
  }

  /**
   * @description Get the start year of the last item (i.e. the oldest item)
   */
  private getTimelineStartYear(): void {
    if (!this.items || this.items.length === 0) {
      return;
    }
    this.timelineStartYear = this.items[
      this.items.length - 1
    ].startDate.getFullYear();
  }

  /**
   * Get the end year of the last item (i.e. the most recent item)
   */
  private getTimelineEndYear(): void {
    if (!this.items || this.items.length === 0) {
      return;
    }
    this.timelineEndYear = this.items[0].endDate.getFullYear();
  }
}
