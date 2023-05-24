function exibirNumero() {
    const animal = document.querySelector("#numTxt").value;
    const resultado = document.querySelector("#result");
    const msg = "Seu animal é: ";
  
    if (["leão", "leao", "tigre", "tubarao", "tubarão", "onca", "onça"].includes(animal)) {
      resultado.innerHTML = `${msg}carnívoro`;
        }   else if (["porco", "lobo-guará", "lobo-guara", "lobo guara", "loboguara", "jabuti"].includes(animal)) {
                resultado.innerHTML = `${msg}onívoro`;
                    }   else if (["zebra", "elefante", "boi", "girafa"].includes(animal)) {
                            resultado.innerHTML = `${msg}herbívoro`;
                        }   else {
                                resultado.innerHTML = "error";
                            }   
  }
  

function resetResultado() {
    const resultado = document.querySelector("#result");
    resultado.innerHTML = ''
}