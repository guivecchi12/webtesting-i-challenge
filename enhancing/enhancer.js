module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let newEnh = item.enhancement;
  if(newEnh < 20){
    newEnh++;
  }
  return { ...item, enhancement: newEnh };
}

function fail(item) {
  let failedItem = item.enhancement;

  if (failedItem < 15){
    return { ...item, durability: item.durability - 5 };
  }
  else{
    if (failedItem > 16){
      return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1}
    }
    return { ...item, durability: item.durability - 10}
  }
  
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
