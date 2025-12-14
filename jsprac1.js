console.log('hello')//print ค่าใน browser
//prompt('this s')//กรอกผ่านpopupbrowser
let firstname = 'Counter' //var type ->string num bool arr object
let age = 19.1;
console.log(firstname)//print var
console.log('I am ',age,'years old')
const id = 19
/*
id = 15
console.log(id) แก้ const ไม่ได้ */
let x = prompt('your score');
// && and || or
if(x>50)
    console.log("pass")
let ages = [ 30 , 35 , 35]// idx 0 = first element like c++
//เติม .push ลบ.pop  หา.include
console.log(ages)
ages.push(20)
ages.push(29)
console.log(ages)
ages.pop()
console.log(ages)
if(ages.includes(20)){
    console.log("has 20")
}
ages.forEach( (s) =>{ // for auto x: ใน c++
    console.log(s)
})
/*for each 
ages.map( (s) =>{// for auto &x: ใน  
    return s * 2
})
ต้องเอาตัวแปรใหม่มารับค้า
ages.forEach( (s) =>{ // for auto x: ใน c++
    console.log(s)
})*/
//
//object arr
let info = [
    {
        age:30,
        fn: 'rob',
        rank: 'A'
    },
    {
        age:15,
        fn: 'obob',
        rank: 'B'
    },
]
for( let index=0;index< info.length;index++){
    console.log(info[index].fn)
    console.log(info[index].age)
    console.log(info[index].rank)
}
