import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  providers: [ErrorHandlerService],
  imports: [CommonModule]
})
export class ErrorHandlerModule {}
