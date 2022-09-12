const switcher = document.getElementById('switch');
const item_conteiner = document.getElementById('items_container');
const add_bank = document.getElementById('add_bank');
const side_barr = document.querySelector('.side_barr');
const side_barr_edit = document.querySelector('.side_barr_edit');
const name_input = document.getElementById('input_name');
const input_credits = document.getElementById('input_credits');
const input_clients = document.getElementById('input_cliets');
const edit_button = document.getElementById('edit_bank_but');
const amount_cliets = document.getElementById('amount_clients');

const new_name = document.getElementById('add_new_bank_name');
const new_cliets = document.getElementById('add_new_bank_clients');
const new_credits = document.getElementById('add_new_bank_credits');
const add_new_bank = document.getElementById('add_new_bank');

const search_input = document.getElementById('search');
const but_search = document.getElementById('but_search');
const cancel = document.getElementById('cancel');

let isOpen = true;
let isSort = false;

let banks = [];


const itemTemplate = ({ id, name, clients, credits }) => `
<li id="${id}" class="item-card" draggable="true">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">clients: ${clients}</p>
    <p class="card-text">credits: ${credits}</p>
    <div class="inner_butt_edit">
    <button id="button_${id}" type="button" class="btn-info">
      Edit
    </button>
    </div>
  </div>
</li>`;


const getNewInput = () => {
  return {name: new_name.value,
    clients: new_cliets.value,
    credits: new_credits.value};
}

const getSearch = () => {
  return search_input.value;
}


const cleareSearch = () => {
  search_input.value = ''
}

const cleareItemContainer = () => {
  item_conteiner.innerHTML = '';
}


const cleareNewInput = () => {
  new_name.value = '';
  new_cliets.value = '';
  new_credits.value = '';
}

const cleareEditPageInput = () => {
  name_input.value = '';
  input_credits.value = '';
  input_clients.value = '';
}


const getEditInput = () => {
  return {name:name_input.value,
    clients: input_clients.value,
    credits:input_credits.value};
}

const addItemToPage = (item) => {
  item_conteiner.insertAdjacentHTML('afterbegin', itemTemplate(item));
}

const sortItems = () => {
  banks.sort((first, second) => second.name.localeCompare(first.name));
}

const printItems = () => {
  if(isSort) {
    sortItems();
    banks.forEach(elem => addItemToPage(elem));
  } else {
    banks.forEach(elem => addItemToPage(elem));
  }
}

const sumClients = () => {
  let sum = 0;
  banks.forEach(elem => sum += Number(elem.clients));
  return sum;
}

const showAmount = () => {
  amount_cliets.innerText = sumClients();
}

const edit_page = ({ id, name, clients, credits }) => {
  side_barr_edit.classList.toggle('active');
  name_input.value = name;
  input_credits.value = credits;
  input_clients.value = clients;
  edit_bank_but.value = id;
}

const editPageOpen = (event) => {
  const id = event.target.id;
  const elem = document.getElementById(id);
  if(isOpen && String(id).includes('button_')) {
    let serchEl;
    banks.forEach(element => {
      if(String(element.id).includes(String(id).replace('button_', ''))) {
        serchEl = element;
      }
    })
    edit_page(serchEl);
    isOpen = false;
  }
}

const findItem = (item) => {
  return banks.filter(elem => String(elem.name).includes(item));
}

switcher.addEventListener('click', event => {
  isSort = !isSort;
  if(isSort) {
    sortItems();
    cleareItemContainer();
    printItems();
  }
});

add_bank.addEventListener('click', event => {
  side_barr.classList.toggle('active');
});

document.ondrag = (event) => {
  if(event.target.tagName === 'LI') {
    const tar = event.target.id;
    const target_item = document.getElementById(tar);
    target_item.addEventListener('dragend', event1 => {
      if(event1.clientX > 1100 && event1.clientY > 100 && event1.clientX < 1500 && event1.clientY < 400) {
        cleareItemContainer();
        banks = banks.filter(elem => elem.id !== tar);
        banks.forEach(elem => addItemToPage(elem));
        showAmount();
      }
    })
  }
}

const checkRes = ({ name, clients, credits }) => {
  let clients_num = Number(clients);
  let credits_num = Number(credits);
  if(!Number.isInteger(clients_num) && !Number.isInteger(credits_num)) {
    return false;
  }
  if(name === '' || clients_num <= 0 || credits_num <= 0) {
    return false;
  }
  return true;
}

document.onclick = (event) => {
  editPageOpen(event);
}


edit_button.addEventListener('click', event => {
  let id = edit_button.value;
  const elem = getEditInput();
  side_barr_edit.classList.toggle('active');
  for(let i = 0; i < banks.length; ++i) {
    if(banks[i].id === id) {
      banks[i].name = elem.name;
      banks[i].clients = elem.clients; 
      banks[i].credits = elem.credits;
    }
  }
  cleareItemContainer();
  printItems();
  showAmount();
  isOpen = true;
});


add_new_bank.addEventListener('click', event => {
  let res = getNewInput();
  if(checkRes(res)) {
    res.id = uuid.v1();
    console.log(res.id)
    banks.push(res);
    cleareNewInput();
    side_barr.classList.toggle('active');
    if(isSort) {
      cleareItemContainer();
      sortItems();
      printItems();
    } else {
      addItemToPage(res);
    }
    showAmount();
  } else {
    alert('incorect input!');
  }
});

cancel.addEventListener('click', event => {
  cleareItemContainer();
  cleareSearch();
  printItems();
})


search_input.addEventListener('keyup', event => {
  cleareItemContainer();
  findItem(getSearch()).forEach(elem => addItemToPage(elem));
})