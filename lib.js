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
Using customers.reduce() method to iterate through customer objects, creating cart object for every customer and filling it with customer.name 
and array of items in customer cart. Array of items in customer cart we are getting as return of reduce() iteration on return of  entries() 
function (sending crntCustomer.shoppingList as an argument).  entries() function return array of arrays [itemName, count]. 
Sending both values of those inner arrays as a parametr to itemRepeater() function we are getting array of items for crntCustomer as a return
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
