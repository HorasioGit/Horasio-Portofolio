emailjs.init("0tcRv6FVLJS5fwybD"); // ganti dengan Public Key Anda

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  emailjs
    .send("service_m779glh", "template_w423z19", { //ganti dengan service_id dan template_id
      from_name: name,
      email_id: email,
      message: message,
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Terkirim!",
        text: "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.",
      });
      e.target.reset(); // reset form setelah pengiriman
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan",
        text: "Silakan coba lagi nanti.",
      });
      console.error("Error:", error);
    });
});
