
//Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};


cat.complain();


//Question 2

const heading = document.querySelector("h3");

function changeInner() {
    heading.innerHTML = "Updated heading";

    //Question 3
    heading.style.fontSize = "2em";

    //Question 4
    heading.classList.add("subheading");
}

changeInner();

//Question 5

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function someThing(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

someThing(cats);

//Question 8

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let catsAge = "Age unknown"

        if (cats[i].age) {
            catsAge = cats[i].age;
        }

        html += `
        <div><h5>${cats[i].name}</h5></div>
        <div><p>${catsAge}</p></div>
        `;
    }
    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;