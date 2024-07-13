const button = document.getElementById('btn');
const input = document.getElementById('inputText');
const results = document.getElementById('output');
const word = document.getElementById('word');

input.addEventListener('input', function() {

    word.innerHTML = input.value;

});

button.addEventListener('click', async function() {

    try {

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
        const data = await response.json();

        console.log(data);
        // console.log(data.length);

        let text = '';

        for(let i = 0; i < data.length; i++) {

            let meanings = data[i].meanings;

            for (let j = 0; j < meanings.length; j++) {

                let defs = meanings[j].definitions;

                for(let k = 0; k < defs.length; k++) {

                    let def = defs[k].definition;

                    text += `<li>${def}</li>`;

                }

            }

        }

        results.innerHTML = text;

    }
    catch (error) {

        console.error(error);

    }

});