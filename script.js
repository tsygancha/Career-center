document.querySelectorAll('.elementSection').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.elementSection').forEach(otherItem => {
            if (otherItem !== item) {
                const otherPlus = otherItem.querySelector('.elementPlus');
                if (otherPlus && otherPlus.classList.contains('active')) {
                    otherPlus.classList.remove('active');
                }
                const otherContent = otherItem.nextElementSibling;
                if (!otherContent.classList.contains('hidden')) {
                    otherContent.style.height = "0px";
                    setTimeout(() => otherContent.classList.add('hidden'), 150);
                }
            }
        });

        const plus = item.querySelector('.elementPlus');
        if (plus) {
            plus.classList.toggle('active');
        }

        const content = item.nextElementSibling;
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            setTimeout(() => content.style.height = content.scrollHeight + "px", 0);
        } else {
            content.style.height = "0px";
            setTimeout(() => content.classList.add('hidden'), 150);
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Початок відправлення даних
    const formData = new FormData(this); 
    const contactUsSection = document.querySelector('.contactUs_Section');
    const thanksSection = document.querySelector('.thanksSection');

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); 
    })
    .then(data => {
        console.log("Form submitted successfully", data);
        clearForm();

        contactUsSection.classList.add('hide');
        thanksSection.classList.add('show');

        setTimeout(() => {
            contactUsSection.classList.remove('hide');
            thanksSection.classList.remove('show');
        }, 2000);

    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
});

function clearForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Phone").value = "";
}

// document.addEventListener("DOMContentLoaded", function() {
//     const toggleButton = document.querySelector('.sideMenu_toogleOpenSideMenu');
//     toggleButton.addEventListener('click', function() {
//         const sideMenu = document.querySelector('.sideMenu_header');
//         sideMenu.classList.toggle('hide');
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.sideMenu_toogleOpenSideMenu');
    let scrollPosition = 0; // Зберігаємо позицію скролу

    toggleButton.addEventListener('click', function() {
        const body = document.body;
        const sideMenu = document.querySelector('.sideMenu_header');
        sideMenu.classList.toggle('hide');

        if (!sideMenu.classList.contains('hide')) {
            scrollPosition = window.pageYOffset; // Зберігаємо поточну позицію скролу
            body.style.overflow = 'hidden'; // Вимикаємо скрол
            body.style.position = 'fixed'; // Забороняємо скролінг, але зберігаємо можливість "тапу" по екрану
            body.style.top = `-${scrollPosition}px`; // Зберігаємо позицію скролу
            body.style.width = '100%'; // Забезпечуємо, що ширина body не змінюється
        } else {
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition); // Відновлюємо позицію скролу
        }
    });
});