var name =prompt('WHAT IS YOuR NAME')
if(name=='Admin'){
  var password=prompt('WHAT IS YOUR PASSWORD')
  if(password=="TheMaster"){
    alert('wellcome');
  }
  else if(password=="null"){
    alert('Canceled');
  }
  else{
    alert('Wrong password');
  }
}
else if(name=="null"){
    alert('Canceled');
  }
  else{
    alert('I dont know');
  }
