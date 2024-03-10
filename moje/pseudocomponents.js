export const modalForChecking = (info, buttonContent) => {
    const modal = document.createElement("dialog");
    const okButton = document.createElement("button");
    const infoText = document.createElement("p");

    okButton.innerHTML = buttonContent;
    infoText.innerHTML = info;
    
    modal.setAttribute("id", "label-error-modal");
    okButton.setAttribute("id", "label-error-modal-button");
    infoText.setAttribute("id", "label-error-modal-text");
    
    okButton.addEventListener("click", () => {
        modal.close();
        modal.remove();
    })

    modal.appendChild(infoText);
    modal.appendChild(okButton);

    document.body.appendChild(modal);


    modal.showModal();
}

export const noteWindow = (noteObject, label, user) => {
    const noteWindow = document.createElement("div");
    const panel = document.createElement("div");
    const textEditor = document.createElement("div");
    const noteLabel = document.createElement("div");
    const save = document.createElement("button");
    const close = document.createElement("button");
    const textBox = document.createElement("textarea");

    const panelElements = [];

    noteLabel.innerText = label;
    save.innerText = "Save";
    close.innerHTML = "<i class='fa-solid fa-x'></i>";

    panelElements.push(noteLabel);
    panelElements.push(save);
    panelElements.push(close);
    panel.setAttribute("id", "panel");
    textEditor.setAttribute("id", "text-editor")
    textBox.setAttribute("id", "text-editor-textbox");
    noteWindow.setAttribute("id", "note-window");
    noteLabel.setAttribute("id", "note-label");
    save.setAttribute("id", "save-note-button");
    close.setAttribute("id", "close-note-button");

    $(noteWindow).animate({
        height: "100%",
        width: "100%"
    }, 500);

    noteObject.appendChild(noteWindow);
    noteWindow.appendChild(panel);
    noteWindow.appendChild(textEditor);
    textEditor.appendChild(textBox);

    $(panel).animate({
        opacity: "1"
    }, 400)
    $(textEditor).animate({
        opacity: "1"
    }, 500)

    panelElements.forEach(element => {
        element.style.opacity = "0";
        $(element).animate({
            opacity: 1
        }, 400);
        panel.appendChild(element);
    })

    save.addEventListener("click", () => {
        if (!user.isLogged) {
            modalForChecking("You need to log in to be able to save your notes", "OK");
            return;
        }
    })
}