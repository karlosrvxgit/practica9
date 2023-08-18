function Biografia2(props) {
    return (
        <div className="biografia">
            <div id="div-imagen">
                <div className="img1">
                    <img className="imgn" src={props.foto} width='300' height='300' />
                </div>
                <h5>{props.Biografia2}</h5>


            </div>
            <div className="texto1">
                <span className='span'><strong>Diego Armando Maradona</strong>1​ (Lanús, 30 de octubre de 1960-Dique Luján, 25 de noviembre de 2020)8​ fue un futbolista y entrenador argentino. Como jugador, se desempeñó como mediocampista ofensivo o delantero, y es reconocido por numerosos especialistas,9​10​ exfutbolistas y personalidades internacionales11​ como «uno de los mejores futbolistas en la historia».12​ Asimismo, ha sido catalogado por algunos medios como el «mejor jugador en la historia de la Copa Mundial», de la cual fue designado como el mejor jugador en su edición de 1986.13​ En los premios a Jugador del Siglo de la FIFA fue seleccionado como el «mejor futbolista del siglo xx» en la votación popular, obtuvo la tercera posición en la votación de los expertos seleccionados por la FIFA,n. 1​ y logró la quinta ubicación en la votación realizada por la IFFHS.14​ En la edición de los Premios Globe Soccer 2012 fue distinguido como el mejor «Jugador del Siglo xx».15​16​ Por su legendaria figura en el deporte, que le valió el apodo de Pibe de Oro, así como por su personalidad extravagante, temperamental y carismática, y por su problemática vida fuera del fútbol, en donde fue suspendido por dopaje en 1991 y 1994, Maradona es considerado una de las figuras más históricas de la República Argentina, y uno de sus mayores representantes en el resto del mundo.17​18​19​20​ Asimismo, su persona ha sido motivo de las más variadas referencias en la cultura popular argentina y napolitana.
                El 2 de noviembre de 2020 fue internado por un cuadro de anemia y depresión. Al momento de su muerte se encontraba convaleciente tras haberse sometido a una cirugía para corregir un hematoma subdural en la cabeza.353​ Finalmente, Maradona falleció la mañana del 25 de noviembre de 2020 a los 60 años, en su residencia ubicada en Dique Luján, partido de Tigre, a causa de una descompensación cardíaca que le generó un edema de pulmón.</span>
            </div>
        </div>
    );
};
export default Biografia2;