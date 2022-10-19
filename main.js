let btn=document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click',additem);

function additem(e)
{ 
  e.preventDefault();

  let target=document.getElementById('users');
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
     //console.log(userserial);

     localStorage.setItem(name,userserial);
  // deserializing to use the created object
     let userdeserial=JSON.parse(localStorage.getItem(name))
     console.log(userdeserial)
    let details=document.createElement('li');
    FileList.id="info";
    let info=document.createTextNode(userdeserial.name);
    let space=document.createTextNode("  ");
    let emailinfo=document.createTextNode(userdeserial.email);
    details.appendChild(info);
    details.appendChild(space);
    details.appendChild(emailinfo);
    
    console.log(target);
    target.appendChild(details);

    }
   

 let deletebutton=document.createElement('button');
deletebutton.id="delete";
let del =  document.createTextNode("DELETE");
deletebutton.appendChild(del);
console.log(target)
target.appendChild(deletebutton);
   


  name.value="";
  email.value="";

}




