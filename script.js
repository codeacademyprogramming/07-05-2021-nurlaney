const data = [{
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




// preparing tabel data to show
data.forEach(function(el) {

    let tableObj = {
        'Name': el.name,
        'Surname': el.surname,
        'image': el.img,
        'Salary': el.salary.value,
        'Has active loan': !el.loans.every((item) => item.closed == true),
        'Total monthly pay': !el.loans.every((item) => item.closed == true) ? el.loans.reduce((accum, el) => accum + el.perMonth.value, 0) : 0,
        'Can apply for loan': el.loans.reduce((accum, el) => accum + el.perMonth.value, 0) < (el.salary.value / 100) * 45 ? true : false
    }
    let modalObj = {
        'Loaner': el.loans[0].loaner,
        'Amount': el.loans[0].amount.value,
        'Has active loan': !el.loans.every((item) => item.closed == true),
        'Monthly pay': el.loans[0].perMonth.value,
        'Due amount': el.loans[0].dueAmount.value,
        'Time interval': el.loans[0].loanPeriod.start + ' - ' + el.loans[0].loanPeriod.end
    }

    tableData.push(tableObj);
    modalData.push(modalObj);

});




// generating showing table
function generate_table() {
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var theader = document.createElement('thead');
    var tblBody = document.createElement("tbody");


    for (var b = 0; b < Object.keys(tableData[0]).length; b++) {
        var th = document.createElement('th');
        th.innerHTML = Object.keys(tableData[0])[b]
        theader.appendChild(th);
        tbl.appendChild(theader);
    }

    for (var i = 0; i < tableData.length; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < Object.keys(tableData[0]).length; j++) {
            var cell = document.createElement("td");
            Object.values(tableData[i])[j].toString().includes('https') ? cell.innerHTML = `<img src= '${Object.values(tableData[i])[j]}'>` : cell.innerHTML = Object.values(tableData[i])[j];

            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}
generate_table()