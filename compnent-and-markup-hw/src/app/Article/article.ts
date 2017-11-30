export class Article {
    id: number;
    title: string;
    text: string;
    author: string;
    link: string;

    constructor(id: number,
        title: string,
        text: string,
        author: string,
        link: string) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.author = author;
        this.link = link;
    }
}