(function(){
    const app = angular.module('app');

    const component = {
        controller:'produtoListController',
        templateUrl:'app/js/components/produto/produto-list-template.html'
    }

    

    app.component('produtoList',component);
})();