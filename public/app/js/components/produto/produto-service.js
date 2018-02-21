(function(){
    const app = angular.module('app');

    const service = function($q,$http){
        return {
            carregarProdutos:function(){
                return $http.get('/produtos');
            }
        }
    }

    service.$inject=['$q','$http']

    app.factory('ProdutoService',service);
})();