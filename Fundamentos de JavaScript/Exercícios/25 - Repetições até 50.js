class Numbers {
    constructor(i){
        this.i = i;
        this.while = () =>{
            while (i < 50) {
                i++
                console.log(i);
            }
        this.for = () =>{
             for (let i = 0; i < 51; i++) {
                 console.log(i);
                 
             }
        }
        }
    }
}
const AteCinquenta = new Numbers(0)
console.log(AteCinquenta.while(), "while");
console.log(AteCinquenta.for(), "for");