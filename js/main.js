document.querySelector('.selectCharacter').addEventListener('change',     generateCharacterInfo)


function generateCharacterInfo() {
    fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then(data => {
            let characterInfo = data.results 
            
            let characterIndex = document.querySelector('.selectCharacter').value // storing the value of the select dropdown in a variable called characterChoice
            document.querySelector('h2').innerText = characterInfo[characterIndex].name// changing the h2 to represent the chosen character name

            document.querySelector('#characterSpecies').innerText = `Species: ${characterInfo[characterIndex].species}`

            document.querySelector('#characterStatus').innerText = `Status: ${characterInfo[characterIndex].status}`

            document.querySelector('img').src = characterInfo[characterIndex].image
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
