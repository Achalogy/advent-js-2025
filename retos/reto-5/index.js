/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const getTime = s => {
    let splittedDate = s.slice(0, -2).split(/[\|\*@]/g)
    splittedDate[1] = Number(splittedDate[1]) - 1 // El més se hace en indice, es decir diciembre es 11, enero es 0
    let date = Date.UTC(...splittedDate);
    return date;
  }

  return (getTime(takeOffTime) - getTime(fromTime)) / 1000

}