//exemplo de uso do loop com arrays

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//             // 0  1  2  3  4  5  6  7  8  9  posição do array. (cuidado para não confundir posição do array com o tamanho, quantidade de itens.)
// let alunos = ["marcus", "nagila", "camila", "leonardo"];
// let booleans = [true,true,false,true,false];


// for(let i = 0; i<10; i++){ (i significa iterador)
//     console.log(`Bem vindo(a) ${alunos [i]}`);

// }

for(let i= 1; i<=31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}
for(let i= 1; i<=12; i++){
    mes.innerHTML += `<option>${i}</option>`;
}
for(let i= new Date().getFullYear(); i>=new Date().getFullYear() - 50; i--){ //para o intervalo ser de 50 anos.
    ano.innerHTML += `<option>${i}</option>`;

    function verificar(){
        
    if(Number(ano.value)%4==0);{
    alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
   }
   }

}
