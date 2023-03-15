app.controller('filterBooks', ['$scope', function($scope) {
    let books = [
        { title: "Da Vinci Code, The", author: "Brown, Dan", year: new Date("May 19, 2006"), price: 1200},
        { title: "Harry Potter and the Deathly Hallows", author: "Rowling, J.K.", year: new Date("November 18, 2010"), price: 2100},
        { title: "Harry Potter and the Philosopher's Stone", author: "Rowling, J.K.", year: new Date("June 26, 1997"), price: 1500},
        { title: "Harry Potter and the Order of the Phoenix", author: "Rowling, J.K.", year: new Date("June 21, 2003"), price: 1250},
        { title: "Fifty Shades of Grey", author: "James, E. L.", year: new Date("20 June 2011"), price: 1000},
        { title: "Harry Potter and the Goblet of Fire", author: "Rowling, J.K.", year: new Date("July 8, 2000"), price: 2000},
        { title: "Harry Potter and the Chamber of Secrets", author: "Rowling, J.K.", year: new Date("July 2, 1998"), price: 2500},
        { title: "Harry Potter and the Prisoner of Azkaban", author: "Rowling, J.K.", year: new Date("July 8, 1999"), price: 2000},
        { title: "Angels and Demons", author: "Brown, Dan", year: new Date("May 1, 2000"), price: 1250},
        { title: "Harry Potter and the Half-blood Prince:Children's Edition", author: "Rowling, J.K.", year: new Date("16 July, 2005"), price: 1400},
        { title: "Fifty Shades Darker", author: "James, E. L.", year: new Date("September 1, 2011"), price: 1200},
        { title: "Twilight", author: "Meyer, Stephenie", year: new Date("October 5, 2005"), price: 1100},
        { title: "Girl with the Dragon Tattoo,The:Millennium Trilogy", author: "Larsson, Stieg", year: new Date("August 1, 2005"), price: 5000},
        { title: "Fifty Shades Freed", author: "James, E. L.", year: new Date("April 17, 2012"), price: 2300},
        { title: "Lost Symbol,The", author: "Brown, Dan", year: new Date("September 15, 2009"), price: 1200},
        { title: "New Moon", author: "Meyer, Stephenie", year: new Date("August 21, 2006"), price: 1400},
        { title: "Deception Point", author: "Brown, Dan", year: new Date("January 1, 2001"), price: 2000},
        { title: "Eclipse", author: "Meyer, Stephenie", year: new Date("August 7, 2007"), price: 2500},
        { title: "Lovely Bones,The", author: "Sebold, Alice", year: new Date("January 1, 2002"), price: 1000},
        { title: "Curious Incident of the Dog in the Night-time,The", author: "Haddon, Mark", year: new Date("May 1, 2003"), price: 1200},
        { title: "Digital Fortress", author: "Brown, Dan", year: new Date("January 1, 1998"), price: 1000}
    ];

    $scope.books = books;
    $scope.rowLimit = 22;
}])