const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

const summaryComponentSummaryContent = document.querySelector('.summary-component-summary__content')



function renderData(array) {
    array.forEach(element => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const divDescription = document.createElement("div");
        const img = document.createElement("img");
        img.setAttribute('src', element.icon)
        const spanDescription = document.createElement("span");
        spanDescription.innerText = element.category
        const divScore = document.createElement("div");
        const spanScore = document.createElement("span");
        spanScore.innerText = element.score
        const spanScore2 = document.createElement("span");
        spanScore2.innerText = ' / 100'


        ul.appendChild(li)
        ul.classList.add('summary-component-summary__ul')
        li.appendChild(divDescription)
        li.classList.add('summary-component-summary__item')
        divDescription.appendChild(img)
        divDescription.classList.add('summary-component-summary__description')
        divDescription.appendChild(spanDescription)
        li.appendChild(divScore)
        divScore.appendChild(spanScore)
        divScore.classList.add('summary-component-summary__score')
        divScore.appendChild(spanScore2)
        summaryComponentSummaryContent.appendChild(ul)

        if (element.score === 80) {
            ul.classList.add('summary-component-summary__ul-color-red')
            divDescription.classList.add('summary-component-summary__description-color-red')
        }
        if (element.score === 92) {
            ul.classList.add('summary-component-ul-color-yellow')
            divDescription.classList.add('summary-component-summary__description-color-yellow')
        }
        if (element.score === 61) {
            ul.classList.add('summary-component-summary__ul-color-teal')
            divDescription.classList.add('summary-component-summary__description-color-teal')
        }
        if (element.score === 72) {
            ul.classList.add('summary-component-summary__ul-color-blue')
            divDescription.classList.add('summary-component-summary__description-color-blue')
        }
    });

}

renderData(data)



