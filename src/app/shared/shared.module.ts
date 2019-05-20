import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { BarChartComponent } from './components/data-visualisation/bar-chart/bar-chart.component';
import {
    LineGraphComponent
} from './components/data-visualisation/line-graph/line-graph.component';
import { GridComponent } from './components/grid/grid.component';
import { ModalComponent } from './components/modal/modal.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SafePipe } from './pipes/safe.pipe';
import { HighlightService } from './services/highlight/highlight.service';
import { MetaService } from './services/meta/meta.service';

@NgModule({
  declarations: [
    CardComponent,
    BarChartComponent,
    LineGraphComponent,
    GridComponent,
    ModalComponent,
    SafePipe,
    TimelineComponent
  ],
  exports: [
    CardComponent,
    GridComponent,
    ModalComponent,
    SafePipe,
    TimelineComponent
  ],
  imports: [CommonModule],
  providers: [MetaService, HighlightService]
})
export class SharedModule {}
