const array =[
    
    {
        name: "Bill",
        age:11, 
        sibling:[
            {
                name:"Boldoo",
                age:9,
            },

            {
                name:"Bolor",
                age1:11,
            },
        ],
    },
   
];
console.log(array[0].sibling[1].name);

const array1 =[
    [
        {
            name:"Bill",
            
        },
    
        {
            name:"Dul",
           
        },
        
    ],

    [
        {
            name:"Alungoo",
           
        },

        {
            name:"Munkuush",
           
        },
   
       
    ],
    
   
];

console.log(array1[0][1].name)


const array2 = [1,2,3,4,5];
let result = [];
// 1.elenmenteer ni araas guine
// 2. shine array vvsgene
// 3. shine arrayluu neg negeer ni urwuulj gargasan toonuuda oruulna
for (let index= array2.length-1;index >= 0; index--){
result[result.length]=array2[index]
    console.log(array2[index])
}


// REVERSE
const array3 = [1,2,3,4,5]
array3.reverse();
console.log(array3);
// SORT
const array4 = [1,2,3,4,5]
array4.sort();
console.log(array4);
// toString
const array5 = [1,2,3,4,5]
console.log(typeof array5.toString());
// Inludes
const array6 = [100,200]
console.log (array6.includes(100));
// PUSH
const array7=[1,2,3];
array7.push(100,500);
console.log(array7);
// POP
const array8 = [1,2,3]
console.log(array8.pop());


const array9 = [1,3,2]
array9.sort((a,b)=>b-a);
console.log(array9);



