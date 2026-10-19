document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Silakan isi Username dan Password terlebih dahulu!");
  } else {
    alert(`Selamat datang, ${username}!`);
    // Redirect ke halaman utama
    window.location.href = "home.html";
  }
});
