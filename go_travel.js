const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const searchInput = document.getElementById('searchInput');

function search(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('go_travel_api.json')
        .then(response => response.json())
        .then(data => {
            })
            .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function reset(){
    searchInput.innerText = '';
}

btnSearch.addEventListener('click', search);
btnReset.addEventListener('click', reset);