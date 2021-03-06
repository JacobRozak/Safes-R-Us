/**
* DO NOT MODIFY, I REPEAT, DO NOT MODIFY
**/

/**
* Gets an item from a safe
* @param {string} password - the password for the safe
* @returns {Promise} promise that resolves or rejects depending on whether the password is correct
*
*/
function getItemFromSafe(password) {
    const itemsMap = {
      '10-A-w-4-878': 'Magic Wand',
      '16-R-a-9-1497': 'The one ring to rule them all',
      '5-N-3-441': 'Corgi',
      '9-Y-d-2-643': 'Apples and Pears',
      '7-H-673': 'Oscar nomination',
      '12-D-l-4-860': 'Chocolate Brownie'
    }
    return new Promise((resolve, reject) => {
      if (itemsMap[password]) {
        resolve(itemsMap[password])
      } else {
        reject('Unauthorised access to safe')    
      }
    })
  }
/** 
 * END DO NOT MODIFY 
 **/

async function unlockSafe(customerName) {
  /** 
   * WRITE YOUR CODE IN HERE 
   **/
  var generatedPassword = 
    `${customerName.replace(/\s+/g, '').length}-`+
    `${customerName.slice(0,1)}-`+
    `${customerName.match(' ') ? customerName[customerName.match(' ').index+1].toLowerCase()+'-' : ''}`+
    `${(customerName.match(/[aeiou]/gi) || []).length>0?(customerName.match(/[aeiou]/gi) || []).length+'-':''}`+
    `${[...Array.from(new Set(customerName.toLowerCase())).join('').replace(' ', '')]
      .map((e) => {return e = e.charCodeAt()})
      .reduce((a,b) => { return a + b})
    }`
  
  return getItemFromSafe(generatedPassword).catch((error) => error); 
};

module.exports = unlockSafe
