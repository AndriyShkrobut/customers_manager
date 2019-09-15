import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { SorterService } from './services/sorter.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [DataService, SorterService],
})
export class CoreModule {}
