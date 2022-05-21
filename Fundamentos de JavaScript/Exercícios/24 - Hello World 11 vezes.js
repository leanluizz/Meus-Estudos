function HelloWorld() {
    var hi = "Hello World"
    var n = 0
        setInterval(() => {
            while (n < 11) {
                n++
                  console.log(hi);
              }
        }, 1000);
}
console.log(HelloWorld());