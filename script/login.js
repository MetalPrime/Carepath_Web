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

        (data) => {

            window.location.href = 'index.html';

        }

    ).catch(

        (error) => {

            alert('datos de cuenta incorrectos');

        }

    );

}
logear.addEventListener('click', logearCuenta);

ingresoReg = () => {

    window.location.href = 'registro.html';

}
cambioReg.addEventListener('click', ingresoReg);
