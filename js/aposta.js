function sorteio(){
    const min = 0;
    const max = 100;
    const rescert = (" ❤😍👌 Parabéns você acertou! ❤😍👌 ");
    const reserro = (" 😢 Não foi desta vez, tente novamente 😢 ");
    const sorte = document.getElementById('sorte').value; 

    if (sorte){

    let sort = Math.floor(Math.random()*Math.floor(max))
  
    while(sort<min){
  
      sort = Math.floor(Math.random()*Math.floor(max));
    }
  
    document.getElementById("resultado").innerHTML=sort;

    if(sorte==sort){
        document.getElementById("info").innerHTML=rescert;
    }
    else{
        document.getElementById("info").innerHTML=reserro;
    }

    }
    else {
        alert('Campo com numero da sorte está Vazio, Por Favor Digite Algo!');
    }

}

function reload(){
    location.reload();
}