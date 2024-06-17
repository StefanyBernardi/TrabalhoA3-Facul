function concluirEnderecoPopup() {
    document.getElementById('enderecoPopup').style.display = 'none';
    document.getElementById('enderecoOverlay').style.display = 'none';
  }
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
        });
    });
});
