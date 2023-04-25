import Imagen from './Imagen';
import Opciones from "./Opciones";
import Iconos from './Icono';
import toy1 from './img/toy1.png';
import toy2 from './img/toy2.png';
import toy3 from './img/toy3.png';

const Menu = () => {

    const imagenes = {

        img1: toy1,
        img2: toy2,
        img3: toy3

    }

    return (
        <section className='menuLateral'>
            <section className="foto">
                <Imagen />
            </section>
            <section className='opciones'>
                <Opciones opciones='Enlaces' />
                <Opciones opciones='Enlaces' />
                <Opciones opciones='Enlaces' />
            </section>
            <section className='imagen2'>
                <Iconos imagen={imagenes.img1} />
                <Iconos imagen={imagenes.img2} />
                <Iconos imagen={imagenes.img3} />

            </section>
        </section >
    );
};

export default Menu;