function findAccountById(accounts, id) {
  const found = accounts.find((number) => number.id === id)
  console.log(found)
  return found
  //uses .find to look through an array of objects to return the object that contains the matching ID that is passed through the findAccountById function
}

function sortAccountsByLastName(accounts) {
  const sort = accounts.sort((name1, name2) => name1.name.last.toLowerCase() > name2.name.last.toLowerCase()? 1 : -1, 0)
  console.log(sort)
  return sort
}

function getTotalNumberOfBorrows(account, books) {
  // beloww a function to search an array of books that has been reduced down to another array of books that have an account ID within the book's borrowed ID object value
  const borrowCount = books.reduce((total, book) =>{ // function to look though an object that has been created from the next .filter method that looks for borrow IDs that match the given account ids
    const borrowedBook = book.borrows.filter( borrow => borrow.id === account.id) 
    return total + borrowedBook.length; // I knew I had to do some kind of a + b here, so this is where I landed
  } ,0) // <-- adding in a starting value
  console.log(borrowCount)
  return borrowCount
  }

function getBooksPossessedByAccount(account, books, authors) {
  const booksPossessed = books.filter((book) =>  
    book.borrows[0].returned === false && book.borrows[0].id === account.id)
  const bookDetails = booksPossessed.map((detail) => ({ 
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  return bookDetails
}                            

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
