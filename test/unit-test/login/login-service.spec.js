describe('Testes LoginService',()=>{

    let service, $httpBackend, $rootScope;

    beforeEach(module('app'));
    
    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        service = $injector.get('LoginService');
        
            })

);

it('quando eu informo um login válido então o servico deve me retornar os dados do usuario',(done)=>{
    $httpBackend.when('GET','/usuarios?login=usuariocerto@teste.com')
        .respond( {
                id:1000,
                login: 'usuariocerto@teste.com',
                senha: '123'
             });

    service.autenticar('usuariocerto@teste.com',123)
    .then((usuario)=>{
        expect(usuario).not.to.be.null;
        done();
    })
    $httpBackend.flush();
})

});