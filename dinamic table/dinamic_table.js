
  
const addButton = document.getElementById('add');
let input_row = document.getElementById('input_row');
const users = [];

function User(user) {
  const tr = document.createElement('tr');
  const fName = document.createElement('td');
  const lName = document.createElement('td');
  const age = document.createElement('td');
  const address = document.createElement('td');
  const deleteTd = document.createElement('button');
  
  fName.innerText = user.fname;
  lName.innerText = user.lname;
  age.innerText = user.age,
  address.innerText = user.address,
  deleteTd.innerText = 'delete';

  tr.appendChild(fName);
  tr.appendChild(lName);
  tr.appendChild(age);
  tr.appendChild(address);
  tr.appendChild(deleteTd);

deleteTd.addEventListener('click', () => {
  tr.remove(tr.children);
})
  return tr;
}


function AddUser() {
  const firstName = document.getElementById('f_name');
  const lastName = document.getElementById('l_name');
  const age = document.getElementById('age');
  const address = document.getElementById('address');

  const newUser =  {
    fname:firstName.value, 
    lname:lastName.value, 
    age:age.value, 
    address:address.value,
    };
  //validation 
  if(firstName.value === "" || lastName.value === "" || 
      age.value === "" || address.value === "") {
        alert("invalid");
        return;
    }
  input_row.parentElement.insertBefore(User(newUser), input_row);
  firstName.value = lastName.value = age.value = address.value = '';
}

addButton.addEventListener('click', () => {
  AddUser();
});
 

const deleteAllItems = document.createElement('button');
deleteAllItems.innerText = "delete all";
input_row.appendChild(deleteAllItems);

deleteAllItems.addEventListener('click', () => {
  while(input_row.previousSibling){
    input_row.previousSibling.remove()
  }
});



const sortFirstName = document.getElementById('sortFName');
sortFirstName.addEventListener('click', () => {
  sorting(0);
});

const sortLastName = document.getElementById('sorFLName');
sortLastName.addEventListener('click', () => {
  sorting(1)
})

const sortAge = document.getElementById('sortAge');
sortAge.addEventListener('click', () => {
  sorting(2);
})

const sortAddress = document.getElementById("sortAddress");
sortAddress.addEventListener('click', () => {
  sorting(3);
})


function sorting(n) {
  let table, rows, switching, i, x, y, dir,shouldSwitch, switchCount = 0;
  table = document.getElementById("main_table");
  switching = true;
  dir = 'asc';
   
  while(switching) {
    switching = false;
    rows = table.rows;
     
    for(i = 0; i < rows.length - 3; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      if(dir == 'asc') {
        if(x.innerText > y.innerText) {
          shouldSwitch = true;
          break;
        }
      }
      else if(dir == 'desc') {
        if(x.innerText < y.innerText) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if(shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount++;
      }
      else {
        if(switchCount == 0 && dir == 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
}
 