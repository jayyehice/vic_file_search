
const file_data = [
    {
        title: 'book1',
        content: 'bookContent1'
    },
    {
        title: 'book2',
        content: 'bookContent2'
    }
];
const searchButton = document.getElementById('searchButton');
const keywordColumn = document.getElementById('keywordColumn');

function getFileData() {
    let keyword = keywordColumn.value.trim();
    let return_date = [];

    if (keyword != '') {
        return_date = file_data.filter(function(element) {
            return element.title.includes(keyword);
        });
    } else {
        return_date = file_data;
    }

    return return_date;
}

//點擊事件
searchButton.addEventListener('click', function(e){

    let table_content = '';
    let temp_data = [];
    temp_data = getFileData();

    temp_data.forEach(function(element, i) {
        table_content += `
            <tr>
                <td class="border">${i+1}</td>
                <td class="border">${element.title}</td>
                <td class="border">${element.content}</td>
            </tr>
        `;
    });

    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = table_content;
});