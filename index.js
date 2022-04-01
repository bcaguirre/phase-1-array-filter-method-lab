// Code your solution here
function findMatching(arr, str){
    const result = arr.filter(function(driver){
       return (driver.toUpperCase() === str.toUpperCase())
    });
    return result
}

function fuzzyMatch(driverName, matchingName){
   function isMatchingLetters(driverName){
        return driverName.startsWith(matchingName)
    }
    return driverName.filter(isMatchingLetters)    
}

function matchName(driverInfo, matchingDriver){
   const result = driverInfo.filter(function(driver){
    return (driver.name.toLowerCase() === matchingDriver.toLowerCase())
   });
   return result
}