botao.addEventListener('click', clicar)
function clicar() {
    let botao = document.getElementById('botao')
    let campo = document.getElementById('tab')
    let res = document.getElementById('res')

    if (campo.value.length == 0) {
        confirm('Insira um valor')
    }
    else{
        let num = Number(campo.value)
        res.innerHTML=''
        for (tab = 1; tab <= 1000; tab++) {

            let result = document.createElement('option')
            result.text = `${num} x ${tab} = ${num*tab}`
            res.appendChild(result)
        }
    } 
}



