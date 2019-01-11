import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BarChartComponent } from './components/data-visualisation/bar-chart/bar-chart.component';
import { LineGraphComponent } from './components/data-visualisation/line-graph/line-graph.component';
import { GridComponent } from './components/grid/grid.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    CardComponent,
    BarChartComponent,
    LineGraphComponent,
    GridComponent,
    ModalComponent
  ],
  exports: [CardComponent, GridComponent, ModalComponent],
  imports: [CommonModule]
})
export class SharedModule {}
