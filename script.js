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


// document.querySelectorAll('.elementSection').forEach(item => {
//     item.addEventListener('click', function() {
//       const plus = this.querySelector('.elementPlus');
//       if (plus) {
//         plus.classList.toggle('active');
//       }
      
//       const content = this.nextElementSibling;
//       if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden');
//         setTimeout(() => content.style.height = content.scrollHeight + "px", 0);
//       } else {
//         content.style.height = "0px";
//         setTimeout(() => content.classList.add('hidden'), 150);
//       }
//     });
//   });