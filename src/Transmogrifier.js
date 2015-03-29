function Transmogrifier(){}

Transmogrifier.prototype.createArray = function(one, two, three, four){
  var array= [];
  array.push(one);
  array.push(two);
  array.push(three);
  array.push(four);
   return array ;
  // return [one, two, three, four];

};


Transmogrifier.prototype.createStringFromArray = function(theArray, delimiter){
       

       return theArray.join(delimiter);
};


Transmogrifier.prototype.reverseSort = function(theArray){
  return theArray.sort().reverse();

};

