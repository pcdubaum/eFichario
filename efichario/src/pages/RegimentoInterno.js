import React, { useEffect, useState } from 'react'
import styles from "../components/Home.module.css"
import Titulo from '../components/Titulo'
import Capsula from '../components/Capsula'
import Artigo from '../components/Artigo'
import arrayShuffle from 'array-shuffle';

const RegimentoInterno = () => {

    const [lei, setLei] = useState([]);
    const [artigos, setArtigos] = useState([]);
    const [carregar, setCarregar] = useState(false);

    const Carregar = (e) => {

        let titulo = "";
        let paragrafos = [];
        let operador = 0;

        setLei([""]);
        setLei(require('./regimento_interno.json'));
        setLei(lei.dados);

        lei.forEach((element, index, arr) => {

            titulo = "";
            paragrafos = [];
            operador = index + 1;

            if (element.tag === "artigo") {


                while ((arr[operador].tag !== "artigo")) {
                    paragrafos.push(arr[operador].content);
                    operador++;

                    if(operador > arr.length - 1) break;
                }

                artigos.push({ titulo: element.content, paragrafos: [paragrafos] });
                setArtigos([...artigos, { titulo: element.content, paragrafos: [paragrafos] }]);
                console.log(artigos.length);
            }
        });
    }


    /*[
    <Artigo
        titulo="Art. 1º A Câmara dos Deputados, com sede na Capital Federal, funciona no Palácio do Congresso Nacional."
        paragrafos={["Parágrafo único. Havendo motivo relevante, ou de força maior, a Câmara poderá, por deliberação da Mesa, ad referendum da maioria absoluta dos Deputados, reunir-se em outro edifício ou em ponto diverso no território nacional."]}
        atencaomsg="Brasília é a capital federal do Brasil" />,

    <Artigo 
        titulo="Art. 2º A Câmara dos Deputados reunir-se-á durante as sessões legislativas:"
        paragrafos={["§ 1º As reuniões marcadas para as datas a que se refere o inciso I serãotransferidas para o primeiro dia útil subsequente quando recaírem em sábados, domingos ou feriados ",
            "§ 2º A primeira e a terceira sessões legislativas ordinárias de cada legislatura serão precedidas de sessões preparatórias. "]}
        incisos={["§ 1º As reuniões marcadas para as datas a que se refere o inciso I serão transferidas para o primeiro dia útil subsequente quando recaírem em sábados, domingos ou feriados.",
            "§ 2º A primeira e a terceira sessões legislativas ordinárias de cada legislatura serão precedidas de sessões preparatórias. ",
            "§ 3º A sessão legislativa ordinária não será interrompida em 17 de julho, enquanto não for aprovada a lei de diretrizes orçamentárias pelo Congresso Nacional. (Parágrafo com redação adaptada à Emenda Constitucional nº 50, de 2006, conforme Ato da Mesa nº 80, de 2006)",
            "§ 4º Quando convocado extraordinariamente o Congresso Nacional, a Câmara dos Deputados somente deliberará sobre a matéria objeto da convocação. "]}
    />,

    <Artigo 
        titulo="Art. 3º O candidato diplomado Deputado Federal deverá apresentar à Mesa, pessoalmente ou por intermédio do seu Partido, até o dia 31 de janeiro do ano de instalação de cada legislatura, o diploma expedido pela Justiça Eleitoral, juntamente com a comunicação de seu nome parlamentar, legenda partidária e unidade da Federação de que proceda a representação."
        paragrafos={["§ 1º O nome parlamentar compor-se-á, salvo quando, a juízo do Presidente, devam ser evitadas confusões, apenas de dois elementos: um prenome e o nome; dois nomes; ou dois prenomes. ",
            "§ 2º Caberá à Secretaria-Geral da Mesa organizar a relação dos Deputados diplomados, que deverá estar concluída antes da instalação da sessão de posse.",
            "§ 3º A relação será feita por Estado, Distrito Federal e Territórios, de norte a sul, na ordem geográfica das capitais e, em cada unidade federativa, na sucessão alfabética dos nomes parlamentares, com as respectivas legendas partidárias." ]}
       
    />,

    <Artigo 
        titulo="Art. 4º No dia 1º de fevereiro do primeiro ano de cada legislatura, os candidatos
        diplomados Deputados Federais reunir-se-ão em sessão preparatória, na sede da Câmara dos
        Deputados. (“Caput” do artigo com redação dada pela Resolução nº 19, de 2012)
        "
        paragrafos={["§ 1º Assumirá a direção dos trabalhos o último Presidente, se reeleito Deputado, e, na sua falta, o Deputado mais idoso, dentre os de maior número de legislaturas. ",
            "§ 2º Aberta a sessão, o Presidente convidará quatro Deputados, de preferência de Partidos diferentes, para servirem de Secretários e proclamará os nomes dos Deputados diplomados, constantes da relação a que se refere o artigo anterior",
            
            "§ 3º Examinadas e decididas pelo Presidente as reclamações atinentes à relação " +
            "nominal dos Deputados, será tomado o compromisso solene dos empossados. De pé todos os " +
            "presentes, o Presidente proferirá a seguinte declaração: 'Prometo manter, defender e cumprir "  +
            "a Constituição, observar as leis, promover o bem geral do povo brasileiro e sustentar a união, " + 
            "a integridade e a independência do Brasil'. Ato contínuo, feita a chamada, cada Deputado, de " +
            "pé, a ratificará dizendo: 'Assim o prometo', permanecendo os demais Deputados sentados e " +
            "em silêncio.",

            "§ 4º O conteúdo do compromisso e o ritual de sua prestação não poderão ser " +
            "modificados; o compromissando não poderá apresentar, no ato, declaração oral ou escrita " +
            "nem ser empossado através de procurador.",


            "§ 5º O Deputado empossado posteriormente prestará o compromisso em sessão e " +
            "junto à Mesa, exceto durante período de recesso do Congresso Nacional, quando o fará " +
            "perante o Presidente.",

            "§ 6º Salvo motivo de força maior ou enfermidade devidamente comprovados, a " +
            "posse dar-se-á no prazo de trinta dias, prorrogável por igual período a requerimento do " +
            "interessado, contado:" 
        
        ]}

        incisos = {["I - da primeira sessão preparatória para instalação da primeira sessão legislativa da legislatura;",
        "II - da diplomação, se eleito Deputado durante a legislatura; ",
        "III - da ocorrência do fato que a ensejar, por convocação do Presidente. "]}

        demaisParagrafos = {["§ 6º-A Nas hipóteses excepcionais de que trata o § 6º deste artigo, poderá o " +
        "Presidente, mediante requerimento da parte interessada, colher o compromisso de posse por meio de " +
        "videoconferência durante a sessão preparatória ou no mesmo dia de sua realização, " +
        "nesse caso, acompanhado o ato pela Secretaria-Geral da Mesa, que lavrará o respectivo " +
        "termo. (Parágrafo acrescido pela Resolução nº 37, de 2022)",
    
        "§ 6º-B Nos casos de licença-gestante, o requerimento referido no § 6º-A deste " +
        "artigo, devidamente acompanhado da declaração de parto em período inferior a 120 (cento e " +
        "vinte) dias, assegurará o direito à posse virtual à parlamentar diplomada. (Parágrafo "+
        "acrescido pela Resolução nº 37, de 2022)",

        "§ 7º Tendo prestado o compromisso uma vez, fica o Suplente de Deputado " +
        "dispensado de fazê-lo em convocações subsequentes, bem como o Deputado ao reassumir o " +
        "lugar, sendo a sua volta ao exercício do mandato comunicada à Casa pelo Presidente. ",
        
        "§ 8º Não se considera investido no mandato de Deputado Federal quem deixar de " +
        "prestar o compromisso nos estritos termos regimentais.",
       
        "§ 9º O Presidente fará publicar, no Diário da Câmara dos Deputados do dia " +
        "seguinte, a relação dos Deputados investidos no mandato, organizada de acordo com os "+
        "critérios fixados no § 3º do art. 3º, a qual, com as modificações posteriores, servirá para o "+
        "registro do comparecimento e verificação do quorum necessário à abertura da sessão, bem "+
        "como para as votações nominais e por escrutínio secreto. (Denominação original “Diário do "+
        "Congresso Nacional” alterada para “Diário da Câmara dos Deputados” para adequação ao "+
        "Ato dos Presidentes das Mesas das duas Casas do Congresso Nacional, de 2 de outubro de "+
        "1995, conforme republicação determinada pelo Ato da Mesa nº 71, de 2005)"

    ]}
    />,

    <Artigo
    titulo = "Art. 5º Na segunda sessão preparatória da primeira sessão legislativa de cada legislatura, no dia 1º de fevereiro, sempre que possível sob a direção da Mesa da sessão 
            anterior, realizar-se-á a eleição do Presidente, dos demais membros da Mesa e dos Suplentes dos Secretários, para mandato de dois anos, vedada a recondução para o mesmo cargo na 
            eleição imediatamente subsequente. (“Caput” do artigo com redação dada pela Resolução nº 19, de 2012)"

            paragrafos = {["§ 1º Não se considera recondução a eleição para o mesmo cargo em legislaturas diferentes, ainda que sucessivas.",
            "§ 2º Enquanto não for escolhido o Presidente, não se procederá à apuração para os demais cargos. " ]}
    />,

    <Artigo
    titulo = "Art. 6º No terceiro ano de cada legislatura, em data e hora previamente
                designadas pelo Presidente da Câmara dos Deputados, antes de inaugurada a sessão
                legislativa e sob a direção da Mesa da sessão anterior, realizar-se-á a eleição do Presidente,
                dos demais membros da Mesa e dos Suplentes dos Secretários."

            paragrafos = {["§ 1º (Revogado). ",
            "§ 2º (Revogado).",
            "§ 3º Enquanto não for eleito o novo Presidente, dirigirá os trabalhos da Câmara dos Deputados a Mesa da sessão legislativa anterior. (Artigo com redação dada pela "+
            "Resolução nº 19, de 2012)" ]}
    />,

    <Artigo
    titulo = "Art. 7º A eleição dos membros da Mesa far-se-á em votação por escrutínio
            secreto e pelo sistema eletrônico, exigido maioria absoluta de votos, em primeiro escrutínio, e
            maioria simples, em segundo escrutínio, presente a maioria absoluta dos Deputados,
            observadas as seguintes exigências e formalidades: "

            paragrafos = {["I - registro, perante a Mesa, individualmente ou por chapa, de candidatos "+
            "previamente escolhidos pelas bancadas dos Partidos ou Blocos Parlamentares aos cargos que, "+
            "de acordo com o principio da representação proporcional, tenham sido distribuídos a esses "+
            "Partidos ou Blocos Parlamentares;",

            "II - chamada dos Deputados para a votação; ",
            "III - realização de segundo escrutínio, com os 2 (dois) mais votados para cada cargo, quando, no primeiro, não se alcançar maioria absoluta; ",
        
            "IV - eleição do candidato mais idoso, dentre os de maior número de legislaturas, em caso de empate; "]}
    />
 
]  ); */






    const artigoss = arrayShuffle(artigos);


    return (
        <article>
            <Titulo texto="Língua Portuguesa - Regras de Acentuação" />
            <div className={styles.conjunto}>
                <div className={styles.leitura}>
                    <button onClick={(e) => Carregar()}>Pré Visualizar</button>
                    <h1>Regimento Interno da Câmara dos Deputados</h1>
                    <h1>{artigos.length}</h1>


                    {artigoss.map((e, key) => (
                        <Artigo key={key} titulo={e.titulo} paragrafos={[e.paragrafos]} />
                    ))}

                    <h1>CAPÍTULO II - DAS SESSÕES LEGISLATIVAS</h1>



                    <h1>CAPÍTULO III - DAS SESSÕES PREPARATÓRIAS</h1>



                </div>
            </div>
        </article>
    )
}

export default RegimentoInterno