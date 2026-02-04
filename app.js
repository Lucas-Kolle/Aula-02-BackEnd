/*****************************************************************************************************************************************************************
 * Objetivo: Calcular médias ecolares
 * Data: 29/01/2026
 * Autor: Lucas Kolle
 * versão: 1.0.1.26
*****************************************************************************************************************************************************************/

/*
    Existem 3 formas de criar variáveis
    
    var  -> Permite a criação de um espaço na memória do tipo variável. Foi utilizado muito em projetos antigos. Recomendação: caso você queira utilizar, recomenda-se
    na criação de variáveis globais (inicio do código)

    let  -> Permite a criação de um espaço na memória do tipo variável. A utilização dete padrão é para a criação dentro de blocos de programação {}. Não é recomendado 
    a sua utilização em escopo global. Essa variável nasce e morre dentro desse bloco de código

    const -> Permite a criação de um espaço na memória onde não sofrerá alteração durante o código. A const pode ser utilizada dentro e fora do bloco {}. 
    Dica: Caso você queira diferenciar uma const, var ou let, a const você pode criar com letras MAIÚSCULAS. 
*/

/*
    Operadores de comparação

    ==  -> Permite comparar a igualdade de duas conteúdos
    <   -> Permite comparar valores menores
    >   -> Permite comparar valores maiores
    <=  -> Permite comparar valores menores ou iguais 
    >=  -> Permite comparar valores maiores ou iguais
    !=  -> Permite comparar a diferença entre conteúdos
    === -> Permite comparar a igualdade do conteúdo e a igualdade da tipagem da dados 
    !== -> Permite comparar a diferença de conteúdos e a igualdade de tipos de dados
    ==! -> Permite comparar a igualdade de conteúdos e a diferença de tipos de dados
    !=! -> Permite comparar a diferença de conteúdos e a diferença de tipos de dados
                    
    Operadores Lógicos
                        
    E   -> AND -> &&
    OU  -> OR  -> ||
    NÃO -> NOT -> !
*/

/*
    ****Conversão de tipos de dados****
    parseInt() -> Permite converter uma String para um número INTEIRO
    parseFloat() -> Permite converter uma String para um número DECIMAL
    Number() -> Permite converter uma String para um número DECIMAL ou INTEIRO
    String() -> Permite converter um conteúdo para STRING
    Boolean() -> Permite converter um conteúdo para BOOLEAND
    typeof() -> Permite verificar o tipo de dados de uma variável
    toFixed() -> Permite fixar a quantidade de casas decimais.
*/     

    console.log("****INICIANDO APLICATIVO****")

    //import da biblioteca
const readline = require("readline")

//criando o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//entrada do nome
entradaDeDados.question("Digite o nome do aluno:", function(nome){
    //recebe o nome do aluno que foi digitado (cópia de segurança)
    let nomeAluno = nome

    //entrada nota 1
    entradaDeDados.question("Digite a nota 1:", function(valor1){
        let nota1 = valor1

        //entrada nota 2
        entradaDeDados.question("Digite a nota 2:", function(valor2){
            let nota2 = valor2

            //entrada nota 3
            entradaDeDados.question("Digite a nota 3:", function(valor3){
                let nota3 = valor3

                //entrada nota 4
                entradaDeDados.question("Digite a nota 4:", function(valor4){
                    let nota4 = valor4

                    //bloquear campos vazios
                    if(nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
                        console.log("ERRO: É obrigatório o preenchimento de todos os dados !!! ")

                    //bloquear números maiores que 100 ou menores que zero
                    }else if(nota1 < 0 || nota1> 100 || nota2 < 0 || nota2 > 100 || nota3 <0 || nota3 > 100 || nota4 <0 || nota4 > 100){
                        console.log("ERRO: Somente é permitido a entrada de valores entre 0 e 100!!! ")
                    
                    //Validação para a entrada de letras nas notas
                    //isNaN() -> permite validar se o conteúdo da variável tem algum caracter ao invés de número
                    }else if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                        console.log("ERRO: Não é possível calcular a média com a entrada de letra nas notas do aluno!!!")
                    
                    //realizar o cálculo da média    
                    }else{

                        //Criando variável para guardar a situação do aluno
                        let situaçãoAluno
                        //criando a variável "media" para guardar o resultado do cálculo
                        let media
                        media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        
                        //criando a condicional que determina a situação do aluno
                        if(media >= 70){
                            situaçãoAluno = "APROVADO!!"
                        }else if(media >= 50 && media < 70){
                            situaçãoAluno = "RECUPERAÇÃO!!"
                        }else{
                            situaçãoAluno = "REPROVADO!!"
                        }

                        //criando saída
                        console.log(`ALUNO:${nomeAluno}\nMÉDIA FINAL:${media.toFixed(2)}\nSITUAÇÃO:${situaçãoAluno}\n****FINALIZANDO APLICATIVO****`)
                    }


                })//fecha nota 4

            })//fecha nota 3

        })//fecha nota 2

    })//fecha nota 1

})//fecha nome