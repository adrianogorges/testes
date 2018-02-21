(function(){
    const app = angular.module('app');
    
    const controller = function(ProdutoService){
        this.produtos = [];

        ProdutoService.carregarProdutos()
        .then((response)=>{
            this.produtos = response.data;
            console.log(this.produtos);
            alert('produtos carregados');
        })
        .catch((error)=>{
            console.log(error);
            alert('Falha ao carregar os produtos');
        })
    }
    controller.$inject = ['ProdutoService'];

    app.controller('produtoListController',controller);
})();