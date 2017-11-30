import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Article } from '../Article/article';

@Component({
    selector: 'articles',
    templateUrl: './articles.component.html',
    providers: [ArticlesService]
})
export class ArticlesComponent implements OnInit {
    articles: Article[];
    selectedArticle: Article;
    text: string;
    counter: number = 1;
    readMoreShow: boolean = false;
    hideAllShow: boolean = false;

    constructor(private articlesService: ArticlesService) { }

    ngOnInit(): void {
        this.articles = this.articlesService.getAllArticles();
    }

    getDetails(id) {
        this.selectedArticle = this.articles.find(el => el.id === id);
        this.text = this.selectedArticle.text.slice(0, 250);
        this.readMoreShow = this.text.length < this.selectedArticle.text.length;
        this.hideAllShow = this.text.length >= this.selectedArticle.text.length;
    }

    readMore() {
        this.counter++;
        this.text = this.selectedArticle.text.slice(0, this.counter * 250);
        this.readMoreShow = this.text.length < this.selectedArticle.text.length;
        this.hideAllShow = this.text.length >= this.selectedArticle.text.length;
    }

    hideAll() {
        this.counter = 0;
        this.text = '';
        this.hideAllShow = this.text.length >= this.selectedArticle.text.length;
    }
}

