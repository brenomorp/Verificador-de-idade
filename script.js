function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('imagem')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Ocorreu um erro! Verifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var tipo = ''

        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade < 10) {
                img.src = './imagens/crianca-m.png'
                tipo = 'criança'
            } else if (idade < 21) {
                img.src = './imagens/jovem-m.png'
                tipo = 'jovem'
            } else if (idade < 50) {
                img.src = './imagens/adulto-m.png'
                tipo = 'adulto'
            } else {
                img.src = './imagens/idoso-m.png'
                tipo = 'idoso'
            }
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.src = './imagens/crianca-f.png'
                tipo = 'criança'
            } else if (idade < 21) {
                img.src = './imagens/jovem-f.png'
                tipo = 'jovem'
            } else if (idade < 50) {
                img.src = './imagens/adulto-f.png'
                tipo = 'adulta'
            } else {
                img.src = './imagens/idoso-f.png'
                tipo = 'idosa'
            }
        }
        res.innerHTML = `Detectamos ${gen} ${tipo} com ${idade} anos de idade`
    }

}
