class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  // static method is not on Article's instance but on Article itself
  static compareDate(a1, a2) {
    return a1.date - a2.date;
  }
  static createTodays() {
    return new this("Today's digest", new Date());  // 'this' = Article
  }
}

let articles = [
  new Article("Mind", new Date(2019, 1, 1)),
  new Article("Body", new Date(2019, 0, 1)),
  Article.createTodays(),
  new Article("JavaScript", new Date(2019, 11, 1)),
]
articles.sort(Article.compareDate);
console.log(articles);