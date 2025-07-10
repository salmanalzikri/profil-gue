// Tambahin fitur interaktif nanti bro, ini sementara kosong
console.log("Website Profil Pribadi aktif, bre!");

// Dark mode auto detect
window.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.getElementById('darkToggle').innerHTML = '<i class="fas fa-sun"></i>';
  }
});
toggle.innerHTML = document.body.classList.contains('dark') 
  ? '<i class="fas fa-sun"></i>' 
  : '<i class="fas fa-moon"></i>';
