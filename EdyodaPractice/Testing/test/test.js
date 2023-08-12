const chai = require('chai');
const{expect}=chai;

function add(num1,num2){
    return num1 + num2;
}

//Test cases
describe('add', ()=>{
    it('should add a number', ()=>{
        const num1 =5;
        const num2 =10;
        const result = add(num1,num2);
        expect(result).to.equal(15);
    })
});