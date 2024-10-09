window.addEventListener('resize', tamaño_imagen);
function tamaño_imagen(){
    const width = window.innerWidth;
    
    const logo = document.getElementById('logo');
    if (width <= 767){
        logo.style.width = '15%';
        logo.style.height = '15%';
    } else if (width > 767 && width <= 1023){
        logo.style.width = '25%';
        logo.style.height = '25%';
    } else {
        logo.style.width = '35%';
        logo.style.height = '35%';
    }
}
function encriptar(){
    var texto_i = document.getElementById('texto_digitado').value;
    texto_i = texto_i.toLowerCase();
    texto_i = texto_i.replace(/[^a-zA-Z0-9\s]/g, '');
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
        'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
        'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
        'ã': 'a', 'õ': 'o', 'ñ': 'n'
    };
    var texto_inicial = texto_i.replace(/[áéíóúàèìòùäëïöüâêîôûãõñ]/g, match => acentos[match]);
    var array = texto_inicial.split("");
    for(let i=0; i<texto_inicial.length; i++){
        switch (array[i]){
            case "a":
                array[i] = "ai";
                break;
            case "e":
                array[i] = "enter";
                break;
            case "i":
                array[i] = "imes";
                break;
            case "o":
                array[i] = "ober";
                break;
            case "u":
                array[i] = "ufat";
                break;
        }
    }
    var texto_final = array.join("");
    localStorage.setItem('texto_final', texto_final);
    localStorage.setItem('texto_inicial', texto_inicial);
    window.location.href = 'text.html';
}
function desencriptar(){
    var texto_i = document.getElementById('texto_digitado').value;
    texto_i = texto_i.toLowerCase();
    texto_i = texto_i.replace(/[^a-zA-Z0-9\s]/g, '');
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
        'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
        'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
        'ã': 'a', 'õ': 'o', 'ñ': 'n'      
    };
    var texto_inicial = texto_i.replace(/[áéíóúàèìòùäëïöüâêîôûãõñ]/g, match => acentos[match]);
    var encrip = texto_inicial.split("");
    for (i=0; i<texto_inicial.length; i++){
        switch (encrip [i]){
            case "a":
                encrip[i+1] = "";
                break;
            case "e":
                encrip[i+1] = "";
                encrip[i+2] = "";
                encrip[i+3] = "";
                encrip[i+4] = "";
                break;
            case "i":
                encrip[i+1] = "";
                encrip[i+2] = "";
                encrip[i+3] = "";
                break;
            case "o":
                encrip[i+1] = "";
                encrip[i+2] = "";
                encrip[i+3] = "";
                break;
            case "u":
                encrip[i+1] = "";
                encrip[i+2] = "";
                encrip[i+3] = "";
                break;
    
        }
    }
    var texto_final = encrip.join("");
    localStorage.setItem('texto_final', texto_final);
    localStorage.setItem('texto_inicial', texto_inicial);
    window.location.href = 'text.html';
}
function copiar(){
    var texto_copiado = document.getElementById('texto_modificado').textContent;
    navigator.clipboard.writeText(texto_copiado).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Hubo un error al copiar el texto: ' + err);
    });
}
function copiar_inicial(){
    var texto_copiado = document.getElementById('texto_sin_modificar').textContent;
    navigator.clipboard.writeText(texto_copiado).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Hubo un error al copiar el texto: ' + err);
    });
}
function borrar(){
    window.location.href = 'index.html';
}