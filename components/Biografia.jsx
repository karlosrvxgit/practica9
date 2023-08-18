function Biografia(props) {
    return (
        <div className="biografia">
            <div id="div-imagen">
                <div className="img1">
                    <img className="imgn" src={props.foto} width='300' height='300' />
                </div>
                <h5>{props.biografia}</h5>


            </div>
            <div className="texto1">
                <span className='span'><strong>Michael Jeffrey Jordan</strong>(Nueva York; 17 de febrero de 1963) es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.2​3​ Se retiró definitivamente en 2003 en los Washington Wizards, tras haberlo hecho en dos ocasiones anteriores, en 1993 y 1999, después de haber jugado 13 temporadas en los Chicago Bulls.4

                    Ganó 6 anillos con Chicago Bulls, promediando 30,1 puntos por partido en toda su carrera deportiva, el mayor promedio en la historia de la liga. También ganó 10 títulos de máximo anotador, 5 MVP de la temporada, 6 MVP de las Finales; fue nombrado en el mejor quinteto de la NBA en diez ocasiones, en el defensivo nueve veces, líder en robos de balón durante tres años y un premio al mejor defensor de la temporada.

                    Desde 1983, ha aparecido en la portada de la prestigiosa revista deportiva Sports Illustrated en 50 ocasiones, todo un récord, además de ser designado deportista del año en 1991 y mejor atleta del siglo xx por ESPN y segundo tras Babe Ruth por Associated Press.5

                    En la actualidad es el propietario del equipo de los Charlotte Hornets6​ en la NBA y del 23XI Racing en la Copa NASCAR.7​ Se calcula que su patrimonio neto es de $1600 millones.</span>
            </div>
        </div>
    );
};
export default Biografia;