function Biografia3(props) {
    return (
        <div className="biografia">
            <div id="div-imagen">
                <div className="img1">
                    <img className="imgn" src={props.foto} width='300' height='300' />
                </div>
                <h5>{props.Biografia3}</h5>


            </div>
            <div className="texto1">
                <span className='span'>
                <strong>Lionel Andrés Messi Cuccittini</strong> (Rosario, Argentina, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.
                Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,9​ es el único futbolista en la historia que ha ganado, entre otras distinciones, siete veces el Balón de Oro, siete premios de la FIFA al mejor jugador del mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol. En 2020, se convirtió en el primer futbolista y el primer argentino en recibir un premio Laureus y fue incluido en el Dream Team del Balón de Oro.
                Como capitán desde agosto de 2011, llegó con su equipo a las finales del Mundial de Brasil 2014, de la Copa América 2015 y de la Copa América Centenario, además de ganar la Copa América 2021 ante Brasil en el Maracaná y, en 2022, la Finalissima frente a Italia en Wembley y el Mundial de Catar contra Francia en el estadio Lusail.
                Lionel Andrés Messi nació el 24 de junio de 1987 en el Hospital Italiano Garibaldi de la ciudad de Rosario, en la provincia de Santa Fe. Es el tercer hijo de Jorge Horacio Messi y Celia María Cuccittini. Tiene dos hermanos mayores, Rodrigo y Matías, y una hermana menor, María Sol.12​ Su familia paterna es originaria del municipio italiano de Recanati, de donde su bisabuelo, Angelo Messi, emigró a Argentina en 1883.13​ Fue su abuela materna, Celia, la que lo alentó a dedicarse al fútbol y a quien él agradece tras convertir un gol, señalando al cielo con las dos manos.

                </span>
            </div>
        </div>
    );
};
export default Biografia3;