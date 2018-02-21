(function(){

    const app = angular.module('app');

    const service = ($http,$q)=>{

        return {
            autenticar: function(login,senha){
                return $http.get('/usuarios?login='+login)
                    .then((response)=>{
                        let usuario = response.data;
                        if(usuario && usuario.senha == senha){
                            return "sucesso";
                        }else{
                            throw new Error('Login Inválido');
                        }
                    })
            }
        }
    }

    service.$inject = ['$http'];

    app.factory('LoginService',service);

})()