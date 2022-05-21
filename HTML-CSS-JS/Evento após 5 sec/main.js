const linkPrevent = (e) =>{

    let time = 5
       const cron =  setInterval(() => {
        document.querySelector(".time").innerHTML = `Google abrirá em ${time} segundos`
           time--
           if (time <= -1) {   
               clearInterval(cron);
           }
        }, 1000);
}
