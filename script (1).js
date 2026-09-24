document.getElementById('lightbox').addEventListener('show.bs.modal', function (e) {
    var img = document.getElementById('lightbox-img');
    img.src = e.relatedTarget.dataset.src;
    img.alt = e.relatedTarget.dataset.alt;
});
