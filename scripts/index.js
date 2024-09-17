let currentActiveButton = null;

const loadWeek = (week, button) => {

    if (currentActiveButton && currentActiveButton !== button) {
        currentActiveButton.classList.remove('text-info');
        currentActiveButton.classList.add('text-light');
    }

    // Actualizar el botón clicado
    button.classList.remove('text-light');
    button.classList.add('text-info');

    // Actualizar el botón activo
    currentActiveButton = button;

    fetch(week)
        .then(response => response.text())
        .then(data => {
            document.getElementById('week-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the content:', error));
}