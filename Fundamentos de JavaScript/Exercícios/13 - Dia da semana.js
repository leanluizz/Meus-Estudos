class Week {
    constructor(){
        this.Day = (d) =>{
            this.d = d
            switch (d) {
                case 2:
                case 3: 
                case 4: 
                case 5: 
                case 6: 
                return `${d} Dia válido`;
                case 1:
                case 7: 
                return `${d} Dia inválido`; 
                default:
            }
            return d
    }
}
}
const semana = new Week()
console.log(semana.Day(1));
console.log(semana.Day(2));
console.log(semana.Day(3));
console.log(semana.Day(4));
console.log(semana.Day(5));
console.log(semana.Day(6));
console.log(semana.Day(7));