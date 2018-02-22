    let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
   /* const divisibleFactory = function(z){
        return function(){
            return result=arr.filter(x=>x%z===0);
          };
        
        
}
    let divisibleBy3=divisibleFactory(3);
    let divisibleBy10=divisibleFactory(10);
    let divisibleBy21=divisibleFactory(21);
    console.log("Numbers divisible by 3: ",divisibleBy3());
    console.log("Numbers divisible by 10: ",divisibleBy10());
    console.log("Numbers divisible by 21: ",divisibleBy21());
    console.log("Amount of numbers divisible by 3: ",divisibleBy3().length);
    console.log("Amount of numbers divisible by 10: ",divisibleBy10().length);
    console.log("Amount of numbers divisible by 21: ",divisibleBy21().length);*/

const divisibleFactory = function(z) {

        return x => x % z === 0;

    }
    const divisibleBy3 = divisibleFactory(3);
    console.log(arr.filter(divisibleFactory(3)));
    console.log(arr.filter(divisibleFactory(10)));
    console.log(arr.filter(divisibleFactory(21)));
    console.log(arr.filter(divisibleFactory(5)));

    arr2 = [];

    arr2.push((arr.filter(divisibleFactory(1))).length);
    arr2.push((arr.filter(divisibleFactory(2))).length);
    arr2.push((arr.filter(divisibleFactory(3))).length);
    arr2.push((arr.filter(divisibleFactory(4))).length);
    arr2.push((arr.filter(divisibleFactory(5))).length);
    arr2.push((arr.filter(divisibleFactory(6))).length);
    arr2.push((arr.filter(divisibleFactory(7))).length);
    arr2.push((arr.filter(divisibleFactory(8))).length);
    arr2.push((arr.filter(divisibleFactory(9))).length);
    arr2.push((arr.filter(divisibleFactory(10))).length);
    arr2.push((arr.filter(divisibleFactory(11))).length);
    arr2.push((arr.filter(divisibleFactory(12))).length);
    arr2.push((arr.filter(divisibleFactory(13))).length);
    arr2.push((arr.filter(divisibleFactory(14))).length);
    arr2.push((arr.filter(divisibleFactory(15))).length);
    arr2.push((arr.filter(divisibleFactory(16))).length);
    arr2.push((arr.filter(divisibleFactory(17))).length);
    arr2.push((arr.filter(divisibleFactory(18))).length);
    arr2.push((arr.filter(divisibleFactory(19))).length);
    arr2.push((arr.filter(divisibleFactory(20))).length);
    arr2.push((arr.filter(divisibleFactory(21))).length);
    arr2.push((arr.filter(divisibleFactory(22))).length);
    arr2.push((arr.filter(divisibleFactory(23))).length);
    arr2.push((arr.filter(divisibleFactory(24))).length);
    arr2.push((arr.filter(divisibleFactory(25))).length);
    arr2.push((arr.filter(divisibleFactory(26))).length);
    arr2.push((arr.filter(divisibleFactory(27))).length);
    arr2.push((arr.filter(divisibleFactory(28))).length);
    arr2.push((arr.filter(divisibleFactory(29))).length);
    arr2.push((arr.filter(divisibleFactory(30))).length);
    console.log(arr2)
