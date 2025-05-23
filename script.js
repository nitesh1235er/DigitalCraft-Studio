$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a[href*="index.html"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Form validation
    $('form').on('submit', function(event) {
        let valid = true;
        const name = $('#name');
        const email = $('#email');
        const message = $('#message');

        if (name.val().trim() === '') {
            valid = false;
            name.addClass('is-invalid');
            name.next('.invalid-feedback').text('Please enter your name.');
        } else {
            name.removeClass('is-invalid');
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.val().trim() === '') {
            valid = false;
            email.addClass('is-invalid');
            email.next('.invalid-feedback').text('Please enter your email.');
        } else if (!emailPattern.test(email.val().trim())) {
            valid = false;
            email.addClass('is-invalid');
            email.next('.invalid-feedback').text('Please enter a valid email.');
        } else {
            email.removeClass('is-invalid');
        }

        if (message.val().trim() === '') {
            valid = false;
            message.addClass('is-invalid');
            message.next('.invalid-feedback').text('Please enter your message.');
        } else {
            message.removeClass('is-invalid');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
