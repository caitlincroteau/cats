// asyncBreeds.js
const fs = require('fs');

const printOutData = function(breedInfo) {
  console.log("Return value: ", breedInfo);
}
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    //pass data into callback instead of returning it directly

    console.log("In readFile's Callback: it has the data.");

    if (!error) functionToRunWhenThingsAreDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
breedDetailsFromFile('Bombay', printOutData);
