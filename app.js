// console.log("Hii akash here");
showNotes();
//if user adds a note then add it to local storage.
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) { notesObj = []; }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log((notesObj));
    showNotes();
});

//function to show notes from Local Storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) { notesObj = []; }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>
        `;

    });

    let notesELm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesELm.innerHTML = html;
    }
    else {
        notesELm.innerHTML = `Nothng to show! use "Add a note" section above to add notes.`
    }
}

//function to delete note
function deleteNote(index) {
    console.log('i am deleting' + index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1) //takes starting index and how many index to delete from that.
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})


/*further features
1.add title
2.mark a note as important
3.separate notes by user
4.sync and host to web serv
*/