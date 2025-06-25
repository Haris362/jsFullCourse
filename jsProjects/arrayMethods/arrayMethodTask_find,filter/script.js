const itemsArr = [
    {name:"Gaming mouse",price:1200,inStock:true,id:1},
    {name:"Mobile",price:12000,inStock:true,id:2},
    {name:"Power cable",price:200,inStock:false,id:3},
    {name:"Laptop",price:22000,inStock:true,id:4},
    {name:"DDR4 Ram",price:2200,inStock:false,id:5}
]
console.log("All products:");
// Displaying all items name and price
itemsArr.forEach(x=>{    
    console.log(`Product: ${x.name} - Price:${x.price}`);
})
// Converting the products name in captial words
const upperCaseName_Product = itemsArr.map(function(i){
    return i.name.toUpperCase()
})
console.log(upperCaseName_Product);

// Premium items
console.log("Premium itmes");
const premiumProducts = itemsArr.filter((item)=>{
    return item.price >= 3000
}) 
console.log(premiumProducts);

const available_Items = itemsArr.filter(x=>{
     return x.inStock ==true && x.price ==22000 
})
console.log(available_Items);
