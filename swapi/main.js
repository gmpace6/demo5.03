let residents = document.querySelector('button')

function testButton() {
    console.log("Millions of voices silenced")
}

residents.addEventListener('click', getResidents)


const getResidents = () => {
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}


