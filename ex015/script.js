function verificar() {
    var a = new Date()
    var data = a.getFullYear()
    var ano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (ano.value.length == 0 || Number(ano.value) > data) {
        window.alert('Ocorreu um erro! Verifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radiosex')
        var idade = data - Number(ano.value)
        var gen = ''
        var img = window.document.getElementById('imagem')
        var tipo = ''

        if (fsex[0].checked) {
            gen = 'homem'
            if (ano >= 0 && ano < 10) {
                img.src = './imagens/crianca-m.png'
                tipo = 'criança'
            } else if (ano < 21) {
                img.src = './imagens/jovem-m.png'
                tipo = 'jovem'
            } else if (ano < 50) {
                img.src = './imagens/adulto-m.png'
                tipo = 'adulto'
            } else {
                img.src = './imagens/idoso-m.png'
                tipo = 'idoso'
            }
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (ano >= 0 && ano < 10) {
                img.src = './imagens/crianca-f.png'
            } else if (ano < 21) {
                img.src = './imagens/jovem-f.png'
            } else if (ano < 50) {
                img.src = './imagens/adulto-f.png'
            } else {
                img.src = './imagens/idoso-f.png'
            }
        }
        res.innerHTML = `Detectamos ${gen} ${tipo} com ${idade} anos de idade`
    }





}