//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.querySelector('.close-modal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
