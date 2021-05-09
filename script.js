const data = [{
        "id": 1,
        "img": "https://randomuser.me/api/portraits/men/42.jpg",
        "name": "Jesus",
        "loans": [{
                "amount": {
                    "value": 22000,
                    "currency": "AZN"
                },
                "closed": false,
                "loaner": "Bank of Trauny",
                "period": {
                    "type": "month",
                    "value": 36
                },
                "perMonth": {
                    "value": 611.11,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 4200,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "22.01.2022",
                    "start": "22.01.2019"
                },
                "interestRate": 18
            },
            {
                "amount": {
                    "value": 5000,
                    "currency": "AZN"
                },
                "closed": false,
                "loaner": "TBC",
                "period": {
                    "type": "month",
                    "value": 12
                },
                "perMonth": {
                    "value": 416.66,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 2916,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "03.01.2022",
                    "start": "03.01.2021"
                },
                "interestRate": 22
            },
            {
                "amount": {
                    "value": 8500,
                    "currency": "AZN"
                },
                "closed": true,
                "loaner": "Revolut",
                "period": {
                    "type": "month",
                    "value": 24
                },
                "perMonth": {
                    "value": 791,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 0,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "22.01.2018",
                    "start": "22.01.2016"
                },
                "interestRate": 19
            }
        ],
        "salary": {
            "value": 4500,
            "currency": "AZN"
        },
        "surname": "Myers",
        "hasSalaryCard": true,
        "hasLoanHistory": true
    },
    {
        "id": 2,
        "img": "https://randomuser.me/api/portraits/women/88.jpg",
        "name": "Kylie",
        "loans": [{
                "amount": {
                    "value": 12000,
                    "currency": "AZN"
                },
                "closed": true,
                "loaner": "ING Bank",
                "period": {
                    "type": "month",
                    "value": 36
                },
                "perMonth": {
                    "value": 791,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 0,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "25.04.2020",
                    "start": "25.04.2018"
                },
                "interestRate": 18
            },
            {
                "amount": {
                    "value": 9500,
                    "currency": "AZN"
                },
                "closed": false,
                "loaner": "Loaner Individual",
                "period": {
                    "type": "month",
                    "value": 12
                },
                "perMonth": {
                    "value": 791,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 7119,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "02.05.2022",
                    "start": "02.05.2021"
                },
                "interestRate": 25
            },
            {
                "amount": {
                    "value": 8500,
                    "currency": "AZN"
                },
                "closed": true,
                "loaner": "Revolut",
                "period": {
                    "type": "month",
                    "value": 24
                },
                "perMonth": {
                    "value": 354,
                    "currency": "AZN"
                },
                "dueAmount": {
                    "value": 0,
                    "currency": "AZN"
                },
                "loanPeriod": {
                    "end": "22.01.2018",
                    "start": "22.01.2016"
                },
                "interestRate": 19
            }
        ],
        "salary": {
            "value": 2200,
            "currency": "AZN"
        },
        "surname": "Robertson",
        "hasSalaryCard": true,
        "hasLoanHistory": true
    },
    {
        "id": 3,
        "img": "https://randomuser.me/api/portraits/men/22.jpg",
        "name": "Clarence",
        "loans": [{
            "amount": {
                "value": 24000,
                "currency": "AZN"
            },
            "closed": true,
            "loaner": "DreamFin",
            "period": {
                "type": "month",
                "value": 24
            },
            "perMonth": {
                "value": 1000,
                "currency": "AZN"
            },
            "dueAmount": {
                "value": 0,
                "currency": "AZN"
            },
            "loanPeriod": {
                "end": "27.04.2023",
                "start": "27.04.2021"
            },
            "interestRate": 17
        }],
        "salary": {
            "value": 4300,
            "currency": "AZN"
        },
        "surname": "Stanley",
        "hasSalaryCard": true,
        "hasLoanHistory": true
    }
]

let tableData = [];
let modalData = [];
//data part end

//g variables
var modal = document.getElementById('modal-content');
var body = document.getElementsByTagName("body")[0];
var isSorted = false;
var isSortedActive = false;



// preparing table data to show
data.forEach(function(el) {

    let tableObj = {
        'id': el.id,
        'Name': el.name,
        'Surname': el.surname,
        'image': el.img,
        'Salary': el.salary.value + ' ' + el.salary.currency,
        'Hasactiveloan': !el.loans.every((item) => item.closed == true),
        'Total monthly pay': !el.loans.every((item) => item.closed == true) ? el.loans.reduce((accum, el) => accum + el.perMonth.value, 0) + ' AZN' : 0,
        'Can apply for loan': el.loans.reduce((accum, el) => accum + el.perMonth.value, 0) < (el.salary.value / 100) * 45 ? true : false,
        '': 'View Loan History'
    }
    let modalObj = {
        'CustomerId': el.id,
        'Loaner': el.loans[0].loaner,
        'Amount': el.loans[0].amount.value + ' AZN',
        'Has active loan': !el.loans.every((item) => item.closed == true),
        'Monthly pay': el.loans[0].perMonth.value + ' AZN',
        'Due amount': el.loans[0].dueAmount.value + ' AZN',
        'Time interval': el.loans[0].loanPeriod.start + ' - ' + el.loans[0].loanPeriod.end
    }

    tableData.push(tableObj);
    modalData.push(modalObj);





});



// generating showing table
function generate_table() {
    var body_table = document.createElement("table");
    body_table.setAttribute('id', 'bigTable');
    var body_theader = document.createElement('thead');
    var body_tableBody = document.createElement("tbody");
    body_tableBody.setAttribute('id', 'tableBody');

    var body_thead_row = document.createElement("tr");

    for (var b = 0; b < Object.keys(tableData[0]).length; b++) {
        var th = document.createElement('th');
        th.innerHTML = Object.keys(tableData[0])[b];
        body_thead_row.appendChild(th);
        body_theader.appendChild(body_thead_row);
        body_table.appendChild(body_theader);
    }


    for (var i = 0; i < tableData.length; i++) {
        var body_tbody_row = document.createElement("tr");
        body_tbody_row.setAttribute('id', `${tableData[i].id}`)
        body_tbody_row.setAttribute('class', 'tableRow')
        for (var j = 0; j < Object.keys(tableData[0]).length; j++) {
            var cell = document.createElement("td");
            Object.values(tableData[i])[j].toString().includes('https') ? cell.innerHTML = `<img src= '${Object.values(tableData[i])[j]}'>` : cell.innerHTML = Object.values(tableData[i])[j];
            body_tbody_row.appendChild(cell);
        }

        body_tableBody.appendChild(body_tbody_row);

    }

    body_table.appendChild(body_tableBody);
    document.getElementById('container').appendChild(body_table);
}

generate_table();

//filter event
let oldData = tableData.slice();
var nameSort = document.getElementById('nameSort');
var activeSort = document.getElementById('activeSort');
nameSort.addEventListener('click', function() {
    if (!isSorted) {
        tableData.sort(function(a, b) { return (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0); });
        isSorted = true;
        var table = document.getElementById('bigTable');
        table.parentNode.removeChild(table);
        generate_table();
    } else {
        tableData = oldData;
        isSorted = false;
        var table = document.getElementById('bigTable');
        table.parentNode.removeChild(table);
        generate_table();
        oldData = tableData.slice();
    }
});
activeSort.addEventListener('click', function() {
    if (!isSortedActive) {
        tableData.sort(function(a, b) { return (a.Hasactiveloan < b.Hasactiveloan) ? 1 : ((b.Hasactiveloan < a.Hasactiveloan) ? -1 : 0); });
        isSortedActive = true;
        var table = document.getElementById('bigTable');
        table.parentNode.removeChild(table);
        generate_table();
    } else {
        tableData = oldData;
        isSortedActive = false;
        var table = document.getElementById('bigTable');
        table.parentNode.removeChild(table);
        generate_table();
        oldData = tableData.slice();
    }
});
//filter event

//find id of clicked row
document.querySelector('#tableBody').addEventListener('click', function(e) {
    let target = e.target;
    let rowId = target.parentElement.id
    if (target.innerHTML == 'View Loan History') {
        generate_modal_table(rowId);
    }
});

//generate modal table
function generate_modal_table(id) {
    document.getElementById('overlay').classList.remove('d-none')
    document.getElementById('overlay').classList.add('d-block')
    document.getElementById('modal').classList.remove('d-none')
    document.getElementById('modal').classList.add('d-block')
    var modal_table = document.createElement("table");
    modal_table.setAttribute('id', 'modalTable');
    var modal_theader = document.createElement('thead');
    var modal_tableBody = document.createElement("tbody");

    var modal_thead_row = document.createElement("tr");

    for (var b = 0; b < Object.keys(modalData[0]).length; b++) {
        var th = document.createElement('th');
        th.innerHTML = Object.keys(modalData[0])[b];
        modal_thead_row.appendChild(th);
        modal_theader.appendChild(modal_thead_row);
        modal_table.appendChild(modal_theader);
    }
    var modal_tbody_row = document.createElement("tr");

    for (var j = 0; j < Object.keys(modalData[0]).length; j++) {
        var cell = document.createElement("td");
        cell.innerHTML = Object.values(modalData.filter(x => x.CustomerId == id)[0])[j]

        modal_tbody_row.appendChild(cell);
    }

    modal_tableBody.appendChild(modal_tbody_row);

    modal_table.appendChild(modal_tableBody);
    modal.appendChild(modal_table);
}

//modal close functions
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('d-block')
    document.getElementById('overlay').classList.add('d-none')
    document.getElementById('modal').classList.remove('d-block')
    document.getElementById('modal').classList.add('d-none')
    var table = document.getElementById('modalTable');
    table.parentNode.removeChild(table);
});
document.getElementById('times').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('d-block')
    document.getElementById('overlay').classList.add('d-none')
    document.getElementById('modal').classList.remove('d-block')
    document.getElementById('modal').classList.add('d-none')
    var table = document.getElementById('modalTable');
    table.parentNode.removeChild(table);
});