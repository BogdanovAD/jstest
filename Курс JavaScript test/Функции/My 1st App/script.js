function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'];
        for (let i = 0; i < skills.length; i++) {
            console.log(`Я владею: ${skills[i]}, `);
        }
        // ДЗ по циклам
    }
    showSkills();

    function checkAge() {
        if (age > 18) {
            alert('Пора начать обучение!');
        } else {
            alert('Лучше подождать до 18 лет!');
        }
        // ДЗ по условиям
    }
    checkAge();

    function calcPow(num) {
        return num * num;
    }
    console.log(calcPow(24));
}
myFirstApp('Александр', 34);
