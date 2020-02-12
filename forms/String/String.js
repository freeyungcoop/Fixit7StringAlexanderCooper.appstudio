//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Use this format for your output:
let quoteString = "Failure is simply the opportunity to begin again, this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString)

//Create a new variable named authorString and put this text in it. 
let authorString = " -Henry Ford"

//Then create a new variable completeString that holds a new string created by using a string method to put the string in authorString on the end of the string in quoteString.
let completeString = quoteString.concat(authorString)
console.log(`The string in quoteString is: ${completeString}`)

//Now create a new string variable named secondQuote and put this string in it
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. -Stephen King"

//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. 
let lowerCaseString = secondQuote.toLowerCase()
console.log(`lower case string is: ${lowerCaseString}`)

console.log(`The character at location 3 is ${secondQuote.charAt(2)}`)

let findString = secondQuote.slice(35,120)
console.log(findString)