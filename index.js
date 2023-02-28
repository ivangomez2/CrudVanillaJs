const addButton = document.getElementById("addButton");
const pharmacyLog = document.getElementById("pharmacyExpenses");
const inputValueName = document.getElementById("pharmacyInputName");
const inputValueCost = document.getElementById("pharmacyInputCost");
const form = document.querySelector("#form");
let logList = [];

const gastos = { id: "", nombre: "", costo: "" };
// mostrar esos valores

const submitForm = (e) => {
  e.preventDefault();

  //reemplazamos la información a agregar en ntro form
  gastos.id = Math.random();
  gastos.nombre = inputValueName.value;
  gastos.costo = inputValueCost.value;

  //llenamos el objeto listaGastos con la info de gastos
  logList.push({...gastos});

  dataLog();
};

const dataLog = () => {
  const createLog = document.createElement("p");
  logList.forEach((i) => {
    const { id, nombre, costo } = i;
    createLog.innerText = `${id} + ${nombre} + ${costo}`;
    const deleteButton = document.createElement("button");
    
    deleteButton.onclick = () => {
      deleted(id);
      
    };

    createLog.append(deleteButton);
  });
  pharmacyLog.appendChild(createLog);
  
  
};
 
const deleted = (id) => {
  
  const va = logList.filter((el) =>{
  console.log(el.id === id)
  })
  
  console.log(logList)
  
};

form.addEventListener("submit", submitForm);
