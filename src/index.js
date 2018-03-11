class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
	
	String.prototype.add = function(a){return  new String(Number(this)+a)}
	String.prototype.subtract = function(a){return  new String(Number(this)-a)}
	String.prototype.multiply = function(a){return  new String(Number(this)*a)}
	String.prototype.devide = function(a){return  new String(Number(this)/a)}
	String.prototype.pow = function(a){return  new String(Math.pow(Number(this),a))}
  }

  add(number) {
	return new String(this.value+number);
  }
  
  subtract(number) {
	return new String(this.value-number);
  }

  multiply(number) {
	return new String(this.value*number);
  }

  devide(number) {
	return new String(this.value/number);
  }

  pow(number) {
	return new String(Math.pow(this.value,number));
  }
}

module.exports = SmartCalculator;