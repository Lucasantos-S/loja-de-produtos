class Produto {
    constructor() {

        this.id = 1;
        this.arrayProdutos = [];
    }
    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)){
            this.adicionar(produto);
        }

         console.log(this.arrayProdutos);
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }


    lerDados(){
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }
    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == '') {
        msg += '-Informe o nome do produto \n'
    }
        if(produto.valor == '') {
        msg += '-Informe o valor do produto \n'
    }

    if(msg != '') {
        alert(msg);
        return false
    }
    return true;
    }

    limpar(){
       
    }


}

let produto = new Produto()