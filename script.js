const questios = document.querySelectorAll('.question');

questios.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        // remove show-text class from all other questions
        questios.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        // show text of clicked question
        question.classList.toggle('show-text');
    });
});