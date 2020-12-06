const apiUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

function loadProducts(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.products.forEach(prd => {
      
      /*estrutura da div do produto*/
      const product = `
        <div class="products-item">
    <div>
          <img class="products-img" src="http:${prd.image}" />
    </div>
    <div class="products-item-justResponsive">      
          <p class="product-name">${prd.name}</p>
          <p class="product-description">${prd.description}</p>
          <p class="product-old-price">De: R$${prd.oldPrice.toFixed(2)}</p> 
          <p class="product-price">Por: R$${prd.price.toFixed(2)}</p>
          <p class="product-installments">ou ${prd.installments.count}x de R$${prd.installments.value.toFixed(2)}</p>
          <button class="send-button">Comprar</button>
    </div>      
        </div>
      `;
    /* toFixe(2) -> Usado para acrescentar a fração ao valor 
     
    /*função carregar produto por ID*/  
      const productsElement = document.getElementById('products');
      productsElement.insertAdjacentHTML( 'beforeend', product );
    });

    /*Função gerar produtos */
    const loadMoreElement = document.getElementById('load-more-products');
    loadMoreElement.setAttribute("onclick", `javascript: loadProducts('https://${data.nextPage}');`);


  });
}

//Validação do email--------------------------------------------------------------
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  }
  }

  function validacaoEmail2(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail2").innerHTML="E-mail válido";
    }
    else{
    document.getElementById("msgemail2").innerHTML="<font color='red'>E-mail: inválido </font>";
    }
    }

  window.onload = loadProducts(apiUrl);