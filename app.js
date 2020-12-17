5485

let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
);
  
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.btn-close')

function closeModal() {
    modal.classList.remove("show")
    modal.classList.add("hide")
}

window.addEventListener('scroll', function() {
    if ( document.documentElement.getBoundingClientRect().bottom < scrollHeight/2) {
        modal.classList.add ('show')
    }
});


closeBtn.addEventListener("click", closeModal)
