const quaseumArray = {0: "Rafael", um: "Ana", 2: "Bia"}
 Object.defineProperty(quaseumArray, "toString", {
        value: function () {return Object.values(quaseumArray)}, 
        enumerable: false
    })
    console.log(quaseumArray[0], quaseumArray.um);