    let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
    const divisibleFactory = function(z){
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
    console.log("Amount of numbers divisible by 21: ",divisibleBy21().length);
