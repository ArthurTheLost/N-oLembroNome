document.addEventListener('DOMContentLoaded', function(){
    let TamanhoAtualFonte = 1;

    const AumentaFonteBotao = document.getElementById('aumentar-fonte');

    AumentaFonteBotao.addEventListener('click', function(){
        TamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${TamanhoAtualFonte}rem`
    })
    const DiminuiFonteBotao = document.getElementById('aumentar-fonte');

    DiminuiFonteBotao.addEventListener('click', function(){
        TamanhoAtualFonte -=0.1;
        document.body.style.fontSize = `${TamanhoAtualFonte}rem`
    })
})