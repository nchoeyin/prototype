//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

