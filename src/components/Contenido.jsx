import Agregar from "./Agregar";
import Tarjeta from "./Carta"

import img1 from "./img/imagen.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";


const Contenido = () => {

    const info = [
        {
            imagen: img1,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            imagen: img2,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ."

        },
        {
            imagen: img3,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            imagen: img4,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    return (
        <div className="contenido">
            <section className="agregar">
                <Agregar />
            </section>
            <section className="tarjetas">
                {
                    info.map((info) => (
                        <Tarjeta info={info} />
                    ))
                }
            </section>
        </div>
    );
};

export default Contenido;