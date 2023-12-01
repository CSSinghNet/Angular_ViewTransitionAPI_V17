export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code: Agile Software Development Handbook',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    opinion: "A classic among classics in the programming world. Although in the midst of 2023, I have a somewhat controversial opinion. It doesn't seem like a book I would recommend to everyone, especially to those who are learning. Additionally, it has a very dogmatic tone, and there are people who dangerously treat it as the bible of development. But if you can read it with perspective, there are still interesting things that are relevant. Note that all code examples are based on Java and heavily focus on object-oriented programming.",
    author: 'Robert C. Martin',
  },
  {
    id: 'aprendiendo-git',
    title: 'Learning Git',
    img: "https://d2sofvawe08yqg.cloudfront.net/aprendiendo-git/s_hero2x?1628527844",
    opinion: "A very interesting book for learning Git. It goes far beyond the commands, discussing best practices, teamwork strategies, and workflows to enhance software delivery. Additionally, it's written by a Spanish author, which is always appreciated.",
    author: 'Miguel Angel Durán'
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
    opinion: "The Clean Coder: A Code of Conduct for Professional Programmers is an exceptional book that revolutionizes how programmers approach their work. With its practical and inspiring ideas, it sets a new standard for professionalism in the software development industry. Its focus on personal responsibility, continuous learning, and effective communication promotes the delivery of clean code, continuous improvement, and team collaboration. In summary, this book is an indispensable tool that empowers programmers to achieve excellence and contribute to the success of their organizations.",
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
    opinion: "JavaScript: The Good Parts is an indispensable book that highlights the best practices and essential features of JavaScript. Through a concise and insightful perspective, the author guides us through the world of this language, revealing its potential and emphasizing its most powerful and effective aspects. With a focus on simplicity and elegance, the book provides a practical guide to make the most of the solid and reliable parts of JavaScript, enabling us to write clear and efficient code. In summary, this work is a valuable tool for any developer looking to master the art of programming with JavaScript.",
    author: 'Douglas Crockford',
  },
  {
    id: 'eloquent-javascript',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
    opinion: "Eloquent JavaScript is an extraordinary book that takes readers on an exciting journey through the world of programming in JavaScript. With a friendly and accessible approach, the author introduces us to the fundamental concepts of the language and skillfully guides us through practical and challenging exercises. Striking a balanced combination of theory and practice, the book encourages logical and creative thinking, teaching us to develop elegant and efficient solutions. In summary, Eloquent JavaScript is an indispensable guide for those who want to master this powerful programming language and explore its full potential.",
    author: 'Marijn Haverbeke',
  }
].map(book => ({...book, viewTransitionName: `view-transition-name: book-${book.id}`}));
