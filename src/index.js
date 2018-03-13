class SmartCalculator {
  constructor(initialValue) {
	this.sequence  = '(' + initialValue + ')';
	let sequence = this.sequence;
	let result, mul, items, pow_count;
	
	let findResult = function(){
		items = [];
		items = sequence;	
		pow_count = true;
		while(pow_count){
			pow_count = false; 
			mul = items.match(/\d+[)].pow[(]\d+/);							
			if(mul){
				let value_1 = Number(mul[0].match(/^\d+/)[0]);
				let value_2 = Number(mul[0].match(/\d+$/)[0]);
				items = items.replace(/\d+[)].pow[(]\d+/,String(Math.pow(value_1,value_2)));
				pow_count = true;
			}					
		}
		items = items.replace(/.add/g,'+');
		items = items.replace(/.multiply/g,'*');
		items = items.replace(/.subtract/g,'-');
		items = items.replace(/.devide/g,'/');
		result = eval(items);
		return result;
	}
	
	String.prototype.add = function(a){		
		sequence = sequence + '.add(' + a + ')';				
		return  new String(findResult());
	}
	
	String.prototype.subtract = function(a){
		sequence = sequence + '.subtract(' + a + ')';		
		return  new String(findResult());
	}

	String.prototype.multiply = function(a){
		sequence = sequence + '.multiply(' + a + ')';		
		return  new String(findResult());
	}
	
	String.prototype.devide = function(a){
		sequence = sequence + '.devide(' + a + ')';		
		return  new String(findResult());
	}
	
	String.prototype.pow = function(a){
		sequence = sequence + '.pow(' + a + ')';		
		return  new String(findResult());
	}
  }

  add(number) {
	return new String(this.sequence.add(number));
  }
  
  subtract(number) {
	return new String(this.sequence.subtract(number));
  }

  multiply(number) {
	return new String(this.sequence.multiply(number));
  }

  devide(number) {
	return new String(this.sequence.devide(number));
  }

  pow(number) {
	return new String(this.sequence.pow(number));
  }
}

 module.exports = SmartCalculator;