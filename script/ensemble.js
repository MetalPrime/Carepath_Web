const list__content = document.querySelector('.list__content');

renderInquilinos = (list) =>{
    list__content.innerHTML = "";

    list.forEach(element => {
        const newList = document.createElement('div');
        newList.classList.add('list__element');

        const url = `residentStatus.html?${element.id}-${element.nombre}`;
        newList.setAttribute('href',url);

        newList.innerHTML = `
        <p>${element.torre +" " + element.departamento}</p>
        <p>${element.nombre}</p>
        <p>0%</p>
        <p>imgCambiarPlox</p>  
        `;

        list__content.appendChild(newList);
    });


}

getInquilinos = (ref) =>{
    ref.ref('inquilinos').on('value', element =>{
        console.log("funciona")
        const objects = [];
        element.forEach(
            elem =>{
                const obj = elem.val();
                objects.push(obj);
                console.log(obj);
            }
        );
        console.log(objects.length);
        renderInquilinos(objects);
    } );

}

getInquilinos(db);