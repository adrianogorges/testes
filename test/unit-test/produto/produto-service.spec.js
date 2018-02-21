describe('Testes do ProdutoService',()=>{
    let $httpBackend, service, $rootScope;
     // Set up the module
   beforeEach(module('app'));

   beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    service = $injector.get('ProdutoService');
    // backend definition common for all tests
    $httpBackend.when('GET', '/produtos')
                           .respond([{
                               id:1000,
                               nome:'produto 01',
                               descricao:'produto teste 1',
                               preco:2.99
                           }]);
        })
    );

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('quando solicito o carregamento dos produtos então o serviço retorna a lista de produtos',(done)=>{
        let produtos = [];
        service.carregarProdutos()
        .then((response)=>{
            produtos = response.data;
            expect(produtos).to.have.lengthOf(1);
            done();
        });
        $httpBackend.flush();
        //$rootScope.$digest();
        

    })

})