const columns = [
  "codigo",
  "nombre",
  "codigoBarras",
  "embalaje",
  "precioBase",
  "prodUrl",
  "descripcion",
  "tax",
  "stateId",
  "provider",
  "categoryId",
  "category",
  "keto",
  "vegano",
  "vegetariano",
  "diabetico",
  "proteina",
  "gluten",
  "portfolios",
  "ownerId",
];

export const validateCSV = (arrProd) => {
  let resultado = true;
  //----validate column headers---------
  //verifica que las columnas tienen un header valido y retorna cuales no lo tienen.
  const arrValidColumn = Object.keys(arrProd[0]).map((col) =>
    columns.includes(col)
  );
  let vc = [];
  for (let i = 0; i < arrValidColumn.length; i++) {
    if (!arrValidColumn[i]) {
      vc.push(i + 1);
    }
  }
  if (vc.length === 1) {
    alert(`El nombre de la columna ${vc} no es válido, no se importaron datos`);
    resultado = false;
  }
  if (vc.length > 1) {
    alert(
      `El nombre de las columnas ${vc} no son válidos, no se importaron datos`
    );
    resultado = false;
  }

  //---------validate tipos de datos segun el modelo de Product-------------------
  const sino = ["SI", "NO", "si", "no", "Si", "No"];
  arrProd.map((p) => {
    if (p.codigo && isNaN(p.codigo)) {
      console.log("error1");
      resultado = false;
    }
    if (p.embalaje && isNaN(p.embalaje)) {
      console.log("error2");
      resultado = false;
    }
    if (p.precioBase && isNaN(p.precioBase)) {
      console.log("error3");
      resultado = false;
    }
    if (p.tax && isNaN(p.tax)) {
      console.log("error4");
      resultado = false;
    }
    if (p.stateId && isNaN(p.stateId)) {
      console.log("error5");
      resultado = false;
    }
    if (p.categoryId && isNaN(p.categoryId)) {
      console.log("error6");
      resultado = false;
    }

    if (p.portfolios) {
      const prt = p.portfolios.split("|");
      prt.map((q) => (isNaN(q) ? (resultado = false) : null));
    }
    if (p.ownerId && isNaN(p.ownerId)) {
      console.log("error8");
      resultado = false;
    }
    if (p.keto && !sino.includes(p.keto)) {
      console.log("error9");
      resultado = false;
    }
    if (p.vegano && !sino.includes(p.vegano)) {
      console.log("error10");
      resultado = false;
    }
    if (p.vegetariano && !sino.includes(p.vegetariano)) {
      console.log("error11");
      resultado = false;
    }
    if (p.diabetico && !sino.includes(p.diabetico)) {
      console.log("error12");
      resultado = false;
    }
    if (p.proteina && !sino.includes(p.proteina)) {
      console.log("error13");
      resultado = false;
    }
    if (p.gluten && !sino.includes(p.gluten)) {
      console.log("error14");
      resultado = false;
    }
  });
  console.log(resultado);
  return resultado;
};
