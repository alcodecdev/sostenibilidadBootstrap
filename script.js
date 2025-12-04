document.addEventListener('DOMContentLoaded', function() {
    // Definición de las respuestas correctas por el atributo 'name' del radio button
    const correctAnswers = {
        'q1': 'q1b', // ID de la respuesta correcta para la Pregunta 1
        'q2': 'q2b'  // ID de la respuesta correcta para la Pregunta 2
    };

    // Selecciona todos los botones de verificación
    const verifyButtons = document.querySelectorAll('.verify-btn');

    verifyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el nombre de la pregunta (q1 o q2) del atributo data-question
            const questionName = button.getAttribute('data-question');

            // Encontrar el radio button seleccionado para esta pregunta
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

            // Obtener el ID del área de feedback (ej: #q1-feedback)
            const feedbackId = button.getAttribute('data-bs-target');
            const feedbackContainer = document.querySelector(feedbackId);

            // Seleccionar las alertas de éxito y error dentro de ese feedback
            const feedbackCorrect = feedbackContainer.querySelector('.alert-success');
            const feedbackIncorrect = feedbackContainer.querySelector('.alert-danger');

            // Lógica de validación
            if (selectedOption) {
                if (selectedOption.id === correctAnswers[questionName]) {
                    // Respuesta Correcta
                    feedbackCorrect.classList.remove('d-none');
                    feedbackIncorrect.classList.add('d-none');
                } else {
                    // Respuesta Incorrecta
                    feedbackCorrect.classList.add('d-none');
                    feedbackIncorrect.classList.remove('d-none');
                }
            } else {
                // Si no se selecciona ninguna opción, muestra un mensaje de error genérico
                // o simplemente no hagas nada hasta que se seleccione una.
                // Para este ejemplo, simplemente aseguramos que el feedback incorrecto
                // se muestre si no hay opción marcada (se abrirá el collapse vacío si no hay JS)
                feedbackCorrect.classList.add('d-none');
                feedbackIncorrect.classList.remove('d-none'); // Opción simplificada para indicar que "algo falta"
            }

            // Bootstrap se encarga de abrir/cerrar el colapso,
            // el JS se encarga de mostrar la alerta correcta dentro del colapso.
        });
    });
});