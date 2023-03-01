import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from 'src/lib/components/articles/add-article/add-article.component';
import { ArticlesListComponent } from 'src/lib/components/articles/articles-list/articles-list.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesListComponent,
    children: [
      {
        path: 'add',
        component: AddArticleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
