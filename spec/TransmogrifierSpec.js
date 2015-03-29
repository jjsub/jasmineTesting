describe("Transmogrifier", function(){

  var transmogrifer;
  
  beforeEach(function(){
    transmogrifier = new Transmogrifier();
  });

  it("should create an array", function(){

    var newArray = transmogrifier.createArray(1, 2, 3, 4);
    expect(newArray).toEqual([1,2,3,4]);
    //expect(newArray).toEqual(jasmine.arrayContaining(["a","b","c","d"]));

  });


  it("should convert an array to a string", function(){

    var newString = transmogrifier.createStringFromArray(["a","b"], "*");
    expect(newString).toEqual("a*b"); 

  });
  it("should create a reverse sorted array", function(){
    var revString = transmogrifier.reverseSort(["f","a","b"]);
    expect(revString[1]).toEqual("b");

  });
});
