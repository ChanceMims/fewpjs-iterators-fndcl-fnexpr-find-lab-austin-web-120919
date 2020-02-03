function superbowlWin(record){
  let recordElement = record.find(recordElement => {return recordElement.result === 'W'});
  return recordElement ? recordElement.year : undefined ;
}
