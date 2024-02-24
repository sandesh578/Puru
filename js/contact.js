//mail
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('InputName').value;
  var email = document.getElementById('InputEmail').value;
  var message = document.getElementById('InputMessage').value;

  var subject =
    document.getElementById('InputSubject').value || 'Contact Form Submission';
  var body = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
  console.log(name);
  var mailtoLink =
    'mailto:directorpuru@gmail.com?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  window.open(mailtoLink);
});
