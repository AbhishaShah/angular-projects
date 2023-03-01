import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/lib/store/app.state';
import { ArticlesListComponent } from '../lib/components/articles/articles-list/articles-list.component';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from '../lib/components/articles/add-article/add-article.component';

@NgModule({
  declarations: [AppComponent, ArticlesListComponent, AddArticleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
