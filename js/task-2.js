function formatMessage(message, maxLength){

  if (message.length <= maxLength){
    return message;
  } else {
    return message.substring(0,maxLength) + "..."
  }
  
}


/*
function formatMessage(message, maxLength) {

  const resault = message.length <= maxLength ? message : message.substring(0, maxLength) + "...";
  return resault;

}
*/

/*function formatMessage(message, maxLength) {

  switch (true) {
    case message.length <= maxLength:
      return message;
    case message.length > maxLength:
      return message.substring(0, maxLength) + "..."
    default:
      return 'Invalid input.';
  }

}
*/
// Log to console
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"