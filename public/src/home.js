function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter(book => book.borrows[0].returned === false)
  return borrowed.length
}

function getMostCommonGenres(books) {
    let genres = []
    books.forEach(book => {
      let genreExists = genres.find(genre => book.genre === genre.name)
      genreExists === undefined ? genres.push({ name: book.genre, count: 1 }) : genres.find(genre => genre.name === genreExists.name).count += 1;
          }
        ) 
    sortTopFive(genres)
  return genres.splice(0, 5)
  }

function getMostPopularBooks(books) {
     let thebooks = books.map(book =>{   
       return {
         name: book.title,
         count: book.borrows.length}
     })
     sortTopFive(thebooks)
  return thebooks.splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const popularguys = [];
  books.forEach((book) => {authors.forEach((author) => {
      let fullname = `${author.name.first} ${author.name.last}`;
      if (book.authorId === author.id) {
        popularguys.push({name: fullname, count: book.borrows.length})
      }
    })
  })
  sortTopFive(popularguys)
  popularguys.splice(5)
  console.log(popularguys)
 return popularguys
}

 //my helper func that is called within three different funcs
function sortTopFive(total){
  return total.sort((count1, count2) => count2.count - count1.count)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
