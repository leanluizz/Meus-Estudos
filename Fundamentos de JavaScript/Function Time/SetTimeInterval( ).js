function contador2 (){
    num2 = 0
    setInterval(() => {
        num2++
        if (num2 > 5) {
            num2 = 1
        }
        console.log(num2);
    }, 1000);
   
  }
  console.log(contador2());