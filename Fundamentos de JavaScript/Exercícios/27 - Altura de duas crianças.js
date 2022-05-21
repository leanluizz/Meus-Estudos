class Born {
    constructor(height1, height2,fees){
           this.height1 = height1;
           this.fees = fees;
           this.height2 = height2;
           fees = 10
        this.Compare = () =>{
            if (height1 < height2) {
               this.rest = height1 - height2;
                return `Tem ${this.rest.toFixed(2)} cm de diferença e a primeira é a menor,a taxa de nascimento é ${fees} anos`
            }else if (height2 < height1) {
               this.rest = height2 - height1;
                return `Tem ${this.rest.toFixed(2)} cm de diferença e a segunda é a menor,a taxa de nascimento é ${fees} anos`
            }
        }
    }
}

const Test = new Born(1.80, 1.30)
console.log(Test.Compare());