const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const uBooks = books.filter((bk) => bk.genre === "Non-Fiction")
  console.log(uBooks);

  const after2000= books.filter((bk) => { return bk.publish > 2000})
  console.log(after2000);


//   const bkname = function () {
//     let x=10
//    console.log("log value ",x); // bkname wiil not return  any thing 
//     return x
    
//   }
//  console.log(bkname());
 const bkfilter=books.filter((bk)=>{
     return bk.genre === "History" && bk.publish > 1990})
 console.log(bkfilter);
 