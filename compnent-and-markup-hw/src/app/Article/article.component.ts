import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    @Input('articleProp') article: Article;
    @Output() getDetails = new EventEmitter<number>();

    onClick() {
        this.getDetails.emit(this.article.id);
    }
}