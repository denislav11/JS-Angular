import { articles as incommingArticles } from '../../../seed';
import { Article } from '../Article/article';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {
    arr: Article[] = [];

    getAllArticles = () => {
        for (let incomingArticle of incommingArticles) {
            this.arr.push(new Article(
                incomingArticle.id,
                incomingArticle.title,
                incomingArticle.text,
                incomingArticle.author,
                incomingArticle.link))
        }
        return this.arr;
    }
}