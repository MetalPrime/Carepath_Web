const input = document.querySelector('.input');
const inputSearch = document.querySelector('.inputSearch');
const list__items = document.querySelector('.list__items');

input.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchRef = db.ref('inquilinos').orderByChild('nombre').startAt(inputSearch.value); 
    getBusqueda(searchRef);
})

renderBusqueda = (list) =>{


    list.forEach(element => {
        const newList = document.createElement('a');
        newList.classList.add('list__element');

        const url = `residentStatus.html?${element.id}-${element.nombre}`;
        newList.setAttribute('href',url);

        newList.innerHTML = `
        <p>${element.torre +" " + element.departamento}</p>
        <p>${element.nombre}</p>
        <p>0%</p>
        <img src="data/img/notification.svg" alt="notification">  
        `;

        list__items.appendChild(newList);
    });


}

getBusqueda = (ref) =>{
    ref.on('value', element =>{
        console.log("funciona")
        const objects = [];
        element.forEach(
            elem =>{
                const obj = elem.val();
                objects.push(obj);
                console.log(obj);
            }
        );
        list__items.innerHTML = '',
        renderBusqueda(objects);
    } );

}