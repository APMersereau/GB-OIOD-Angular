/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2021 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiCoreModule } from '@elemental-ui/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DataSourceToolbarModule, DataTableModule, HyperViewModule, QbmModule } from 'qbm';
import { OpsModule } from 'qer';
import { ObjectHistoryGridviewComponent } from './object-history/object-history-gridview/object-history-gridview.component';
import { ObjectHistoryTimelineComponent } from './object-history/object-history-timeline/object-history-timeline.component';
import { ObjectHistoryComponent } from './object-history/object-history.component';
import { ObjectOverviewComponent } from './object-overview.component';
import { ObjectOverviewService } from './object-overview.service';
import { ObjectHistoryService } from './object-history/object-history.service';


@NgModule({
  declarations: [
    ObjectHistoryGridviewComponent,
    ObjectHistoryTimelineComponent,
    ObjectHistoryComponent,
    ObjectOverviewComponent,
  ],
  imports: [
    CommonModule,
    HyperViewModule,
    DataTableModule,
    DataSourceToolbarModule,
    EuiCoreModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule,
    MatTableModule,
    MatPaginatorModule,
    OpsModule,
    QbmModule
  ],
  providers: [
    ObjectHistoryService,
    ObjectOverviewService
  ]
})
export class ObjectOverviewModule { }