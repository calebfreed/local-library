function findAuthorById(authors, id) {
  const object = authors.find( number => number.id === id)
  return object
}

function findBookById(books, id) {
  const object = books.find( number => number.id === id)
  return object
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter( out => out.borrows[0].returned === false)
  const checkedIn = books.filter( notOut => notOut.borrows[0].returned === true)
  console.log(checkedOut)
  return [checkedOut, checkedIn]
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows.map(borrow => {
    const account = accounts.find(accounted => accounted.id === borrow.id);
    account.returned = borrow.returned;
    return account;
  });
  return borrowed.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
