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
  localStorage.setItem(name.value,email.value);

  name.value="";
  email.value="";

}