const correo = document.getElementById('correo');
const contraseña = document.getElementById('password');

const logear = document.querySelector('.btnIniciar');

const database = firebase.database();


logear.addEventListener('click', function(event){
    event.preventDefault();
    if (correo.value == '' || contraseña.value == '') {

        alert('completa toda la informacion requerida');
        return;

    }

    auth.signInWithEmailAndPassword(correo.value, contraseña.value).then(

        (validacion) => {

            var id = validacion.user.uid;

            database.ref('administrador/' + id).once(

                'value',

                (data) => {

                    let adminData = data.val();

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

        }

    );
});

