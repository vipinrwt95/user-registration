let btn=document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click',additem);

function additem(e)
{ 
  e.preventDefault();

  let name=document.getElementById('name');
  let email=document.getElementById('email');

  if(name.value==""||email.value=="")
  {
    alert("both fields required")
  }
  else
  {
    let userdetails = {
       name:name.value,
       email:email.value  
     }

   //to convert object into string 
     let userserial=JSON.stringify(userdetails);
     console.log(userserial);

     localStorage.setItem(name,userserial);
  // deserializing to use the created object
     let userdesserail=JSON.parse(localStorage.getItem(name))
     console.log(userdesserail)
   }
   
  name.value="";
  email.value="";

}