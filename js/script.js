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
}

changeInner();

//Question 3


