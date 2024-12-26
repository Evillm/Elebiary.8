document.getElementById('submit-button').addEventListener('click', function () {
    // Сбрасываем ошибки
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Получаем значения из полей
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const quantity = document.getElementById('quantity').value.trim();
    const payment = document.getElementById('payment').value;

    let isValid = true;

    // Проверяем поля
    if (!firstName) {
        document.getElementById('first-name-error').textContent = 'Имя обязательно для заполнения.';
        isValid = false;
    }
    if (!lastName) {
        document.getElementById('last-name-error').textContent = 'Фамилия обязательна для заполнения.';
        isValid = false;
    }
    if (!phoneNumber || !/^\d{3}-\d{3}-\d{3}$/.test(phoneNumber)) {
        document.getElementById('phone-number-error').textContent = 'Введите корректный номер телефона (XXX-XXX-XXX).';
        isValid = false;
    }
    if (!destination) {
        document.getElementById('destination-error').textContent = 'Адрес обязателен для заполнения.';
        isValid = false;
    }
    if (!date) {
        document.getElementById('date-error').textContent = 'Дата обязательна для заполнения.';
        isValid = false;
    }
    if (!time) {
        document.getElementById('time-error').textContent = 'Время обязательно для заполнения.';
        isValid = false;
    }
    if (!quantity || quantity <= 0) {
        document.getElementById('quantity-error').textContent = 'Введите корректное количество.';
        isValid = false;
    }
    if (!payment) {
        document.getElementById('payment-error').textContent = 'Выберите метод оплаты.';
        isValid = false;
    }

    // Если валидация пройдена, показываем данные
    if (isValid) {
        const summaryContent = `
            <p><strong>Имя:</strong> ${firstName}</p>
            <p><strong>Фамилия:</strong> ${lastName}</p>
            <p><strong>Номер телефона:</strong> ${phoneNumber}</p>
            <p><strong>Адрес:</strong> ${destination}</p>
            <p><strong>Дата:</strong> ${date}</p>
            <p><strong>Время:</strong> ${time}</p>
            <p><strong>Количество:</strong> ${quantity}</p>
            <p><strong>Метод оплаты:</strong> ${payment}</p>
        `;
        document.getElementById('summary-content').innerHTML = summaryContent;
    }
});
