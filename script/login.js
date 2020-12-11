const correo = document.getElementById('correo');
const contraseña = document.getElementById('password');

const logear = document.getElementsByClassName('button');

const database = firebase.database();
const auth = firebase.auth();


logearCuenta = () => {

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

}
logear.addEventListener('click', logearCuenta());

