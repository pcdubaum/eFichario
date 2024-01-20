import React from 'react'
import Navbar from '../components/Navbar'
import { Heading, Flex, Tabs, TabList, TabPanel, TabPanels, Tab, Stack, Alert } from '@chakra-ui/react'
import { AlertIcon } from '@chakra-ui/react'

const EditalCnu = () => {


  return (
    <Flex w='100vw' h='100vh' direction='column' bg='brand.100'>
      <Navbar />
      <Stack>
        <Alert status='warning'>
          <AlertIcon />
          A leitura desse resumo não substitui a leitura integral do edital.
        </Alert>

        <Alert status='info'>
          <AlertIcon />
          Esse resumo é para cargos de Ampla Concorrência e exclui trechos de cunho administrativo.
        </Alert>
      </Stack>

      <Heading as='h1' size='lg' noOfLines={1} textAlign='center' mb='16px' mt='16px'>
        Edital CNU - Bloco 2
      </Heading>


      <Tabs minWw='790px' w='90%' alignItems='center' justifyContent='center' m='auto' mt='25px'>
        <TabList>
          <Tab>1 - DAS DISPOSIÇÕES PRELIMINARES</Tab>
          <Tab>5 - DAS INSCRIÇÕES</Tab>
          <Tab>7 - DA ETAPA DE QUALIFICAÇÃO</Tab>
          <Tab>8 - REALIZAÇÃO DAS PROVAS </Tab>
          <Tab>10 - DA CLASSIFICAÇÃO FINAL</Tab>
        </TabList>

        <TabPanels >
          <TabPanel>
            <p>I - Primeira Etapa:</p>
            <p>a) primeira fase: exame de habilidades e conhecimentos aferidos por meio de aplicação de provas objetivas e discursiva, de
              caráter classificatório e eliminatório, sob a responsabilidade da Fundação Cesgranrio;</p>
            <p>II - Segunda Etapa: destinada a avaliação de títulos, quando couber, de caráter classificatório, sob a responsabilidade da
              Fundação Cesgranrio.</p>
            <p>III - Terceira Etapa: destinada a Curso de Formação específico, de caráter classificatório e eliminatório, dos candidatos ao
              cargo de Especialista em Políticas Públicas e Gestão Governamental do Ministério da Gestão e da Inovação em Serviços
              Públicos - MGI; e para o cargo de Pesquisador em Informações Geográficas e Estatísticas será constituída de Prova Didática
              na forma de aula, de caráter classificatório.</p>
            <p>1.3.1 - Havendo indisponibilidade de locais suficientes ou adequados nas cidades de realização das provas, essas poderão ser
              realizadas em outras localidades adjacentes. </p>
            <p>1.5 - O Banco de Candidatos Aprovados em Lista de Espera poderá ser utilizado para contratação temporária pelos órgãos e
              entidades aderentes à esta edição do Concurso Público Nacional Unificado, observando disposto na Lei nº 8.745, de 09 de
              dezembro de 1993.
            </p>
            <p>1.5.1 - O chamamento para preenchimento de vagas de contratação temporária não se confundem com as convocações para
              preenchimento de vagas dos cargos efetivos do Concurso Público Nacional Unificado.
            </p>
            <p>1.5.2 - O Ministério da Gestão e da Inovação em Serviços Públicos editará regra específica para a utilização do Banco de
              Candidatos Aprovados em Lista de Espera para contratação temporária. </p>
          </TabPanel>
          <TabPanel>
            <p>5.1 - Antes de se inscrever, o candidato deverá conhecer este Edital e certificar-se de que preencherá todos os requisitos
              exigidos quando da admissão.</p>
            <p>5.3.1 - A inscrição deverá ser efetuada, no período das 10 horas do dia 19/01/2024 às 23 horas e 59 minutos do dia
              09/02/2024, observado o horário oficial de Brasília/DF, no sistema eletrônico de inscrição na página do Concurso Público
              Nacional Unificado (https://www.gov.br/gestao/pt-br/concursonacional/). </p>
            <p>5.3.2 - Ao se inscrever, o candidato deverá optar, dentre as opções do bloco temático, pelo cargo e pela especialidade,
              indicando a ordem de preferência de ocupação dos cargos e a cidade de realização das provas. As cidades onde serão
              realizadas as provas estão expressas no Anexo III.</p>
            <p>5.3.3 - O candidato poderá escolher todos os cargos e suas respectivas especialidades ofertadas em um único bloco temático
              escolhido, devendo, necessariamente, indicar a ordem de preferência e observar as características e exigências de cada um
              deles. </p>
            <p>5.3.4 - Os candidatos deverão ordenar as suas preferências pelos órgãos, cargos com suas respectivas especialidades,
              considerando informações sobre atribuições, formação exigida, atividades previstas e remuneração expressas nos Anexo II. </p>
            <p>5.3.5 - A aprovação do candidato se dará de acordo com a sua indicação de preferência sendo alocado da maior preferência a
              menor preferência caso tenha nota suficiente no seu melhor cargo. Entende-se por melhor cargo o mais preferido em que ele
              foi aprovado dentro do número de vagas.</p>
            <p>5.3.5.1 – Se o candidato tiver nota suficiente, será classificado e considerado para a lista de espera em todos os cargos de
              maior preferência em relação àquele em que foi aprovado dentro do número de vagas imediatas</p>
            <p>5.3.7 - O candidato que não tiver sido aprovado, dentro do número de vagas, em nenhum cargo poderá constar na lista de
              espera de todos os cargos selecionados e ranqueados, desde que não tenha sido reprovado e desde que esteja dentro dos
              limites de classificados desses cargos e especialidades. </p>
            <p>5.3.8 - O candidato tem o direito soberano de escolher a prioridade dos cargos e especialidades de forma a ranqueá-los para
              indicar as suas preferências. </p>
            <p>5.3.11 - O valor da taxa de inscrição será R$ 90,00 (noventa) reais</p>
          </TabPanel>
          <TabPanel>
            <p>7.1.1 - 1ª Etapa - Provas objetivas </p>
            <p>Este Certame será realizado em até três etapas, conforme a área de atuação e perfil demandado, que serão selecionados no
              momento da inscrição. A primeira etapa será composta por Prova objetiva e Prova discursiva, ambas de caráter eliminatório
              e classificatório. A segunda etapa, quando couber, será constituída por prova de títulos, de caráter apenas classificatório;
              e a terceira etapa, composta por Curso de Formação específico, conforme regras que serão definidas em editais próprios, de
              caráter classificatório e eliminatório, para candidatos aos cargos Analista de Infraestrutura do Ministério da Gestão e da
              Inovação em Serviços Públicos (MGI), Analista Técnico de Políticas Sociais do Ministério da Gestão e da Inovação em
              Serviços Públicos (MGI), Analista em Tecnologia da Informação do Ministério da Gestão e da Inovação em Serviços Públicos
              (MGI) e de Especialista em Políticas Públicas e Gestão Governamental do Ministério da Gestão e da Inovação em Serviços Públicos (MGI). Para o cargo de Pesquisador em Informações Geográficas e Estatísticas será constituída de Prova Didática na
              forma de aula, de caráter classificatório, sob a responsabilidade do Instituto Brasileiro de Geografia e Estatística (IBGE),
              aprovados na primeira e na segunda etapas do Concurso Público Nacional Unificado, segundo a ordem de classificação por
              cargo/área e dentro do número de vagas previsto neste Edital. </p>
            <p>7.1.1.1 Provas objetivas: constituídas de 70 (setenta) questões de múltipla escolha, cuja pontuação será calculada de acordo
              com as especificidades descritas nas Tabelas 1, 2 e 3. As questões serão assim distribuídas: prova objetiva de
              Conhecimentos Gerais, de caráter eliminatório e classificatório, com 20 (vinte) questões de múltipla escolha; prova objetiva
              de Conhecimentos Específicos, de caráter eliminatório e classificatório, com 50 (cinquenta) questões de múltipla escolha.
              Cada questão das provas objetivas apresentará cinco alternativas (A; B; C; D; E) e uma única resposta correta. </p><p>7.1.1.1.2 - No caso das provas objetivas de Conhecimentos Gerais, a nota de cada prova deve ser calculada como: 100*(Nº
                de questões respondidas de forma correta)/ (Nº total de questões da prova) (Tabelas 1, 2 e 3). No caso das provas objetivas de
                Conhecimentos Específicos, a nota de cada prova deve ser calculada como: ((Nº acertos eixo temático 1)* peso eixo
                temático 1) + ((Nº acertos eixo temático 2)* peso eixo temático 2) + ((Nº acertos eixo temático 3)* peso eixo temático 3) + ((Nº
                acertos eixo temático 4)* peso eixo temático 4) + ((Nº acertos eixo temático 5)* peso eixo temático 5) (Tabelas 1, 2 e 3). Os
                pesos de cada eixo temático da P2 (Prova objetiva de Conhecimentos Específicos) estão previstos no ANEXO V - DOS
                PESOS POR ÓRGÃOS/CARGOS/ESPECIALIDADE.</p>
            <p>7.1.1.1.2.1 - Será eliminado o candidato que: obtiver aproveitamento inferior a 40% da pontuação nas provas objetivas de
              Conhecimentos gerais (P1) e de Conhecimentos Específicos (P2), ou obtiver nota zero na Prova discursiva.
            </p>
            <p>7.1.1.1.3 - Os candidatos não eliminados, de acordo com o subitem 7.1.1.1.2, serão classificados em ordem decrescente do
              total de pontos obtidos nas Provas objetivas, considerando-se a soma das notas ponderadas, de acordo com as Tabelas 1, 2 e
              3. </p>

            <p>7.1.2 - 1ª Etapa - Prova discursiva </p>
            <p>7.1.2.1 - Será considerado habilitado para a Prova discursiva o candidato que estiver classificado nas Provas objetivas,
              considerando-se a soma das notas ponderadas das provas objetivas de Conhecimentos Gerais (P1) e de Conhecimentos
              Específicos (P2), no órgão/cargo/especialidade para o qual se inscreveu, nas primeiras posições, obedecendo-se ao
              quantitativo previsto no ANEXO I - QUADROS DE ÓRGÃOS/ CARGOS/ ESPECIALIDADE, VAGAS deste Edital, respeitados
              os empates na última posição. O número de provas discursivas corrigidas por cargo e especialidade demandada será igual a
              nove vezes o número total de vagas imediatas, respeitando-se o limite mínimo de 10 (dez) provas discursivas corrigidas por
              cargo e especialidade demandado, para a ampla concorrência (AC), candidatos negros (CN), pessoas com deficiência (PcD) e
              indígenas (CI), conforme descrito no ANEXO I - QUADROS DE ÓRGÃOS/ CARGOS/ ESPECIALIDADE, VAGAS deste
              Edital.</p>
            <p>7.1.2.2 - O candidato terá a sua prova discursiva corrigida se pelo menos para um cargo e especialidade, a sua classificação,
              nas provas objetivas, for até nove vezes o número de vagas, considerando os empates.
            </p>
            <p>7.1.2.3 - Os candidatos não habilitados, na forma do subitem 7.1.2.1, serão eliminados deste Concurso Público Nacional
              Unificado. </p>
            <p>7.1.2.4 - O candidato somente será eliminado do Concurso Público Nacional Unificado se não for habilitado para a prova
              discursiva de nenhum cargo do bloco temático.
            </p>
          </TabPanel>
          <TabPanel>
            <p>8.1 - As provas objetivas e discursivas, para todos os órgãos/cargos/especialidades, serão realizadas em dois turnos, em um
              único dia, na forma dos subitens 8.1.1 e 8.1.2, tendo por base os conteúdos programáticos especificados no Anexo IV.
            </p>
            <p>8.1.1 - As provas objetivas de Conhecimentos Gerais e Discursiva terão duração de 2 (duas) horas e 30 (trinta) minutos e
              serão aplicadas no turno da manhã.</p>
            <p>8.1.2 - As provas objetivas de Conhecimentos Específicos terão duração de 3 (três) horas e 30 (trinta) minutos e serão
              aplicadas no turno da tarde. </p>
            <p>8.15 - Os gabaritos das provas objetivas serão distribuídos à Imprensa, no primeiro dia útil seguinte ao de realização das
              mesmas, estando disponíveis, também, na página do Concurso Público Nacional Unificado (https://www.gov.br/gestao/ptbr/concursonacional/).</p>
          </TabPanel>
          <TabPanel>
            <p>10.1 - A Nota Final Ponderada (NFP), para todos os órgãos/cargos/especialidade de cada candidato não eliminado do
              Concurso Público, para fins de classificação final, será calculada da seguinte forma: </p>
            <p>NFP = NPO + NPD + NPT</p>
            <p>Onde: NFP é a Nota Final Ponderada;</p>
            <p>NPO é a soma das notas ponderadas das provas objetivas de Conhecimentos gerais (P1) e de Conhecimentos específicos
              (P2); </p>
            <p>NPD é a Nota Ponderada obtida na Prova Discursiva; e </p>
            <p>NPT é a Nota Ponderada obtida na Avaliação de Títulos, quando couber. </p>
            <p>10.1.1 - O candidato terá uma NFP para cada opção de cargo/especialidade escolhida no ato da inscrição. </p>
            <p>10.2.1 - Serão considerados classificados os candidatos que, após a soma das notas nas provas objetivas, discursivas e nas
              provas de títulos, estiverem classificados até o limite de duas vezes o número de vagas imediatas do bloco temático com
              notas mais altas conforme o cargo e especialidade, levando em consideração os cargos e especialidades com suas ordens de
              ranqueamento escolhidos no ato da inscrição e as vagas reservadas para negros, indígenas e pessoas com deficiência. </p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Flex>
  )
}

export default EditalCnu