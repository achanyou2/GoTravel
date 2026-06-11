const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const searchInput = document.getElementById('searchInput');

function search(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('go_travel_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const keyword = matchKeyword(searchInput.value.toLowerCase());
            if (keyword.length > 0)
            {
                console.log(typeof(data));
                const destinations = getRecommendations(keyword, data);
                debugger;
                destinations.forEach((dest) => {
                    var content = `<img src="${dest.imageUrl}" alt="${dest.name}">`;
                    content += `<p><strong>${dest.name}</strong></p>`;
                    content += `<p>${dest.description}</p>`;
                    resultDiv.innerHTML += `<div class="card">${content}</div>`;
                });
            } else {
                resultDiv.innerHTML = "Keyword not found.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function getRecommendations(keyword, data)
{
    if (keyword === 'beaches'){
        return data.beaches;
    } else if (keyword === 'countries') {
        var places = data.countries[0].cities.concat(data.countries[1].cities.concat(data.countries[2].cities));
        return places;
    } else if (keyword === 'temples') {
        return data.temples;
    }

}

function reset(){
    searchInput.value = '';
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