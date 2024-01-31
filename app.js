function codificar() {

    var inputText = document.getElementById("inputText1").value
    inputText = inputText.toLowerCase(); 
    inputText = inputText.trim();

    var encoded = ""; 

    for(let i =0; i < inputText.length; i++ ){
        var char = inputText[i]; 
        switch(char){
            case "a" : 
            encoded += "98i";
            break;
            
            case "e":
                encoded += "xcu";
                break;
            
            case "i" : 
                encoded += "w5a";
                break;

            case "o" : 
                encoded += "tzm"
                break;
            
            case "u" : 
                encoded += "lyo"
                break;
            
            case "l" : 
                encoded += "t3q"
                break;
            default : 
                encoded += char;
        }
        
    }
    //escreve o resultado da criptografia no outro textarea
    document.getElementById("inputText2").value = encoded;
    toggleImage()
}

function decodificar() {
    var inputText = document.getElementById("inputText1").value;
    inputText = inputText.toLowerCase();
    inputText = inputText.trim();

    var decoded = inputText.replace(/98i/g, "a").replace(/xcu/g, "e").replace(/w5a/g, "i").replace(/tzm/g, "o").replace(/lyo/g,"u").replace(/t3q/g,"l"); 

    document.getElementById("inputText2").value = decoded;
    toggleImage();
}

function toggleImage() {
    var textarea = document.getElementById("inputText2");
    var image = document.querySelector(".gif-animate");
    var button = document.querySelector(".clipboard");
    var h5 = document.querySelector(".h5");
    var h6 = document.querySelector(".h6");

    // Verifica se o textarea está vazio
    if (textarea.value.trim() === "") {
        image.style.display = "block"; // Mostra a imagem
        button.style.display = "none"; // Oculta o botão
        textarea.style.display = "none"; // Oculta o textarea
        h5.style.display = "block";
        h6.style.display = "block";
    
    } else {
        image.style.display = "none"; // Oculta a imagem
        textarea.style.display = "block"; // Mostra o textarea
        button.style.display = "block"; // Mostra o botão
        h5.style.display = "none";
        h6.style.display = "none";
    }
  
}
function clipboard() {
    try {
      const textarea = document.getElementById("inputText2");
      const text = textarea.value;
      navigator.clipboard.writeText(text)
        .then(() => console.log("Text copied to clipboard"))
        .catch(err => console.error("Failed to copy text:", err));
    } catch (err) {
      console.error("Clipboard API not supported");
    }
  }
