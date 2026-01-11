function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "akbar" && password === "0503") {
        alert("Login berhasil!");
        window.location.href = "data_diri.html";
    } else {
        alert("Username atau password salah!");
    }
}
function logout() {
    localStorage.removeItem("login");
    window.location.replace("index.html");
}


/* Highlight menu aktif */
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("aside a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.background = "#444";
        }
    });
});
