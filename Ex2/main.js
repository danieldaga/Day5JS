const user = { 
    name: 'Daniel',
    id: '8'
}

const book1 = {
    title: 'the catcher in the rye',
    author: 'J.D Salinger',
    isbn: '6984765846',
    category: 'Classic',
}

const book2 = {
    title: 'To kill a mockingbird',
    author: 'Harper lee',
    isbn: '65465465',
    category: 'Literature',
}

user.books = [book1, book2]

console.log(user);

const library = []

library.books = user.books

console.log(library)

library.users = [user]

console.log(library)

const book3 = {
    title: 'The lord of the ring',
    author: 'J.K Rowling',
    isbn: '654658965984',
    category: 'Literature',
}

library.books = [book1, book2, book3]

user.books = [book1, book2, book3]

console.log(user, library);
