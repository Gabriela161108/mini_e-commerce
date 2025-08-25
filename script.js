fetch('produtos.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('ferreroImage').innerHTML = corpo.imageF
    document.getElementById('ferreroName').innerHTML = corpo.nameF
    document.getElementById('ferreroPrice').innerHTML = corpo.priceF
    document.getElementById('ferreroDescri').innerHTML = corpo.descriptionF
    
    document.getElementById('7beloImage').innerHTML = corpo.imageB
    document.getElementById('7beloName').innerHTML = corpo.nameB
    document.getElementById('7beloPrice').innerHTML = corpo.priceB
    document.getElementById('7beloDescri').innerHTML = corpo.descriptionB

    document.getElementById('kitkatImage').innerHTML = corpo.imageK
    document.getElementById('kitkatName').innerHTML = corpo.nameK
    document.getElementById('kitkatPrice').innerHTML = corpo.priceK
    document.getElementById('kitkatDescri').innerHTML = corpo.descriptionK

    document.getElementById('bisImage').innerHTML = corpo.imageBi
    document.getElementById('bisName').innerHTML = corpo.nameBi
    document.getElementById('bisPrice').innerHTML = corpo.priceBi
    document.getElementById('bisDescri').innerHTML = corpo.descriptionBi

})

function comprarFerrero() {
    alert("Produto Caixa Ferrero Rocher - 24 unidades comprado com sucesso!")
}

function comprarBala() {
    alert("Produto Pacote Bala 7Belo - 500g comprado com sucesso!")
}

function comprarKitkat() {
    alert("Produto Chocolate Kit Kat - 41,5g comprado com sucesso!")
}

function comprarBis() {
    alert("Produto Chocolate Wafer Bis - 32 unidades comprado com sucesso!")
}