class Personagem {
    constructor(nome_personagem, nacao, casa, habilidade, precisao, velocidade, armadura, recuperacao){
        this.nome_personagem = nome_personagem
        this.nacao = nacao
        this.casa = casa
        this.habilidade = habilidade
        this.precisao = precisao
        this.velocidade = velocidade
        this.armadura = armadura 
        this.recuperacao = recuperacao
    }

}

class Bd { 

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {

            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id') 
        return parseInt(proximoId) + 1
    }

    gravar(p) {
        
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(p))
        localStorage.setItem('id', id)
    }
}

let bd = new Bd()


function cadastrarPersonagem() {

    let Habilidade = document.getElementById('habilidade')
    let Precisao = document.getElementById('precisao')
    let Velocidade = document.getElementById('velocidade')
    let Armadura = document.getElementById('armadura')
    let Recuperacao = document.getElementById('recuperacao')
    let incluir = document.getElementById('incluir')
    let nome_personagem = document.getElementById('nome_personagem')
    let nacao = document.getElementById('nacao')
    let casa = document.getElementById('casa')
 

    

    let personagem = new Personagem(
        nome_personagem.value,
         nacao.value,
         casa.value,
         habilidade.value,
         precisao.value,
         velocidade.value,
         armadura.value,
         recuperacao.value,
         )


        bd.gravar(personagem)

}





