// 464
// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
//     p.addEventListener('click', function() {
//         p.textContent = parseInt(p.textContent) + 1;
//       });
  
// 	parent.appendChild(p);
// }
// 465
// let ul = document.querySelector("#elem");
// let arr = ["  ее1", "уу 2", "уу 3", "ау 4", "ауау 5"];

// arr.forEach(item => {
//   let li = document.createElement("li");
//   li.textContent = item; 
//   li.addEventListener('click', function() {  
//     if (!li.textContent.endsWith('!')) {
//       li.textContent += '!';
//     }
//   });
//   ul.appendChild(li);
// });
466
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');
//   for (let j = 0; j < 5; j++) {
//     let td = document.createElement('td');
//     td.textContent = 'x';
//     tr.appendChild(td);
//   }
  
//   table.appendChild(tr);
// }

// let btn = document.querySelector('.createTable');
// btn.addEventListener('click', Table)
// function Table() {
//   let rows = document.querySelector('#rows').value;
//   let cols = document.querySelector('#cols').value;
//   let generatedTable = document.querySelector('#generatedTable');
//   for (let i = 0; i < rows; i++) {
//     let tr = document.createElement('tr');
//     tr.textContent = 11;
//     for (let j = 0; j < cols; j++) {
//       let td = document.createElement('td');
//       td.textContent = 55;
//       tr.appendChild(td);
//     } 
//     generatedTable.appendChild(tr);
//   }
// }

// 467
// let table = document.querySelector('#table');
// let k = 2; 
// for (let i = 0; i < 5; i++) {
//   let tr = document.createElement('tr');
//   for (let j = 0; j < 5; j++) {
//     let td = document.createElement('td');
//     td.textContent = k;  
//     k += 2; 
//     tr.appendChild(td);
//   }
  
//   table.appendChild(tr);
// }

// 468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
//   let tr = document.createElement('tr');
//   for (let elem of subArr) {
//     let td = document.createElement('td');
//     td.textContent = elem ** 2;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// 469
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
//   let tr = document.createElement('tr');
//   for (let key in employee) {
//     let td = document.createElement('td');
//     td.textContent = employee[key];
//     if (key === 'salary') {
//       td.addEventListener('click', function () {
//         td.textContent = parseFloat(td.textContent) * 1.1;
//       });
//     }
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// 470

// function Table() {
//   let table = document.querySelector('#table');
//   let trs = document.querySelectorAll('#table tr');
//   let newRow = document.createElement('tr');
//   for (let i = 0; i < trs[0].children.length; i++) {
//     let td = document.createElement('td');
//     newRow.appendChild(td);
//   }
//   table.appendChild(newRow);
//   trs = document.querySelectorAll('#table tr'); 
//   for (let tr of trs) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }
// }

// 471
// function Table() {
//   let tds = document.querySelectorAll('#table td');

//   for (let td of tds) {
//     let Number = parseInt(td.textContent);
//     td.textContent = Number * 2;
//   }
// }

// 472
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     let li = document.createElement('li');
//     li.textContent = parent.children.length + 1; 
//     li.addEventListener('click', function() {
//         this.remove();
//     });
//     parent.appendChild(li);
// });

// 474

// let lis = document.querySelectorAll('ul li');
// for (let li of lis) {
//     let removeLink = document.createElement('a');
//     removeLink.href = '#';
//     removeLink.textContent = 'Удалить';
//     li.appendChild(removeLink);
//     removeLink.addEventListener('click', function (event) {
//         li.remove();
//         event.preventDefault();
//     });
// }

// let tableRows = document.querySelectorAll('table tr');

// for (let row of tableRows) {
//     let removeLink = document.createElement('a');
//     removeLink.href = '#';
//     removeLink.textContent = 'remove';

//     let lastCell = row.lastElementChild;
//     lastCell.appendChild(removeLink);

//     removeLink.addEventListener('click', function (event) {
//         row.remove();
//         event.preventDefault();
//     });
// }

// 475
// let elem = document.querySelector('#elem');
//     let input = document.querySelector('#input');
//     input.value = elem.textContent;
//     input.addEventListener('input', function() {
//       elem.textContent = this.value;
//     });

// 477
// let lis = document.querySelectorAll('ul li');
//     for (let li of lis) {
//       li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function() {
//           li.textContent = this.value;
//           li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);
//       });
//     }

    // let cells = document.querySelectorAll('table td');

    // for (let cell of cells) {
    //   cell.addEventListener('click', function func() {
    //     let input = document.createElement('input');
    //     input.value = cell.textContent;

    //     cell.textContent = '';
    //     cell.appendChild(input);

    //     input.addEventListener('blur', function() {
    //       cell.textContent = this.value;
    //       cell.addEventListener('click', func);
    //     });

    //     cell.removeEventListener('click', func);
    //   });
    // }

    478
    // let spans1 = document.querySelectorAll('#parent1 span');
    // for (let span of spans1) {
    //   span.addEventListener('click', function() {
    //     let input = document.createElement('input');
    //     input.value = span.textContent;
    //     span.textContent = '';
    //     span.appendChild(input);
    //     input.addEventListener('blur', function() {
    //       span.textContent = this.value;
    //     });
    //   });
    // }

    // let paragraphs = document.querySelectorAll('#parent2 p');
    // for (let paragraph of paragraphs) {
    //   let span = document.createElement('span');
    //   span.textContent = paragraph.textContent;
    //   paragraph.textContent = '';
    //   let removeLink = document.createElement('a');
    //   removeLink.href = '#';
    //   removeLink.textContent = 'remove';
    //   paragraph.appendChild(span);
    //   paragraph.appendChild(removeLink);
    // }

// 479
// function toggleDecorationAndRemoveLink(event) {
//   event.preventDefault();
//   let span = event.target.previousElementSibling;
//   span.classList.toggle('underline');
//   event.target.remove();
// }

// function toggleBackgroundColor(event) {
//   event.preventDefault();
//   let row = event.target.closest('tr');
//   row.classList.toggle('green-background');
// }

// 480
// let elem = document.querySelector('#elem');
// let toggle = document.querySelector('#toggle');

// toggle.addEventListener('click', function () {
//   elem.classList.toggle('hidden');
// });

// 482
// let lis = document.querySelectorAll('#list li');
//     for (let li of lis) {
//       li.addEventListener('click', function () {
//         this.classList.toggle('active');
//       });
//     }

484

// let list = document.getElementById('list');
//     let newItemInput = document.getElementById('newItemInput');
//     let array = ['Item 1', 'Item 2', 'Item 3'];
//     for (let item of array) {
//       createListItem(item);
//     }

   
//     function createListItem(text) {
//       let li = document.createElement('li');
//       li.textContent = text;

 
//       let editInput = document.createElement('input');
//       li.appendChild(editInput);

   
//       let editButton = document.createElement('button');
//       editButton.textContent = 'Edit';
//       editButton.onclick = function() {
//         editInput.style.display = 'block';
//         editInput.value = li.textContent;
//         li.style.display = 'none';
//       };
//       li.appendChild(editButton);


//       let deleteLink = document.createElement('a');
//       deleteLink.href = '#';
//       deleteLink.textContent = 'Delete';
//       deleteLink.onclick = function() {
//         li.remove();
//       };
//       li.appendChild(deleteLink);

   
//       let strikeLink = document.createElement('a');
//       strikeLink.href = '#';
//       strikeLink.textContent = 'Strike';
//       strikeLink.onclick = function() {
//         li.style.textDecoration = 'line-through';
//       };
//       li.appendChild(strikeLink);

//       list.appendChild(li);
//     }


//     function addItem() {
//       let newItemText = newItemInput.value.trim();
//       if (newItemText !== '') {
//         createListItem(newItemText);
//         newItemInput.value = '';
//       }
//     }


// let employeeTable = document.getElementById('employeeTable');
// let nameInput = document.getElementById('nameInput');
// let ageInput = document.getElementById('ageInput');
// let salaryInput = document.getElementById('salaryInput');

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// displayEmployees();

// function displayEmployees() {
//   let tbody = employeeTable.querySelector('tbody');
//   tbody.innerHTML = '';

//   employees.forEach((employee, index) => {
//     let row = tbody.insertRow();
//     row.insertCell().textContent = employee.name;
//     row.insertCell().textContent = employee.age;
//     row.insertCell().textContent = employee.salary;

//     let editCell = row.insertCell();
//     let editLink = document.createElement('a');
//     editLink.href = '#';
//     editLink.textContent = 'Edit';
//     editLink.onclick = function() {
//       editEmployee(index);
//     };
//     editCell.appendChild(editLink);

//     let deleteCell = row.insertCell();
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
//     deleteLink.onclick = function() {
//       deleteEmployee(index);
//     };
//     deleteCell.appendChild(deleteLink);
//   });
// }

// function editEmployee(index) {
//   let employee = employees[index];
//   nameInput.value = employee.name;
//   ageInput.value = employee.age;
//   salaryInput.value = employee.salary;

//   let editButton = document.createElement('button');
//   editButton.textContent = 'Save';
//   editButton.onclick = function() {
//     saveEmployee(index);
//   };

//   employeeTable.parentNode.appendChild(editButton);
// }

// function saveEmployee(index) {
//   let updatedEmployee = {
//     name: nameInput.value,
//     age: ageInput.value,
//     salary: salaryInput.value,
//   };

//   employees[index] = updatedEmployee;
//   displayEmployees();

//   clearInputs();
//   removeEditButton();
// }

// function deleteEmployee(index) {
//   employees.splice(index, 1);
//   displayEmployees();
// }

// function addEmployee() {
//   let newEmployee = {
//     name: nameInput.value,
//     age: ageInput.value,
//     salary: salaryInput.value,
//   };

//   employees.push(newEmployee);
//   displayEmployees();

//   clearInputs();
// }

// function clearInputs() {
//   nameInput.value = '';
//   ageInput.value = '';
//   salaryInput.value = '';
// }

// function removeEditButton() {
//   let editButton = document.querySelector('button');
//   if (editButton) {
//     editButton.remove();
//   }
// }

let employeeList = document.getElementById('employeeList');
let addEmployeeForm = document.getElementById('addEmployeeForm');

let employees = [
  { name: 'employee1', возраст: 30, зарплата: 4030 },
  { name: 'employee2', возраст: 31, зарплата: 5500 },
  { name: 'employee3', возраст: 32, зарплата: 6300 },
];

displayEmployees();

addEmployeeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addEmployee();
});

function displayEmployees() {
  employeeList.innerHTML = '';

  employees.forEach((employee, index) => {
    let li = document.createElement('li');

    li.innerHTML = `
      <span>${employee.name}, ${employee.age} years old, Salary: $${employee.salary}</span>
      <button onclick="editField(${index}, 'name')">Имя</button>
      <button onclick="editField(${index}, 'age')">Возраст</button>
      <button onclick="editField(${index}, 'salary')">Зарплата</button>
      <a href="#" onclick="deleteEmployee(${index})">Удалить</a>
    `;

    employeeList.appendChild(li);
  });
}

function editField(index, field) {
  let employee = employees[index];

  let newValue = prompt(`Enter new ${field}:`, employee[field]);

  if (newValue !== null) {
    employee[field] = field === 'Возраст' || field === 'зарплата' ? parseInt(newValue) : newValue;
    displayEmployees();
  }
}

function deleteEmployee(index) {
  if (confirm('Are you sure you want to delete this employee?')) {
    employees.splice(index, 1);
    displayEmployees();
  }
}

function addEmployee() {
  let nameInput = document.getElementById('nameInput');
  let ageInput = document.getElementById('ageInput');
  let salaryInput = document.getElementById('salaryInput');

  let newEmployee = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    salary: parseInt(salaryInput.value),
  };

  employees.push(newEmployee);
  displayEmployees();


  nameInput.value = '';
  ageInput.value = '';
  salaryInput.value = '';
}