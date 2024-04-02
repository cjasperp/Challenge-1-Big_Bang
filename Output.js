//by Cornileus Jasper Patrick Laban

let bigbang = [] 

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        bigbang.push("BIGBANG")
    } else if (i % 3 == 0){
        bigbang.push("BIG")
    } else if (i % 5 == 0){
        bigbang.push("BANG")
    } else {
        bigbang.push(i)
    }
}

console.log(bigbang)