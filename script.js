document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("saveContact").addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Facundo Andrioli",
    "N:Andrioli;Facundo;;;",
    "TITLE:Ingeniero Electrónico - Embedded Systems & IoT",
    "NOTE:Embedded Systems, IoT, electrónica y firmware",
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Facundo-Andrioli.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});
