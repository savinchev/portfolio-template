;

    // *** Переменные

var headerRow = document.querySelector('.header__row');
var navLinks = document.querySelectorAll('.nav__link');
var langItems = document.querySelectorAll('.lang__item');

    // *** Функции

// удаление класса
function delClass (elems) {

    for(var i = 0; i < elems.length; i++) {
        elems[i].classList.remove('active')
    }
}

// добавление класса
function addClass (el) {

    el.classList.add('active')
}

// занесение значения в localStorage
function setActiveElToStorage(el, storageEl) {

    val = el.getAttribute('href') 
    sessionStorage.setItem(storageEl, val)
}

// очищение localStorage
function clearStorage() {
    return 'clear storage'
}

// получение активного элемента из localStorage при перезагрузке страницы
function getActiveElFromStorage(elements, storageEl) {

    var active = sessionStorage.getItem(storageEl)

    // проверяем есть ли сохраненное значение в storage
    if(active) {

        delClass(elements)

        // проходим по всем ссылкам и сравниваем значение каждой с значением из storage
        for(var i = 0; i < elements.length; i++) { 
    
            var href = elements[i].getAttribute('href')
            
            // если значение совпадают делаем ссылку активной
            if(href == active) {
                elements[i].classList.add('active')
            }
        }
        
    } else 
        // если в storage пусто - делаем активной первую ссылку
        {
            elements[0].classList.add('active')
        }
}

function buttonHandler(event) {
    var target = event.target

    // делегирование по классу

    if (target.classList.contains('nav__link') && (!target.classList.contains('active'))) {
        delClass(navLinks)
        addClass(target)
        setActiveElToStorage(target, 'activePage')
    }

    // при клике на логотип работаем с кнопкой "Главная"
    if (target.classList.contains('logo') && (!navLinks[0].classList.contains('active'))) {
        delClass(navLinks)
        addClass(navLinks[0])
        setActiveElToStorage(navLinks[0], 'activePage')
    }

    if (target.classList.contains('lang__item') && (!target.classList.contains('active'))) {
        delClass(langItems)
        addClass(target)
        setActiveElToStorage(target, 'activeLang')
    }
}

    // *** Обработчики

headerRow.addEventListener('click', buttonHandler);


getActiveElFromStorage(navLinks, 'activePage');
getActiveElFromStorage(langItems, 'activeLang');

