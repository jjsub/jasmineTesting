describe("Calculator", function(){

  var calculator;
  
  beforeEach(function(){
    calculator = new Calculator();
  });

  it("should add two numbers", function(){

    var first = 1;
    var second = 7;

    var total = calculator.add(first, second);
    expect(total).toEqual(8);
  });

});


