function unlock() {
    let pass = document.getElementById("password").value;

    if (pass === "1234") {
        document.getElementById("lock").style.display = "none";
        document.getElementById("content").style.display = "flex";
    } else {
        alert("Wrong Password!");
    }
}