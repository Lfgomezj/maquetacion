

const Tarjeta = ({ info }) => {
    return (
        <div className="cards">
            <img src={info.imagen} alt="" />
            <section className="texto">
                {info.texto}
            </section>
        </div>
    );
};

export default Tarjeta;