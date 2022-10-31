var num     
var count = 0
function pickEvenCount(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i]% 2 === 0) {
            // console.log(num[i]);
              count++

        }
    }
     return count

}
var evenChar = pickEvenCount([1,2,5,6,5,85,2,10,8])
console.log("Even Count is ",evenChar);