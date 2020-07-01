var templateUser = `<div class="row">
                        <div class="col-md-12">
                           <h3>**NOME** / **VOLUME**</h3>
                           <hr>
                        </div>
                    </div>`;
function carregaVolume(){
    var parametro = window.location.search;
    console.log("URL = "+parametro);
                    
    var numParceiro = parametro.substr(4);
                    
    //alert("Numero do Parceiro = "+numParceiro);
    console.log("Numero do Parceiro = "+numParceiro);
                    
    // a partir daqui posso fazer um fetch no endpoint de departamento e
    // preencher um conjunto de linhas com todos os usuários daquele depto
    fetch("http://localhost:8080/agentesfinanceiros/"+numParceiro+"/dashboard")
        .then(res => res.json())
        .then(res => preenche(res))
}
function preenche(res){
    console.log(res);    

    document.getElementById("conteudo").innerHTML = res.nome;
    document.getElementById("sucesso").innerHTML = res.statusOk;
    document.getElementById("falha").innerHTML = res.statusFalha;
    document.getElementById("fraude").innerHTML = res.statusFraude;


}