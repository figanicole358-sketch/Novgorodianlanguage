//Javascript код
function shorttale() {
 var block=document.getElementById("settings");
 var set=document.getElementById("button");
 set.style.display='none';
 block.style.display='flex';
 block.style.paddingLeft= '30px';
 block.style.background= 'url("Папірус2.png")';
 block.style.width= '16%';
 block.style.flexDirection= 'column';
 block.style.gap= '30px';
 block.style.float= 'left';
 var button=document.getElementById("button2");
 button.style.width= '80px'
 button.style.paddingLeft= '30px';
 button.style.display= 'flex';
 var buttond=document.getElementById("buttondislex");
 buttond.style.width= '80px'
 buttond.style.paddingLeft= '30px';
 buttond.style.display= 'flex';
}
function close() {
 var block=document.getElementById("settings");
 block.style.display='none';
 var button=document.getElementById("button2");
 button.style.display='none';
 var set=document.getElementById("button");
 set.style.display='flex';
}
function dislex() {
    // Застосовуємо стиль до всіх елементів з класом maintext
    const elements = document.querySelectorAll('.maintext');
    elements.forEach(element => {
        element.classList.remove('maintext');
        element.classList.add('dislex');
    });

    // Приховуємо кнопку "dislex" і показуємо "standart"
    var dislexButton = document.getElementById("buttondislex");
    if (dislexButton) dislexButton.style.display = 'none';

    var standartButton = document.getElementById("buttonstandart");
    if (standartButton) {
        standartButton.style.display = 'flex';
        standartButton.style.width = '80px';
    }
}

function standart() {
    // Повертаємо стиль для всіх елементів з класом dislex
    const elements = document.querySelectorAll('.dislex');
    elements.forEach(element => {
        element.classList.remove('dislex');
        element.classList.add('maintext');
    });

    // Приховуємо кнопку "standart" і показуємо "dislex"
    var standartButton = document.getElementById("buttonstandart");
    if (standartButton) standartButton.style.display = 'none';

    var dislexButton = document.getElementById("buttondislex");
    if (dislexButton) dislexButton.style.display = 'flex';
}