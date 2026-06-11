const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const searchInput = document.getElementById('searchInput');

function search(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const searchText = searchInput.value.toLowerCase();
    console.log(searchText);

    fetch('go_travel_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function reset(){
    searchInput.innerText = '';
}

function matchKeyword(word){
    if (word.match('beach')) {
        return 'beaches';
    } else if (word.match('countr')) {
        return 'countries';
    } else if (word.match('cit')) {
        return 'cities';
    } else if (word.match('temple')) {
        return 'temples';
    }
    return '';
}


btnSearch.addEventListener('click', search);
btnReset.addEventListener('click', reset);