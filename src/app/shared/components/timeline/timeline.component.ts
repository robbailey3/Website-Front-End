import { Component, OnInit, Input } from '@angular/core';
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
   * @description The start year of the timeline.
   */
  private timelineStartYear: number;
  /**
   * @description The end year of the timeline.
   */
  private timelineEndYear: number;
  constructor() {}

  /**
   * @description Function which is called when the component initialises.
   */
  ngOnInit() {
    this.sortItems();
    this.getTimelineStartYear();
    this.getTimelineEndYear();
  }

  /**
   * @description Sort the items passed to the component by start date descending.
   */
  private sortItems(): void {
    this.items.sort((a, b) => {
      return b.startDate.getTime() - a.startDate.getTime();
    });
  }

  /**
   * @description Get the start year of the last item (i.e. the oldest item)
   */
  private getTimelineStartYear(): void {
    this.timelineStartYear = this.items[this.items.length - 1
].startDate.getFullYear();
  }

  /**
   * @description Get the end year of the last item (i.e. the most recent item)
   */
  private getTimelineEndYear(): void {
    this.timelineEndYear = this.items[0].endDate.getFullYear();
  }
}
