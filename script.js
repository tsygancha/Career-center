document.querySelectorAll('.elementSection').forEach(item => {
    item.addEventListener('click', function() {
      const plus = this.querySelector('.elementPlus');
      if (plus) {
        plus.classList.toggle('active');
      }
      
      const content = this.nextElementSibling;
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        setTimeout(() => content.style.height = content.scrollHeight + "px", 0);
      } else {
        content.style.height = "0px";
        setTimeout(() => content.classList.add('hidden'), 150);
      }
    });
  });
  