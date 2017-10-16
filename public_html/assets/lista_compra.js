

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    //declaracao de variaveis
    $scope.titulo = "Lista de Compras";
    $scope.produtos = [];
    $scope.produto = {};
    $scope.formulario = {cadastro: true, alteracao: false};
    $scope.prodTEmp={};
    $scope.produtoCopia ={};

   
    $scope.salvar = function (produto) {

        if (existe(produto.nome) && existe(produto.preco) && existe(produto.qtde))
        {
            var res = confirm("Deseja Salvar produto na lista?");
            if (res)
            {
                $scope.produtos.push(angular.copy(produto));
                $scope.produto = {};
            }
        } else
            alert("Preencha todos os dados");
    };


    var existe = function (produto) {
        if (produto && produto !== "")
            return true;
        else
            return false;
    };

    $scope.alterar = function (p) {
        $scope.formulario = {cadastro: false, alteracao: true};
        $scope.prodTEmp = p;
        $scope.produtoCopia = angular.copy(p);
    };
    
    $scope.update = function(produto){
        
          if (existe(produto.nome) && existe(produto.preco) && existe(produto.qtde))
        {
            var res = confirm("Deseja Alterar produto na lista?");
            if (res)
            {   
                $scope.prodTEmp.nome = produto.nome;
                $scope.prodTEmp.qtde = produto.qtde;
                $scope.prodTEmp.preco = produto.preco;
                $scope.voltarCadastro();
            }
        } else
            alert("Preencha todos os dados");
    };
    
     $scope.voltarCadastro = function () {
        $scope.mudarForm();
    };

    $scope.mudarForm= function () {
        $scope.formulario.cadastro = !$scope.formulario.cadastro;
        $scope.formulario.alteracao = !$scope.formulario.alteracao;
    };

    $scope.getTotal = function () {
        var acumulador = 0;

        for (var i = 0; i < $scope.produtos.length; i++)
        {
            acumulador += $scope.produtos[i].qtde * $scope.produtos[i].preco;
        }


        return acumulador;
    };

    $scope.excluir = function (p) {
        var res = confirm("Deseja excluir produto na lista?");
        if (res)
            $scope.produtos.splice(p, 1);
    };

});
