var logins = []

function limpar(){
    var em = document.getElementById("email")
    var se = document.getElementById("senha")
    em.value = ''
    se.value = ''
}

function armazenarDados(){
    sessionStorage.setItem("email",document.formulario.email.value)
    sessionStorage.setItem("senha",document.formulario.senha.value)
    var dados = new Map()
    dados.set("email",sessionStorage.getItem("email"))
    dados.set("senha",sessionStorage.getItem("senha"))
    logins.push(dados)


    console.log(logins)
    limpar()
    
}


