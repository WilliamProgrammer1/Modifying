function changeBackgroundColor() {
    const colorPicker = document.getElementById("colorPicker")
    document.body.style.backgroundColor = colorPicker.value
}

function changeTextColor() {
    const colorPicker = document.getElementById("colorPicker")
    document.body.style.color = colorPicker.value
}

function changeSpecialBackgroundColor() {
    const colorPicker = document.getElementById("colorPicker")
    const specialParagraph = document.getElementById("special")
    specialParagraph.style.backgroundColor = colorPicker.value
}