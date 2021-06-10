 var hostweb="??";


 function ServidorLevantado(){ 
  fetch(hostweb+'/buscarCursos',{
    method:'GET'
  })       
  .then(response=>{
    return response.json();
}).then(json=>{

  fetch(hostweb+'/buscarURLCursos',{
    method:'POST',
    body:JSON.stringify({
      curso:json
    }),
    headers:{
        "Content-Type":"application/json; charset=UTF-8"
    }
})       
.then(response=>{

    return response.json();
}).then(json2=>{
  const elements = document.getElementsByClassName("dropdown-item");
  for (let i = elements.length-1; i >= 0; i--) {
    elements[i].parentNode.removeChild(elements[i]);
  } 

  var URLlength = 0;
  for (let i = 0; i < Object.keys(json).length; i++) {
    //vars
    var MultiplesUrlInner="";
    var CursoDropdownA =document.createElement('a');
    var CursoItem =document.createElement('p');
    //dropdown
    CursoDropdownA.setAttribute('class', 'dropdown-item');    
    CursoDropdownA.setAttribute('onclick', 'showCollapseCurso("'+json[i]+'")');
    CursoItem.setAttribute('class', 'CursoListItem');
    CursoDropdownA.innerHTML = json[i];
    

    //listurl
     
      for (let j = URLlength; j < Object.keys(json2).length; j++) {  
        if(json2[j].curso !=json[i])
          j=json2.length;        
        else{
          MultiplesUrlInner+='<div class="input-group mb-3" style="display: flex;"><span class="input-group-text" id="basic-addon1">URL</span>'+
    '<input type="text" class="form-control" placeholder="url..." aria-label="Username" aria-describedby="basic-addon1" value="'+
    json2[j].linkyt+'"> '+
    '<button onclick="UpdateURL('+"'"+json[i]+"',this"+')" type="button" disabled=true class="btn btn-secondary" style="background-color: green; margin-left: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">'+
    '<path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path></svg></button>'+
    '<button onclick="DefaultURL(this)" type="button" class="btn btn-secondary" disabled=true style="background-color: crimson; margin-left: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">'+
    '<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>'+
    '</svg></button>'+
    '<button onclick="EliminarURL('+"'"+json[i]+"','"+json2[j].linkyt+"',this"+')" type="button" class="btn btn-secondary" style="margin-left: 10pt;margin-right: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
      '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>'+
      '</svg></button></div>'

          URLlength++;
        }
    
     }
     //curso
     CursoItem.innerHTML = '<div style="display: flex;"><a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse'+i+
     '" role="button" aria-expanded="false" aria-controls="multiCollapse'+i+'" style="width: 100%; margin-left: 10pt;">'+json[i]+'</a>'+
     '<button data-toggle="modal" data-target="#exampleModal" onclick="EliminarCurso('+"'"+json[i]+"',true,this"+')" type="button" class="btn btn-secondary" style="margin-left: 10pt;margin-right: 10pt;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
      '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>'+
      '</svg></button></div>'+
     '<div class="collapse multi-collapse" id="multiCollapse'+i+'"><div class="card card-body">'+MultiplesUrlInner+
     //btn plus URL
     '<button onclick="AnadirURLweb(this)" type="button" class="btn btn-secondary" style="width:55pt; align-self: center; margin-right: 30pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
      '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"></path>'+
      '</svg></button></div>'+
     
     '</div></div>';
      document.getElementById("CursosLista").appendChild(CursoItem);
      document.getElementById("dropdownCursos").appendChild(CursoDropdownA);

  }

  //listener url
  var elementsurl = document.getElementsByClassName("form-control");

  var myFunction = function(key) {
    if(key.keyCode == "13" && this.parentNode.children[2].disabled==false){
      UpdateURL(this.parentNode.parentNode.parentNode.parentNode.children[0].textContent,this.parentNode.children[2]);
    }else{
      if(this.parentNode.children[3].disabled==true){
        this.parentNode.children[3].disabled=false;
        this.parentNode.children[2].disabled=false;
      }
      else if(this.value==this.defaultValue){
        this.parentNode.children[3].disabled=true;
        this.parentNode.children[2].disabled=true;
      }
    }
  };

  Array.from(elementsurl).forEach(function(elementurl) {
    if(elementurl.id=="inputCrearCurso")
    CrearCursoaddEventListener();
    else
    elementurl.addEventListener('keyup', myFunction, false);
  });
    
  if(document.getElementById("CursosLista").childElementCount>1)
  document.getElementById("CursosLista").removeChild(document.getElementById("CursosLista").firstElementChild)
  document.getElementById("loader").style.display = "none";
  document.getElementById("CursosLista").style.display = "block";

});
});
}

   function EliminarCurso(cursoRecibido, sino, element){
     if(sino){
      document.getElementById("AdvertenciaTextoElimiarCurso").innerHTML='¿Desea eliminar el curso&nbsp;<p style="color: crimson;">'+cursoRecibido+"</p>&nbsp;y todas sus URL?";
      document.getElementById("btnEliminarCurso").onclick= function() { EliminarCurso(cursoRecibido, false, element)};     
     }else{
      fetch(hostweb+'/eliminarCurso',{
        method:'POST',
        body:JSON.stringify({
            curso:cursoRecibido
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })       
    .then(response=>{
       element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
      eliminarCursoWebDesplegable(cursoRecibido);
        $('#exampleModal').modal('hide');
    })
     }
   }

   function eliminarCursoWebDesplegable(cursoRecibido){  
    const elements = document.getElementsByClassName("dropdown-item");   
        for (let i = elements.length-1; i >= 0; i--) {
          if(cursoRecibido==elements[i].textContent)
          elements[i].parentNode.removeChild(elements[i]); 
          }  
  }

 function EliminarURL(curso2,URL2,elementoURL){
  elementoURL.disabled=true;
  fetch(hostweb+'/eliminarURL',{
    method:'POST',
    body:JSON.stringify({
        curso:curso2,linkyt:URL2
    }),
    headers:{
        "Content-Type":"application/json; charset=UTF-8"
    }
})       
.then(response=>{
  if(elementoURL.parentNode.parentNode.children.length!=2)
  elementoURL.parentNode.parentNode.removeChild(elementoURL.parentNode);
  else{
    elementoURL.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(elementoURL.parentNode.parentNode.parentNode.parentNode)
    eliminarCursoWebDesplegable(curso2);
  }
})

 }

 function UpdateURL(curso2,elementoURL){
  elementoURL.disabled=true;
  elementoURL.parentNode.children[3].disabled=true;
  fetch(hostweb+'/updateURL',{
    method:'POST',
    body:JSON.stringify({
        curso:curso2,linkyt:elementoURL.parentNode.children[1].defaultValue,newlinkyt:elementoURL.parentNode.children[1].value
    }),
    headers:{
        "Content-Type":"application/json; charset=UTF-8"
    }
})       
.then(response=>{
  elementoURL.parentNode.children[1].defaultValue=elementoURL.parentNode.children[1].value;
  })
 }

  function AnadirURLweb(element, NuevoCurso){
    var element2 = element.parentNode.firstElementChild.cloneNode(true);
    if(NuevoCurso)
    element.parentNode.removeChild(element.parentNode.firstChild);
    element2.children[1].defaultValue="";
    element2.children[1].value="";

    var myFunction = function(key) {
      if(key.keyCode == "13" && this.parentNode.children[2].disabled==false){
        UpdateURL(this.parentNode.parentNode.parentNode.parentNode.children[0].textContent,this.parentNode.children[2]);
      }else{
        if(this.parentNode.children[3].disabled==true){
          this.parentNode.children[3].disabled=false;
          this.parentNode.children[2].disabled=false;
        }
        else if(this.value==this.defaultValue){
          this.parentNode.children[3].disabled=true;
          this.parentNode.children[2].disabled=true;
        }
      }
    };
    element2.children[1].addEventListener('keyup', myFunction, false);
    element.parentNode.insertBefore(element2, element.parentNode.childNodes[ element.parentNode.childElementCount-1])
    if(NuevoCurso){
      new bootstrap.Collapse(element2.parentNode.parentNode, {
        show: true
      })
    }
  }

  function DefaultURL(element){ 
    element.parentNode.children[1].value=element.parentNode.children[1].defaultValue;
    element.parentNode.children[3].disabled=true;
    element.parentNode.children[2].disabled=true;
  }

  function Crearcurso(){
    document.getElementById("inputCrearCurso").parentNode.children[2].disabled=true;
    fetch(hostweb+'/CrearCurso',{
      method:'POST',
      body:JSON.stringify({
          curso:document.getElementById("inputCrearCurso").value
      }),
      headers:{
          "Content-Type":"application/json; charset=UTF-8"
      }
  })       
  .then(response=>{
    return response.json();
}).then(json=>{
    if(json.error=="ok"){
      CrearcursoWeb(document.getElementById("inputCrearCurso").value);
      document.getElementById("inputCrearCurso").value="";
    }else
    showCollapseCurso(document.getElementById("inputCrearCurso").value)
    })
  }

  function showCollapseCurso(curso2){
    var elementsurl = document.getElementsByClassName("CursoListItem");

  Array.from(elementsurl).forEach(function(elementsurl) {
      if(elementsurl.firstElementChild.firstElementChild.textContent==curso2 && !elementsurl.lastElementChild.classList.contains("show")){
        new bootstrap.Collapse(elementsurl.lastElementChild, {
          show: true
        })
      }
      
  });
  
  }

  function CrearcursoWeb(curso2){  
    MultiplesUrlInner= '<div class="input-group mb-3" style="display: flex;"><span class="input-group-text" id="basic-addon1">URL</span>'+
    '<input type="text" class="form-control" placeholder="url..." aria-label="Username" aria-describedby="basic-addon1" value=""> '+
    '<button onclick="UpdateURL('+"'"+curso2+"',this"+')" type="button" disabled=true class="btn btn-secondary" style="background-color: green; margin-left: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">'+
    '<path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path></svg></button>'+
    '<button onclick="DefaultURL(this)" type="button" class="btn btn-secondary" disabled=true style="background-color: crimson; margin-left: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">'+
    '<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>'+
    '</svg></button>'+
    '<button onclick="EliminarURL('+"'"+curso2+"',"+"''"+",this"+')" type="button" class="btn btn-secondary" style="margin-left: 10pt;margin-right: 10pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
      '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>'+
      '</svg></button></div>'

    var CursoItem =document.createElement('p');
    var contadorItem = document.getElementsByClassName("CursoListItem").length;
    CursoItem.setAttribute('class', 'CursoListItem');
    CursoItem.classList.add('animate-bottom');

    var CursoDropdownA =document.createElement('a');
    CursoDropdownA.setAttribute('class', 'dropdown-item');    
    CursoDropdownA.setAttribute('onclick', 'showCollapseCurso("'+curso2+'")');
    CursoDropdownA.innerHTML = curso2;

    document.getElementById("dropdownCursos").insertBefore(CursoDropdownA, document.getElementById("dropdownCursos").childNodes[0]);
    
    //curso
    CursoItem.innerHTML = '<div style="display: flex;"><a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse'+contadorItem+
    '" role="button" aria-expanded="false" aria-controls="multiCollapse'+contadorItem+'" style="width: 100%; margin-left: 10pt;">'+curso2+'</a>'+
    '<button data-toggle="modal" data-target="#exampleModal" onclick="EliminarCurso('+"'"+curso2+"',true,this"+')" type="button" class="btn btn-secondary" style="margin-left: 10pt;margin-right: 10pt;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
     '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>'+
     '</svg></button></div>'+
    '<div class="collapse multi-collapse" id="multiCollapse'+contadorItem+'"><div class="card card-body">'+MultiplesUrlInner+
    //btn plus URL
    '<button onclick="AnadirURLweb(this)" type="button" class="btn btn-secondary" style="width:55pt; align-self: center; margin-right: 30pt; padding-top:0;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >'+
      '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"></path>'+
      '</svg></button></div>'+
    
    '</div></div>';
     document.getElementById("CursosLista").insertBefore(CursoItem, document.getElementById("CursosLista").childNodes[0]);
     AnadirURLweb(CursoItem.children[1].firstChild.children[1],true);
  }

  function CrearCursoaddEventListener(){
    var myFunction = function(key) {
      if(key.keyCode == "13" && document.getElementById("inputCrearCurso").value!="" && document.getElementById("inputCrearCurso").parentNode.children[2].disabled==false){
        Crearcurso();
      }else if(key.keyCode != "13"){
        if(document.getElementById("inputCrearCurso").value=="" && document.getElementById("inputCrearCurso").parentNode.children[2].disabled==false)
        document.getElementById("inputCrearCurso").parentNode.children[2].disabled=true;
        else if(document.getElementById("inputCrearCurso").value!="" && document.getElementById("inputCrearCurso").parentNode.children[2].disabled==true)
        document.getElementById("inputCrearCurso").parentNode.children[2].disabled=false;
      }
    };
  
    document.getElementById("inputCrearCurso").addEventListener('keyup', myFunction, false);
  }