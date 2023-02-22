// code your solution here
 function superbowlWin (record, sadReality) {
    const broncos = record.find((record) => record.result === "W")
    return broncos ? broncos.year : undefined
 }



