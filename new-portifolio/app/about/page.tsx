import MainLayout from '../components/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <section className="mt-5 m-auto w-11/12 pb-5">
        <h2>Olá! 👋</h2>
        <br />
        <p>
          Eu sou <strong>Guilherme</strong> (mas pode me chamar de
          &quot;Gui&quot;). Sou um desenvolvedor apaixonado em dar vida a
          projetos e ideias através de linhas de código.
        </p>

        <br />

        <p>
          Desde criança sempre fui fascinado por tecnologia e computadores. Em
          dezembro de 2022 resolvir dar um passo a mais e colocar toda essa
          paixão em prática, cursando o curso de Desenvolvimento Fullstack na{' '}
          <a
            href="https://www.betrybe.com/"
            target="_blanck"
            className="text-custom-pink"
          >
            Trybe{' '}
          </a>
          e Ánalise e Desenvolvimento de Sistemas na{' '}
          <a
            href="https://www.mackenzie.br/"
            target="_blanck"
            className="text-custom-pink"
          >
            Universidade Presbiteriana Mackenzie
          </a>
          . Desde então, tenho me dedicado a aprender e aprimorar minhas skills
          em programação.
        </p>

        <br />

        <p>
          Anteriormente, trilhei um percurso diversificado que me trouxe uma
          rica bagagem. De 2014 a 2019, trabalhei em um bar e restaurante, onde
          percorri uma trajetória ascendente até chegar ao cargo de gerente.
          Nessa função, tive a oportunidade de liderar equipes, gerenciar o
          caixa, controlar o estoque e administrar as redes sociais.
          <br />
          Nos anos de 2020 a 2022, embarquei em uma jornada empreendedora ao
          criar um curso de espanhol do absoluto zero. Este curso tinha como
          objetivo preparar brasileiros para a aprovação no exame SIELE,
          fundamental para ingressar em universidades de países de língua
          espanhola. Através dessa empreitada, pude aprimorar ainda mais minhas
          habilidades de comunicação, gestão de tempo, trabalho em equipe e
          adaptabilidade. O sucesso do curso foi tão grande que, hoje em dia, o
          modelo de negócio criado por mim é utilizado por diversas escolas de
          idiomas que atuam nesse mercado.
        </p>

        <br />

        <p>
          Hoje, como programador, aplico essa bagagem diversificada para abordar
          desafios de forma criativa e resolver problemas de maneira eficaz.
        </p>

        <br />

        <p>
          Se você tem um projeto ou uma ideia que gostaria de tirar do papel,
          entre em{' '}
          <a href="/contact" target="_blank" className="text-custom-pink">
            contato
          </a>{' '}
          comigo! Vou adorar te ajudar a dar vida a esse sonho.
        </p>

        <br />

        <p>
          <strong>Até breve!</strong>
        </p>
      </section>
    </MainLayout>
  );
}
