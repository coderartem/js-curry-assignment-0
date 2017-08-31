'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */

 /*
  Creating new array and fill it with the same 'itemName' 'count' number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let arr = new Array(count);
      return arr.fill(itemName,0,count);
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
/*
Using customers.reduce() method to iterate through customer objects, creating cart object for every customer by calling cart() function. 
Sending current customer shoppingList object to entries() function that return array of arrays [itemName, count]. 
Using reduce() method to iterate through inner arrays of returned array and sending both values of those inner arrays as a parameter to 
itemRepeater() function that return array of 'itemName' 'count' number of times. Creating items list for current customer by adding those arrays 
of particular items together. Putting that list of items as second parameter in cart() function along with crntCustomer.name as first parameter.
Pushing returned cart() object to resultArray.
*/

const constructCarts =
  listings =>
    customers =>
      customers.reduce((resultArray, crntCustomer) => {
        resultArray.push(cart(crntCustomer.name, ...entries(crntCustomer.shoppingList).reduce((crntArryForCrntCustmr, tempDoubleArray) => { 
          return crntArryForCrntCustmr.concat(itemRepeater(tempDoubleArray[0])(tempDoubleArray[1]));
        }, [])));
        return resultArray;
      }, []);


module.exports = {
  listing,
  customer,
  constructCarts
}
