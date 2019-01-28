module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if (item.enhancement > 0 && item.enhancement <= 15) {
    item.enhancement += 1;
  } else if ((item.enhancement = 16)) {
    item.enhancement = "PRI";
  } else if ((item.enhancement = 17)) {
    item.enhancement = "DUO";
  } else if ((item.enhancement = 18)) {
    item.enhancement = "TRI";
  } else if ((item.enhancement = 19)) {
    item.enhancement = "TET";
  } else if ((item.enhancement = 20)) {
    item.enhancement = "PEN";
  }
  return item;
}

function fail(item) {
  if (item.enhancement <= 14) {
    item.durability -= 5;
  } else if (item.enhancement > 14) {
    item.durability -= 10;
  }
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
}
