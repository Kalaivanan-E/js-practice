function convertImage(event) {
    event.preventDefault(); // prevent page reload

    const fileInput = document.getElementById("imgfile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select an image!");
        return false;
    }

    const reader = new FileReader();

    reader.onload = function() {
        const base64String = reader.result;

        // Display base64 string
        const output = document.getElementById("img");
        output.innerText = base64String;

        // Optional: show image preview
        const imgPreview = document.createElement("img");
        imgPreview.src = base64String;
        imgPreview.classList.add("img-thumbnail", "mt-3");
        imgPreview.width = 200;

        // Remove old preview (if any)
        const oldImg = output.querySelector("img");
        if (oldImg) oldImg.remove();

        output.appendChild(imgPreview);
    };

    reader.readAsDataURL(file);
    return false; // prevent form submit
}
