let quoteString = "Failure is simply the opportunity to begin again, this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString)

let authorString = " -Henry Ford"
let completeString = quoteString.concat(authorString)
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. -Stephen King"
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)
console.log(secondQuote.charAt(2))

let findString = secondQuote.slice(35,120)
console.log(findString)