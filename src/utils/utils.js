export const randomIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const weightedRandomBag = list => {
  let items = [];
  let accumulatedWeight = 0;
  let randomWeight;
  let foundItem;

  list.forEach(x => {
    accumulatedWeight += x.weight;
    items.push({ ...x, weight: accumulatedWeight });
  });

  randomWeight = Math.random() * accumulatedWeight;
  foundItem = items.find(entry => entry.weight >= randomWeight);
  return foundItem;
};

export const diceRoller = (number, type, modifier) => {
  let diceroll = 0;

  for (let i = 1; i <= number; i++) {
    let roll = randomIntInRange(1, type);
    diceroll += roll;
  }

  return diceroll + modifier;
};
