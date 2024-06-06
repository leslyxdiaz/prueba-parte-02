// ALERTA
    function showAlert() {
        alert('Esto es una alertaaaa!');
    }
// FIN ALERTA


// POPOVVER
    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)

    })


    // popoverTriggerList.map: Recorre cada elemento del array
// FIN POPOVVER


// TOAST
    function showToast() {
        let button = document.querySelector('button[onclick="showToast()"]');
        let toastContent = button.getAttribute('data-bs-content');
        let toastBody = document.getElementById('toastBody');
        toastBody.textContent = toastContent;

        let toastElement = document.getElementById('liveToast');
        let toast = new bootstrap.Toast(toastElement);
        toast.show();

    }

//intento 02 parte 02

    document.getElementById('data-cambio')
    let datoTitulo = boton.getAttribute('.data-cambio')
        if(datoTitulo == ''){
            document.querySelector('.botonToast').innerHTML = dataCambios
        } else {
            document.querySelector('.botonToast').innerHTML = datoTitulo 
        }

//intento 02 parte 02

   
// FIN TOAST
   

// OFFCANVAS
document.addEventListener('DOMContentLoaded', function () {
    let offcanvasButton = document.getElementById('offcanvasButton');
    let offcanvasElement = document.getElementById('offcanvasExample');
    let offcanvasBody = document.getElementById('offcanvasBody');

    offcanvasButton.addEventListener('click', function () {
        let offcanvasContent = offcanvasButton.getAttribute('data-bs-content');
        offcanvasBody.textContent = offcanvasContent;

        let offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
    });
});
// FIN OFFCANVAS