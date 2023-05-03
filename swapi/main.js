const maButton = document.getElementById('get-people-button')
const maDiv = document.getElementById('people')

function fetchThosePeople() {
    axios.get('http://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        let residentsUrlArray = res.data.results[0].residents

        for (let i = 0; i < residentsUrlArray.length; i++) {
            let residentUrl = residentsUrlArray[i]
            axios.get(residentUrl)
            .then((res2) => {
                let newPersonPara = document.createElement('p')
                newPersonPara.innerHTML = res2.data.name
                maDiv.appendChild(newPersonPara)
            })
            .catch(() => {

            })
        }
    })
    .catch(() => {

    })
}

maButton.addEventListener('click', fetchThosePeople)