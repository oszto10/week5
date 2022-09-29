const monthComponent = function (nth, name, days) {
    let daysHtml = "";

for (let i = 1; i <= days; i++) {
    daysHtml += dayComponent(i);
}

    return `
        <section id="${nth}" class="${name}">
            <h2>${name}</h2>
            ${daysHtml}
        </section>
        `
}

const dayComponent = function (dayCount) {
    return `
        <div>${dayCount}</div>
    `
}

console.log("hello");
const rootElement = document.querySelector("#root")

//ootElement.insertAdjacentHTML("beforeend", "<button>show calendar</button>")
//const buttonElement = rootElement.querySelector ("button");
//buttonElement.addEventListener("click", function (){
//    })
    
    rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "january", 31)); 
    rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "february", 28));
    rootElement.insertAdjacentHTML("beforeend", monthComponent(20, "pityuhonap", 9));
//rootElement.style.color = "blue"; - Ezt nem szabad csinálni, STYLE csak CSSben!!!!!//

