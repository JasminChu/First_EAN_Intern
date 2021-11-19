var express = require('express');
var router = express.Router();
var moment = require('moment');


//mesti ada ini to initial the "loadash"
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

//mesti ada ini to initial the "loadash"
var _ = require('lodash');

//Loadash Upper Case
// var upperCase = require('lodash.uppercase');



router.get('/', function(req, res, next) {

  // let arrayOne= ['Jasmin', 'Alvin'];
  // let arrayTwo= ['KY', 'Jorden'];
  // let capitalize = [];
  // let capitalize2 = [];
  // for (const element of arrayOne){
  //   capitalize.push(_.toUpper(element));
  // }
  // for (const element of arrayTwo){
  //   capitalize2.push(_.toUpper(element));
  // }



  //"let" = "const" (content cannot be changed)
  //"var" (content allowed to be changed)

  let array1 =['Jasmin', 'Alvin'];
  let array2 =  ['KY', 'Jorden'];


  let upperResult1 = array1.map(function(dat) {
    return _.upperCase(dat);
  });
  let upperResult2 = array2.map(function(dat) {
    return _.upperCase(dat);
  });

  //change array list to string
  var StringArray1= array1.toString();
  var UpperArray1= _.upperCase(StringArray1);

  var StringArray2= array2.toString();
  var UpperArray2= _.upperCase(StringArray2);

  //Show the result on the console line (cmd)
  //Console.log(UpperArray2);

  let data = {
    title: 'Little Mermaid',
    title2: 'Jasmin',
    age : moment().diff('2000-06-13', 'years'),
    array1: array1,
    array2: array2,
    array3: UpperArray1,
    array4: UpperArray2,
    array5: _.concat(upperResult1,upperResult2),
    array6: _.concat(array1,array2)

    // array3: _.upperCase("Jasmin") ("Jasmin", must be a string)

  };

  res.render('index', data);
});











module.exports = router;
