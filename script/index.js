const welcome__user = document.querySelector('.welcome__user');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      db.ref('administradores/'+uid).on('value', element =>{
          const value = element.val();

          welcome__user.innerHTML = value.nombre;
      });

    } else {
      // User is signed out
      // ...
      window.location.href = './login.html';
    }
  });