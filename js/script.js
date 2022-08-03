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