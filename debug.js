function getMyMonetate(){
  console.log('debug mode active');
  if(window.mnt_debug){
    postMessage(window.mnt_debug);
  } else {
    postMessage('<h3>Oops!</h3><strong>Nessuna experience visualizzabile.</strong><br/>Prova a ricaricare la pagina o in una sessione in incognito.');
  }
}
getMyMonetate();