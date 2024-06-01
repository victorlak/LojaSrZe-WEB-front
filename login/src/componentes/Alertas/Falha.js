import Swal from 'sweetalert2'

function Falha({title, text}){

    return  Swal.fire({
        icon: "error",
        title: title,
        text: text,
      });
        
}

export default Falha;