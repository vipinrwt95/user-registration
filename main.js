//let btn=document.querySelector('.btn')
//console.log(btn);

// btn.addEventListener('click',additem);

// function additem(e)
// { 
//   e.preventDefault();

//   let target=document.getElementById('users');
//   let name=document.getElementById('name');
//   let email=document.getElementById('email');

//   if(name.value==""||email.value=="")
//   {
//     alert("both fields required")
//   }
//   else
//   {
//     let userdetails = {
//        name:name.value,
//        email:email.value  
//      }
     
//    //to convert object into string 
//      let userserial=JSON.stringify(userdetails);
//      //console.log(userserial);

//      axios
//   // deserializing to use the created object
//      let userdeserial=JSON.parse(localStorage.getItem(name))
//      console.log(userdeserial)
//     let details=document.createElement('li');
//     FileList.id="info";
//     let info=document.createTextNode(userdeserial.name);
//     let space=document.createTextNode("  ");
//     let emailinfo=document.createTextNode(userdeserial.email);
//     details.appendChild(info);
//     details.appendChild(space);
//     details.appendChild(emailinfo);
    
//     console.log(target);
//     target.appendChild(details);

   
   

//  let deletebutton=document.createElement('button');
// deletebutton.id="delete";
// let del =  document.createTextNode("DELETE");
// deletebutton.appendChild(del);
// console.log(target)
// target.appendChild(deletebutton);
// let editbutton=document.createElement('button');
// editbutton.id="edit";
// let edit =  document.createTextNode("EDIT");
// editbutton.appendChild(edit);
// console.log(target)
// target.appendChild(editbutton);
//     }
//   name.value="";
//   email.value="";

// }
// if(localStorage!=null)
// {
//   let target=document.querySelectorAll('#users')
//   let editbutton=document.lastElementChild.target;
//   console.log(editbutton);
  
   
//   console.log(editbutton);
  
//   function editinfo(e)
//   {
//    // e.preventDefault();
  
//     let username=document.getElementById('name');
//     let email=document.getElementById('email');
    
//    console.log("hello");
//   }
// }


// USING AXIOS AND CRUD CRUD FOR STORING DATA WHICH WE RETRIEVE FROM USERS



let btn=document.querySelector('.btn')
btn.addEventListener('click',senditem);

function senditem(e)
{

 e.preventDefault();
 //let target=document.getElementById('users');
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
     addtodo();
    function addtodo()
    {
      axios
      .post('https://crudcrud.com/api/38a89a79566d4adc84149fe8b0e7c75e/appointmentsData',{userdetails})
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    } 
  }
  }


