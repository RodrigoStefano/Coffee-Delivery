const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus")
const qtnItens = document.getElementById("qtn-itens");

let qtnItensPedido = Number(qtnItens.textContent);

btnPlus.addEventListener('click', function(){
    qtnItensPedido++;
    
    qtnItens.textContent = qtnItensPedido;
    
    if(qtnItensPedido > 0){
        qtnItens.classList.remove('hidden');
    }
});

btnMinus.addEventListener('click', function(){
    qtnItensPedido--;

    qtnItens.textContent = qtnItensPedido;

    if(qtnItensPedido <= 0){
        qtnItens.classList.add('hidden');
        qtnItensPedido = 0;
    }
});