import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './components/article/article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { HeaderModule } from '../../layout/header/header.module';
import { ButtonModule } from '../../ui/button/button.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { GridModule } from '../../ui/grid/grid.module';
import { SocialMediaModule } from '../../layout/social-media/social-media.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HeaderModule,
    ButtonModule,
    FooterModule,
    GridModule,
    SocialMediaModule
  ]
})
export class ArticleModule { }
