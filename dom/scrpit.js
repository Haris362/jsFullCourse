const ul = document.createElement("ul");//Creating ul
document.body.appendChild(ul)//Adding element in html code

const li = document.createElement("li");//creating list
ul.appendChild(li)//Adding listm tag in unordered list  
li.textContent = 'Pakistan'

const li_2 = document.createElement("li");//creating list
ul.appendChild(li_2)//Adding listm tag in unordered list  
li_2.textContent = 'China'

const li_3 = document.createElement("li");//creating list
ul.appendChild(li_3)//Adding listm tag in unordered list  
li_3.textContent = 'Dubai'
document.write(
    `<h3>Please check the console.</h3>`    
)
// Now we are checking the childrens and parents
const parent = ul;
console.log('Childrens of ul: ',parent.children);//getting children elements using parent element
console.log('Parent of li:',li_2.parentElement);//getting parent elements using its children


