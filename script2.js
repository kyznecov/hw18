

const tableBody = document.querySelector('.table-body');
const tableHeader = document.querySelector('.table-header tr');

const tableHeadings = [...tableHeader.children].map((th) => th.textContent);
const initialData = parseData(tableBody);

//let data = initialData;

function sortData(index) {
    const data = [...initialData].sort((rowA, rowB) => {
        const valueA = rowA[index];
        const valueB = rowB[index];

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB);
        } else {
            return valueA - valueB;
        }
    });

    renderTable(data);
}

renderTable(initialData);

function parseData(tableBody) {
    const data = [...tableBody.children].map(
        (tr) => [...tr.children].map(
            (td) => isNaN(+td.textContent) ? td.textContent : +td.textContent
        ) 
    );
    return data;
}

function renderTable(data) {
    const htmlString = data.map((row) => {
        const rowString = row.map((item) => `<td>${item}</td>`).join('');

        return `<tr>${rowString}</tr>`;
    }).join('');

    tableBody.innerHTML = htmlString;
}

