Email.send({
  SecureToken : "fa5cdb1d-dae7-4227-9afe-4568c372839c",
  To : 'p-294803@yandex.ru',
  From : "p.294803@gmail.com",
  Subject : "This is the subject",
  Body : "fuck"
}).then(message => alert(message));
