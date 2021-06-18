funtion valEmail(valor){
    re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[.[a-z0-9-]+]*(.[a-z]{2,3})$/
        if(!re.exec(valor)) {
            return false;
        }else{
            return true;
        }
}
function validar(){
nombre=$('#nombre').val();
	
 
if (nombre.length>2){
  return true;
}
else {
  alert('Minimo 2 caracteres');
  return false;
  
}

}
function validar(){
    email=$('#email').val();
        
     
    if (nombre.length<10){
      return true;
    }
    else {
      alert('Mayor 10 caracteres');
      return false;
      
    }
    
    }
