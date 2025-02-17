/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
// const ticketInfo = {
//   ticketType: "general",
//   entrantType: "senior",
//   extras:[`movie`, `terrace`],
// };


function calculateTicketPrice(ticketData, ticketInfo) {

// WORKED WITH DAN, I KINDA UNDERSTAND THIS AT THIS POINT BUT I CANNOT WRITE THIS! DON'T WANT YOU TO THINK IM LEARNING MORE THAN I AM!!!

  let total = 0;
  let type = ticketInfo.ticketType;
  let age = ticketInfo.entrantType;
  let addOns = [...ticketInfo.extras];
  

  if (!ticketData[type]) {
    return `Ticket type '${type}' cannot be found.`
  } 
  if (!ticketData[type][`priceInCents`][age]) {
    return `Entrant type '${age}' cannot be found.`
  } 
  total += ticketData[type][`priceInCents`][age];
  
        for (const addOn of addOns) {
          if (ticketData[`extras`][addOn]) {
            total += ticketData[`extras`][addOn][`priceInCents`][age];
          }
          if (!ticketData[`extras`][addOn]) {
            return `Extra type '${addOn}' cannot be found.`
          }
        }
  return total
}

// calculateTicketPrice(exampleTicketData, ticketInfo)

  
  //ERRORS


  // GENERAL ADMISSION WITHOUT EXTRAS

  
  //   for (let ticket of ticketInfo.ticketType) {
     
  //     total += ticketData[ticket].priceInCents[ticketInfo.entrantType]
     
  //     console.log('***', ticketData[ticket].priceInCents[ticketInfo.entrantType])
  //   }
  


  // if (ticketInfo.ticketType === 'general' && ticketInfo.entrantType === 'child') {
  //   total += ticketData.general.priceInCents.child;
  // } else if (ticketInfo.ticketType === 'general' && ticketInfo.entrantType === 'adult') {
  //   total += ticketData.general.priceInCents.adult;
  // } else if (ticketInfo.ticketType === 'general' && ticketInfo.entrantType === 'senior') {
  //   total += ticketData.general.priceInCents.senior;
  // } 
  // // MEMBERSHIP WITHOUT ADDONS
  // if (ticketInfo.ticketType === 'membership' && ticketInfo.entrantType === 'child') {
  //   total += ticketData.membership.priceInCents.child;
  // } else if (ticketInfo.ticketType === 'membership' && ticketInfo.entrantType === 'adult') {
  //   total += ticketData.membership.priceInCents.adult;
  // } else if (ticketInfo.ticketType === 'membership' && ticketInfo.entrantType === 'senior') {
  //   total += ticketData.membership.priceInCents.senior;
  // }

  // //GENERAL ADMISSION WITH EXTRAS
  // if (ticketInfo.extras.length > 0) {
  //   for (let extra of ticketInfo.extras)
  //   {
  //     console.log('###', ticketData.extras[extra].priceInCents[ticketInfo.entrantType])


  //     total += ticketData.extras[extra].priceInCents[ticketInfo.entrantType]

  //   }
  // } 

  // if (ticketInfo.ticketType !== ticketData.ticketType) {
  //   if (ticketInfo.entrantType !== ticketData.entrantType) {
  //     if (ticketInfo.extras !== ticketData.extras) {
  //       return`Extra type 'incorrect-extra' cannot be found.`
  //         } else {
  //       return `Entrant type 'incorrect-entrant' cannot be found.`
  //       }
  //     } else {
  //     return `Ticket type 'incorrect-type' cannot be found.`
  //   }
  // }

// loop through extras for price


// }
/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchases. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */
function purchaseTickets(ticketData, purchases) {
  //worked with Mina, Edgy, Fadila for part of it, got outside help which gave me the idea of what the problem expected an d a clearer way of how to solve it. I decided to give this another try and IT WORKED! I WROTE THIS!!! WHOOHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let retString = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  let ticketsTotal = 0;
  let formattedTicketsTotal = 0;

  
  //ERRORS
  for (let purchase of purchases) {

    const total = calculateTicketPrice(ticketData, purchase);
    if (typeof total === 'string') {
      return total;
    } else if (typeof total === 'number') {
      ticketsTotal += total;
      formattedTicketsTotal = (total / 100).toFixed(2);


      // console.log('***** formattedTicketTotal', formattedTicketsTotal)
      
    }
    

    //DYNAMIC VARS
    let capEntrant = purchase.entrantType[0].toUpperCase() + purchase.entrantType.slice(1) + " " + ticketData[purchase.ticketType][`description`] + ":";
    
    retString += `${capEntrant} $${formattedTicketsTotal}`
    

    // if purchase array is defined
    if (purchase.extras.length > 0) {

      //DYNAMIC CAPITALIZED EXTRAS 
      let capExtraArray = [];
      for (let extra of purchase.extras) {
        capExtraArray.push(extra[0].toUpperCase() + extra.slice(1) + ' Access');
      }
        let capExtras = capExtraArray.join(", ");
        // console.log('!!!!!', capExtras);
        // RETSTRING BODY
        retString += ` (${capExtras})`
      

       
        
      // "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nSenior Membership Admission: $45.00 (Terrace Access, Education Access)\nChild Membership Admission: $25.00 (Education Access)\nChild Membership Admission: $25.00 (Education Access)\nChild Membership Admission: $25.00 (Education Access)\nChild Membership Admission: $25.00 (Education Access)\nAdult Membership Admission: $50.00 (Terrace Access, Education Access)\n-------------------------------------------\nTOTAL: $195.00";

      // extraArr.forEach(element => { capExtras.push(element[0].toUpperCase() + element[0].slice(1) + ' Access')
      // ;
      
    
    
    
    }
   
  retString += `\n`
    
  }
  finalTotal = (ticketsTotal / 100).toFixed(2);
  // console.log('$$$finalTota', finalTotal);

  retString += `-------------------------------------------\nTOTAL: $${finalTotal}`;
  console.log(retString);
    

  return retString;
}








 // console.log('###',purchases[0];)  


  // if typeof = string, its an error, if typeof = nuber then run the function
  // string for errors, numbers for output

  //iterate over purchases and see if its an error and if it is then return the error 

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
