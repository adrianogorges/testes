(function(){
    const app = angular.module('app');
    const config = ($stateProvider, $urlRouterProvider)=>{

        $stateProvider
        .state('home', {
            url: '/home',
            component: 'produtoList'
        })

        $urlRouterProvider.otherwise('/home');
    }

    app.config(config);
})();