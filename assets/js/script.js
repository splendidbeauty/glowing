'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



// AUTOMATIC SCROLLBAR
const heroCards = document.querySelectorAll('.hero-card');
const scrollbar = document.querySelector('.has-scrollbar');

let currentCardIndex = 0;

function scrollToNextCard() {
  currentCardIndex++;

  if (currentCardIndex >= heroCards.length) {
    currentCardIndex = 0;
  }

  const nextCardOffset = heroCards[currentCardIndex].offsetLeft;
  
  scrollbar.style.transition = 'scroll-left 0.5s ease-in-out'; // Mengatur transisi
  scrollbar.scrollLeft = nextCardOffset;
}

setInterval(scrollToNextCard, 3000); // Scroll every 3 seconds



// FUNGSI UNTUK MENGIRIM PESAN
function handleWhatsAppClick(event, message) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var encodedMessage = encodeURIComponent(message);

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + encodedMessage;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink1 = document.getElementById("whatsappLink1");
whatsappLink1.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 29.000.");
});

var whatsappLink2 = document.getElementById("whatsappLink2");
whatsappLink2.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Serum Peremajaan Bio-shroom - Rp 97.000.");
});

var whatsappLink3 = document.getElementById("whatsappLink3");
whatsappLink3.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Krim Mata Kafein Biji Kopi - Rp 59.000.");
});

var whatsappLink4 = document.getElementById("whatsappLink4");
whatsappLink4.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 23.000.");
});

var whatsappLink5 = document.getElementById("whatsappLink5");
whatsappLink5.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Krim Mata Kafein Biji Kopi - Rp 49.000.");
});

var whatsappLink6 = document.getElementById("whatsappLink6");
whatsappLink6.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 34.000.");
});

var whatsappLink7 = document.getElementById("whatsappLink7");
whatsappLink7.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 49.000.");
});

var whatsappLink8 = document.getElementById("whatsappLink8");
whatsappLink8.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Serum Peremajaan Bio-shroom - Rp 47.000.");
});

var whatsappLink9 = document.getElementById("whatsappLink9");
whatsappLink9.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Krim Mata Kafein Biji Kopi - Rp 40.000.");
});

var whatsappLink10 = document.getElementById("whatsappLink10");
whatsappLink10.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 33.000.");
});

var whatsappLink11 = document.getElementById("whatsappLink11");
whatsappLink11.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Krim Mata Kafein Biji Kopi - Rp 49.000.");
});

var whatsappLink12 = document.getElementById("whatsappLink12");
whatsappLink12.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Pembersih Wajah - Rp 43.000.");
});



// TIMER
// Ambil elemen span dengan kelas "time"
const daysSpan = document.querySelector('.time[aria-label="days"]');
const hoursSpan = document.querySelector('.time[aria-label="hours"]');
const minutesSpan = document.querySelector('.time[aria-label="minutes"]');
const secondsSpan = document.querySelector('.time[aria-label="seconds"]');

// Kode untuk mengatur timer (waktu dalam detik)
let totalSeconds = (365 * 24 * 60 * 60) + (21 * 60 * 60) + (46 * 60) + 8;

// Fungsi untuk mengupdate timer
function updateTimer() {
    // Hitung hari, jam, menit, dan detik dari total detik
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    // Tampilkan nilai dalam elemen span
    daysSpan.textContent = days;
    hoursSpan.textContent = hours.toString().padStart(2, '0');
    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');

    // Kurangi total detik
    totalSeconds--;

    // Hentikan timer ketika mencapai nol
    if (totalSeconds < 0) {
        clearInterval(timerInterval);
        // Di sini Anda dapat menambahkan kode apa pun yang ingin Anda lakukan saat timer selesai
        console.log('Belum Ada Pembaruan!');
    }
}

// Panggil fungsi updateTimer() setiap detik
const timerInterval = setInterval(updateTimer, 1000);



// HTML FORM TO GOOGLE SHEET 
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Berhasil Berlangganan!");
    })
  });
});




