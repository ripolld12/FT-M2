var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ


  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0]==='#') return 'id'
  if (selector[0]==='.') return 'class'
  if (selector.includes('.')) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction=(element)=>{
      if (`#${element.id}` === selector) return true // El selector puede ser por ejemplo #boton, pero id es boton
      return false;  
    }
  } else if (selectorType === "class") {
    matchFunction=(element)=>{
      if (`.${element.className}` === selector) return true
      return false  // El selector puede ser por ejemplo .boton, pero la clase es boton
    }
  } else if (selectorType === "tag.class") {
    matchFunction=(element)=>{
      for (const className of element.classList){ // Esto es un for of, le da el nombre de una variale a cada iterable
        
      }
      return false  // Un elemento puede tener varias clases, por tanto, uso un for para recorrer todas las clases
    }
  } else if (selectorType === "tag") {
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
