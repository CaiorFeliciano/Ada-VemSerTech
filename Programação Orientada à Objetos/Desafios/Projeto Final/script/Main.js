// Entidade Produto
class Produto {
  constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
  }

  exibirInfo() {
      console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}`);
  }
}

// Subclasse Fruta
class Fruta extends Produto {
  constructor(nome, sabor) {
      super(nome, 'Fruta');
      this.sabor = sabor;
  }
}

// Subclasse Vegetal
class Vegetal extends Produto {
  constructor(nome, cor) {
      super(nome, 'Vegetal');
      this.cor = cor;
  }
}
// Catálogo de produtos
let catalog = [];

// Função para cadastrar produtos
function addProduct() {
  const productName = document.getElementById('productName').value;
  const productType = document.getElementById('productType').value;

  const newProduct = new Produto(productName, productType);
  catalog.push(newProduct);

  // Exibir informações do produto
  newProduct.exibirInfo();

  // Atualizar o catálogo no HTML
  displayCatalog();
}

// Função para exibir o catálogo no HTML
function displayCatalog() {
  const catalogDiv = document.getElementById('catalog');
  catalogDiv.innerHTML = '<h2>Produtos no Catálogo</h2>';

  if (catalog.length === 0) {
      catalogDiv.innerHTML += '<p>Nenhum produto no catálogo.</p>';
  } else {
      catalog.forEach((product, index) => {
          catalogDiv.innerHTML += `
              <p>${product.nome} - ${product.tipo}
                  <button onclick="editProduct(${index})">Editar</button>
                  <button onclick="deleteProduct(${index})">Excluir</button>
              </p>`;
      });
  }
}

// Função para editar um produto no catálogo
function editProduct(index) {
  const newName = prompt('Digite o novo nome do produto:');
  const newType = prompt('Digite o novo tipo do produto:');

  // Validar se o usuário não cancelou a operação
  if (newName !== null && newType !== null) {
      catalog[index].nome = newName;
      catalog[index].tipo = newType;

      // Atualizar o catálogo no HTML
      displayCatalog();
  }
}

// Função para excluir um produto do catálogo
function deleteProduct(index) {
  const confirmDelete = confirm('Tem certeza que deseja excluir este produto?');

  if (confirmDelete) {
      catalog.splice(index, 1);

      // Atualizar o catálogo no HTML
      displayCatalog();
  }
}
