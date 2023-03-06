import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/lib/store/app.state';
import { ArticlesListComponent } from '../lib/components/articles/articles-list/articles-list.component';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from '../lib/components/articles/add-article/add-article.component';
import { EmployeeComponent } from 'src/lib/components/employee/employee.component';
import { EmployeeStore } from 'src/lib/components/employee/store/employee-store';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    AddArticleComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
  ],
  // providers: [EmployeeStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
