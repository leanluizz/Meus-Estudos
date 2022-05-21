function createPhoneNumber(number) {
    var concat = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`;
    var semVirgula = concat.split(',');
    var junta = semVirgula.join('');
    return junta;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
console.log(createPhoneNumber([1,1,1,1,1,1,1,1,1,1]));

function PhoneNumberSemArray(ddd, number1, number2) {
    this.concat = `(${ddd}) ${number1}-${number2}`;
    return this.concat;
}
console.log(PhoneNumberSemArray(31, 98407, 9226));