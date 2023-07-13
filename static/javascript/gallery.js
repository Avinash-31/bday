// Open the modal and display the clicked image
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = img.src;
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

