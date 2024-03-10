import { modalForChecking, noteWindow } from "./pseudocomponents.js";

const newNote = document.getElementById("new-note");
const newNoteButton = document.getElementById("new-note-button");
const newNoteName = document.getElementById("new-note-name");
let inputValue;

const user = {
    login: null,
    password: null,
    isLogged: false,
}

const fadeOutAndRemove = (selector) => {
    $(selector).fadeOut(700, () => {
        $(selector).remove();
    });
}

const transfromNewNote = () => {
    newNoteButton.style.opacity = "0";
    newNoteButton.addEventListener("transitionend", () => {
        newNoteName.style.display = "flex";
        newNoteName.style.opacity = "1";
        $("#new-note-button").remove();
    });

    $("#new-note-text").animate({
        opacity: "0"
    }, 400, () => {
        $("#new-note-text").html("Add a title to your note to make it more fancy :)").animate({
            opacity: "1"
        }, 400);
    })
}

const createNewNote = () => {
    inputValue = document.getElementById("new-note-name-input").value;

    if (inputValue != String.length <= 0) {
        $("#new-note").animate({
            height: "93%",
            width: "95%"
        }, 700, () => {
            noteWindow(newNote, inputValue, user);
        });
    
        fadeOutAndRemove("#new-note-name-button");
        fadeOutAndRemove("#new-note-name-input");
        fadeOutAndRemove("#new-note-name");
        fadeOutAndRemove("#new-note-text");
    }
    else {
        modalForChecking("You need to add a label to a note", "OK");
    }
}

$("#new-note-button").click(transfromNewNote);
$("#new-note-name-button").click(createNewNote);
