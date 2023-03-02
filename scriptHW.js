// Task1
// const fibonacci= n=>{
//     let num1=1;
//     let num2=1;
//     let numNext;
//     let fibNums=' ';
// for(i=1;i<=n; i++){
//     fibNums += num1 + ' ';
//     numNext= num1+num2;
//     num1=num2;
//     num2=numNext;
// }
// return fibNums
// }
// console.log(fibonacci(1))

//Task2



// function sum(q,n){
//     let b1=1;
//     let bNew=0;
    
//     for(i=1;i<=q;i++){
//         bNew+=b1;
//         b1*=n;

//     }
//     return bNew

// }

// function sum(q,n){
//     let result=0;
//     for(i=1;i<=n;i++){
//         result= q**n;
//         return result
//     };
    
//     return function res(){
//         let bNew=0;
//         bNew=(1-result)/(1-q)
         

//     }
    
// }

// Task3



const easy=()=>{
    let n= +prompt('Введіть перше число');
    let n1= +prompt('Введіть друге число');
       
    for(i=n;i<=n1; i++){
        for (let j = 2; j < i; j++) { 
            if (i % j === 0) 
            return easy;
    
    }
    console.log(i)
    }
}
    
 