const correo = document.getElementById('correo');
const contraseña = document.getElementById('password');

const logear = document.querySelector('.btnIniciar');


logear.addEventListener('click', function(event){
    event.preventDefault();
    if (correo.value == '' || contraseña.value == '') {

        alert('completa toda la informacion requerida');
        return;

    }

    console.log(correo.value)
    console.log(contraseña.value)

    firebase.auth().signInWithEmailAndPassword(correo.value.trim(), contraseña.value.trim()).then(

        (validacion) => {

            var id = validacion.user.uid;

            db.ref('administradores/' + id).on(

                'value',

                (data) => {

                    let adminData = data.val();
                    console.log(adminData);
                    if (adminData.estado !== 'administrador') {

                        auth.signOut();
                        alert('error de usuario ¿Esta seguro que cuentas con una cuenta de administrador?');

                    } else {

                        window.location.href = 'index.html';

                    }
                }
            );

        }

    ).catch(

        (error) => {

            alert('datos de cuenta incorrectos');
            alert(error);
        }

    );
});

