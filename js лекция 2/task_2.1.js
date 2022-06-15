
const listSimpleNumber = function (countSimple){
    let anyNumder = 2
    let flag_simple = NaN
    let myArry =[]
    

    while (myArry.length < countSimple){
        // console.log(anyNumder)
        chekNumer: for (flag_=0, i=1 ;i <= anyNumder; i++){
            
            if (anyNumder%i === 0){
                
                flag_++
                if (flag_>2){
                    flag_simple = false
                    break chekNumer
                }
                else {
                    flag_simple = true
                }
                
            }
        }
        if (flag_simple === true){myArry.push(anyNumder);anyNumder++}
        else {
            anyNumder++
        }
        


    
    }
    return console.log(myArry)
}

listSimpleNumber(7)