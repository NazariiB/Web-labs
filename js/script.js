const submit_button = document.getElementById('sbmit_but');
const input_name = document.getElementById('name');
const amount_clients = document.getElementById('amount_clients');
const amount_credits = document.getElementById('amount_credits');
const items_container = document.getElementById('items_container');
const sort_by_name = document.getElementById('sort_by_name');
const search = document.getElementById('search');
const search_input = document.getElementById('search_input');
const total_amount = document.getElementById('total_amount');
const total = document.getElementById('total');

let banks = [];

const itemHTML = ({id, name, clients, credits}) => `<li id='${id}'>Bank name: ${name} </br>
Bank amount of clients: ${clients}</br>
Bank amount of credits: ${credits}</li>`

const getInput = () => {
    return {name: input_name.value,
            clients: amount_clients.value,
            credits: amount_credits.value };
}

const addItemToPage = ({id, name, clients, credits}) => {
    items_container.insertAdjacentHTML(
        "afterbegin", 
        itemHTML({id, name, clients, credits}));
}

const addItem = ({name, clients, credits}) => {
    const id = uuid.v1();
    const newItem = {
        id, name, clients, credits
    }
    banks.push(newItem);
    addItemToPage(newItem)
}


const cleareInput = () => {
    input_name.value = '';
    amount_clients.value = '';
    amount_credits.value = '';
    search_input.value = '';
    total.innerHTML = '';
}

const sortBanks = () => {
    banks.sort((first, second) => second.name.localeCompare(first.name))
}

const findBank = (input) => {
    let el = [];
    banks.forEach( element => {
        if(element.name === input){
            el.push(element);
        }
    });
    return el;
}

const findTotalClients = () => {
    let sum = 0;
    banks.forEach( elem => {
        const num =Number(elem.clients)
        if(Number.isInteger(num)) {
            sum += num 
        }
    });
    return sum;
}

submit_button.addEventListener('click', (event) => {
    // не перезавантажує сторінку!
    event.preventDefault();
    console.log(getInput());
    addItem(getInput());
    cleareInput();
});

search.addEventListener('click', (event) => {
    const input = search_input.value;
    const bank = findBank(input);
    items_container.innerHTML = '';
    for(const item of bank) {
        addItemToPage(item);
    }
    cleareInput();
});

total_amount.addEventListener('click', (event) => {
    cleareInput();
    total.textContent += findTotalClients()
})

sort_by_name.addEventListener('click', (event) => {
    items_container.innerHTML = '';
    sortBanks();
    for(const item of banks) {
        addItemToPage(item);
    }
})