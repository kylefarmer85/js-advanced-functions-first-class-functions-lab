// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  // return [drivers[0], drivers[1]]
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  // return [drivers[drivers.length-2], drivers[drivers.length-1]]
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  return function (value) {
    return multiplier * value
  }
} 

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3);

selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers)
}