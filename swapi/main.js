const maButton = document.getElementById('get-people-button')
const maDiv = document.getElementById('people')

function fetchThosePeople(){
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
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


// let residents = document.querySelector('button')

// function testButton() {
//     console.log("Millions of voices silenced")
// }



// const getResidents = () => {
//     axios.get("https://swapi.dev/api/planets/?search=alderaan")
//     .then((res) => {
//         console.log(res.data.results[0].residents)
//         for (resident in res.data.results[0].residents){
//             axios.get(resident.value)
//             .then(res2 => {
//                 const para = document.createElement('h2')
//                 const node = document.createTextNode(resident.value.name)
//                 body.appendChild(para.appendChild(node))
//             })
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }


// residents.addEventListener('click', getResidents)
