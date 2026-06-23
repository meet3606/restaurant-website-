function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Table booked successfully!");

    this.reset();
});