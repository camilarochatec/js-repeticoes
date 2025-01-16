//exemplo de uso do loop com arrays

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//             // 0  1  2  3  4  5  6  7  8  9  posição do array. (cuidado para não confundir posição do array com o tamanho, quantidade de itens.)
// let alunos = ["marcus", "nagila", "camila", "leonardo"];
// let booleans = [true,true,false,true,false];


// for(let i = 0; i<10; i++){ (i significa iterador)
//     console.log(`Bem vindo(a) ${alunos [i]}`);

// }

let diasMeses =[31,28,31,30,31,30,31,31,30,31,30,31];

function adicionarDias(){
    dia.innerHTML ="";
    if(mes.value ==1){
        if(ano.value %4 == 0){
            diasMeses[1]=29;
        }else{
                diasMeses[1]=28;
            }
        }
    
for(let i= 1; i<=diasMeses[Number(mes.value)]; i++){
    dia.innerHTML += `<option>${i}</option>`;
}
}

adicionarDias();

let nomeDeMeses = ["jan", "fev", "março","abril","maio","jun","jul","ago","set","out","nov","dez"];
for(let i= 0; i<12; i++){
    mes.innerHTML += `<option value="${i}">${nomeDeMeses[i]}</option>`;
}

for(let i= new Date().getFullYear(); i>=new Date().getFullYear() - 50; i--){ //para o intervalo ser de 50 anos.
    ano.innerHTML += `<option>${i}</option>`;



    function verificar(){
        
    if(Number(ano.value)%4==0);{
    alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
   }
   }

}
