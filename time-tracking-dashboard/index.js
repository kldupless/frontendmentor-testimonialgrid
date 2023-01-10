const nav = document.getElementById('nav').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
        let elements = document.getElementById('nav').children;
        for (let i = 0; i < elements.length; ++i) {
            elements[i].classList.remove('text-white');
        }
        e.target.classList.add('text-white');
    }
}, true);


fetch('./data.json')
    .then(response => {
        return response.json()
    }).then(json => {
        let entries = json
        entries.forEach(entry => {
            const entryCard = document.createElement('article')
            entryCard.className = 'time-card'
            entryCard.innerHTML = `
            <div>
                <h3 class="text-sm">${entry.title}</h3>
                <img src="images/icon-ellipsis.svg" alt="More"/>
            </div>
            <div id="time-detail">
            <h2 class="font-light text-2xl">${entry.timeframes.weekly.current}hrs</h2>
            <p class="text-lightblue/70 text-xs">Last week - ${entry.timeframes.weekly.previous}hrs</p>
            </div>
            `
            document.getElementById('time-report').appendChild(entryCard)
        })
    }).catch(err => {
        console.log('errors: ' + err.message)
    })

