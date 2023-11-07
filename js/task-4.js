function getShippingCost(country) {
  let price;
  let message;

  switch (country) {
    case "China":
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`
      break;
    case "Chile":
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`
      break;
    case "Australia":
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`
      break;
    case "Jamaica":
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  return message;
}

/*
function getShippingCost(country) {
  let price;
  let message;

  if (country === "China") {
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
  } else if (country === "Chile") {
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
  } else if (country === "Australia") {
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
  } else if (country === "Jamaica") {
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
  } else {
    message = "Sorry, there is no delivery to your country";
  }

  return message;

}
*/

/*
function getShippingCost(country) {
  let message;

  message = country === "China" ? `Shipping to ${country} will cost 100 credits` :
    country === "Chile" ? `Shipping to ${country} will cost 250 credits` :
      country === "Australia" ? `Shipping to ${country} will cost 170 credits` :
        country === "Jamaica" ? `Shipping to ${country} will cost 120 credits` :
          "Sorry, there is no delivery to your country";

  return message;
}
*/

// Log to console
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"