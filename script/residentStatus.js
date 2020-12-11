window.addEventListener('load', ()=>{

        //partimos la location para obtener el ID
        const parts = this.location.search.split('-');

        const uid = parts[0].replace('?','');

        db.ref('inquilinos/'+uid).on('value', element =>{
            const value = element.val();

            document.querySelector('.info__resident--name').innerHTML = `<strong>Nombre: </strong> ${value.nombre}` ;
            document.querySelector('.info__resident--phone').innerHTML = `<strong>Número: </strong> ${value.numero}`;
            document.querySelector('.info__resident--email').innerHTML = `<strong>Usuario: </strong> ${value.userName}`;
            document.querySelector('.info__resident--document').innerHTML =`<strong>Tipo de documento: </strong> ${value.tipoIdentificacion}`;
            document.querySelector('.info__resident--numberDocument').innerHTML = `<strong>Documento: </strong> ${value.identificacion}`;

            document.querySelector('.info__other--torre').innerHTML = `<strong>Número de torre: </strong> ${value.torre}`;
            document.querySelector('.info__other--departamento').innerHTML = `<strong>Número apartamento:</strong> ${value.departamento}`;
        });


        
        
});