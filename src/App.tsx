import profilePhoto from '../foto-2.png'
import javascriptLogo from '../icons/javascript-original.svg'
import kotlinLogo from '../icons/kotlin-original.svg'
import pythonLogo from '../icons/python-original.svg'
import javaLogo from '../icons/java-original.svg'
import cppLogo from '../icons/cplusplus-original.svg'
import htmlLogo from '../icons/html5-original.svg'
import cssLogo from '../icons/css3-original.svg'
import arduinoLogo from '../icons/arduino-original.svg'
import iotLogo from '../icons/iot.svg'
import reactLogo from '../icons/react-original.svg'
import viteLogo from '../icons/vitejs-original.svg'
import androidLogo from '../icons/android-original.svg'
import gitLogo from '../icons/git-original.svg'
import githubLogo from '../icons/github-original.svg'
import tornPaper from '../icons/torn-paper.svg'

const stats = [
  { value: 'Web', label: 'desenvolvimento' },
  { value: 'Mobile', label: 'aplicações' },
  { value: 'Automação', label: '& IoT' },
  { value: 'UI/UX', label: 'experiência' },
  { value: '2026', label: 'conclusão do técnico' },
]

const projects = [
  {
    number: '01',
    title: 'Âncora',
    status: 'em desenvolvimento',
    description:
      'Aplicação de apoio emocional e autocuidado. O nome vem da ideia central: uma âncora não decide o destino de quem está no mar, apenas impede que a correnteza leve a pessoa para longe.',
    detail:
      'Check-in emocional, diário de expressão, microações de autocuidado, respiração guiada, rede de apoio e experiência adaptada para crianças, jovens, adultos e idosos. O maior desafio tem sido equilibrar acolhimento, acessibilidade e simplicidade.',
    tags: ['React', 'Vite', 'JavaScript', 'PWA', 'UX'],
    year: '2025–26',
  },
  {
    number: '02',
    title: 'StudyOS',
    status: 'protótipo · evolução',
    description:
      'Conceito de um sistema operacional de estudos: tarefas, metas, cronogramas, hábitos e temporizador Pomodoro reunidos em um só lugar.',
    detail:
      'Reduzir o caos do planejamento, deixando a rotina mais visual e menos repetitiva. A estrutura do app foi pensada para facilitar foco, organização e consistência sem sobrecarregar o usuário.',
    tags: ['Figma', 'UX', 'Product', 'Organização'],
    year: '2025',
  },
  {
    number: '03',
    title: 'Automação com ESP32',
    status: 'protótipos',
    description:
      'Experimentos com sensores e atuadores para automação e monitoramento de luminosidade, presença e temperatura em tempo real.',
    detail:
      'Automação não é só plugar fios, é fazer hardware e software conversarem de forma estável. O protótipo físico funciona e exibe o monitoramento em tela.',
    tags: ['ESP32', 'C/C++', 'Automação', 'IoT'],
    year: '2025',
  },
  {
    number: '04',
    title: 'Study Hub',
    status: 'conceito · protótipo',
    description:
      'Proposta de um espaço web para centralizar materiais, avisos e recursos da turma, com navegação em formato de feed e interface responsiva.',
    detail:
      'Os conteúdos da turma estavam espalhados. O hub reúne tudo com uma navegação clara, a página inicial já foi projetada e implementada.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2024–25',
  },
]

type SkillGroup =
  | {
      title: 'Linguagens'
      items: { name: string; note: string; logo: string | string[] }[]
    }
  | {
      title: 'Tecnologias'
      items: { name: string; note: string; logo: string | string[] }[]
    }
  | {
      title: 'Como trabalho'
      items: string[]
    }

const skills: SkillGroup[] = [
  {
    title: 'Linguagens',
    items: [
      { name: 'JavaScript', note: 'projetos web e PWA', logo: javascriptLogo },
      { name: 'Kotlin', note: 'Android', logo: kotlinLogo },
      { name: 'Python', note: 'lógica e estudos', logo: pythonLogo },
      { name: 'Java', note: 'base acadêmica', logo: javaLogo },
      { name: 'C/C++', note: 'ESP32 e Arduino', logo: cppLogo },
      { name: 'HTML & CSS', note: 'estrutura e estilo', logo: [htmlLogo, cssLogo] },
    ],
  },
  {
    title: 'Tecnologias',
    items: [
      { name: 'Automação', note: 'rotinas e dispositivos', logo: arduinoLogo },
      { name: 'IoT', note: 'sensores e atuadores', logo: iotLogo },
      { name: 'Web', note: 'React, Vite, responsivo', logo: [reactLogo, viteLogo] },
      { name: 'Mobile', note: 'Android nativo', logo: androidLogo },
      { name: 'Git & GitHub', note: 'versionamento', logo: [gitLogo, githubLogo] },
    ],
  },
  {
    title: 'Como trabalho',
    items: [
      'Resolução de problemas com calma',
      'Comunicação clara, ensinar é revisar',
      'Colaboração e escuta ativa',
      'Organização antes da pressa',
      'Aprendizagem contínua, sem atalhos',
    ],
  },
]

function SocialIcon({ kind }: { kind: 'instagram' | 'linkedin' | 'mail' }) {
  const commonProps = { viewBox: '0 0 24 24', 'aria-hidden': true }

  if (kind === 'instagram') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
      </svg>
    )
  }

  if (kind === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2"></path>
        <path d="M2 9h4v12H2z"></path>
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m3 6 9 7 9-7"></path>
    </svg>
  )
}

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="cover">
        <div className="cover-nav">
          <nav className="cover-links" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#trajetoria">Perfil</a>
            <a href="#contato">Contato</a>
            <a href="#projetos">Meus projetos</a>
          </nav>
        </div>

        <div className="cover-body">
          <aside className="cover-socials" aria-label="Redes sociais">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <SocialIcon kind="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/viviane-lima-49445a373/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <SocialIcon kind="linkedin" />
            </a>
            <a href="mailto:kristhyneviviane@gmail.com" aria-label="E-mail" title="E-mail">
              <SocialIcon kind="mail" />
            </a>
          </aside>

          <div className="cover-title">
            <div className="hello">I am</div>
            <h1 className="cover-name">
              Viviane
              <br />
              <span className="outline">Lima</span>
            </h1>
            <div className="cover-role">Developer</div>
          </div>

        </div>

        <div className="cover-stats">
          {stats.map((item) => (
            <div key={item.value}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <main id="topo">
        <section id="sobre">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">01</span>
              <h2>Sobre mim</h2>
              <span className="sec-note">— quem faz o código</span>
            </div>

            <div className="about">
              <div>
                <p>
                  Comecei na programação por curiosidade e fiquei pela possibilidade de <strong>criar soluções para problemas reais</strong> dos mais simples aos que pareciam impossíveis. Hoje curso o Ensino Médio Técnico em Desenvolvimento de Sistemas, e cada projeto novo é uma desculpa para aprender algo a fundo.
                </p>
                <p>
                  Me interesso especialmente por <strong>desenvolvimento web e mobile</strong>, por <strong>UI/UX</strong>, acredito que uma boa interface é metade da solução, e por <strong>automação e IoT</strong>, onde o software sai da tela e age no mundo físico.
                </p>
                <p>
                  Também fui <strong>monitora de programação pela Seduc-PI</strong>, ajudando outros estudantes em exercícios e atividades práticas. Ensinar, descobri, é um dos melhores jeitos de aprender.
                </p>

                <dl className="facts">
                  <div>
                    <dt>Base</dt>
                    <dd>Teresina, Piauí</dd>
                  </div>
                  <div>
                    <dt>Formação</dt>
                    <dd>Técnico em Desenvolvimento de Sistemas, CETI Prof. Raldir Cavalcante Bastos</dd>
                  </div>
                  <div>
                    <dt>Foco atual</dt>
                    <dd>Web, mobile, automação, IoT e UI/UX</dd>
                  </div>
                  <div>
                    <dt>Fora do código</dt>
                    <dd>Projetos com propósito social — como o Âncora</dd>
                  </div>
                </dl>
              </div>

              <div className="about-photo">
                <div className="blob">
                  <img src={tornPaper} alt="" aria-hidden="true" />
                </div>
                <div className="photo-marquee" role="img" aria-label="Viviane Lima">
                  <span className="photo-marquee-track" aria-hidden="true">
                    <span>Viviane Lima ✦ Viviane Lima ✦ </span>
                    <span>Viviane Lima ✦ Viviane Lima ✦ </span>
                  </span>
                </div>
                <img src={profilePhoto} alt="Viviane sorrindo com bandana roxa" />
                <span className="tag-photo">fora do código</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">02</span>
              <h2>Projetos</h2>
              <span className="sec-note">— ideias em construção</span>
            </div>

            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="p-num">{project.number}</span>
                <div className="p-body">
                  <h3>{project.title}</h3>
                  <span className="p-status">{project.status}</span>
                  <p className="p-desc">{project.description}</p>
                  <p className="p-detail">
                    <b>O que aprendi:</b> {project.detail}
                  </p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="p-year">{project.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">03</span>
              <h2>Habilidades</h2>
              <span className="sec-note">— arsenal</span>
            </div>

            <div className="skills-grid">
              {skills.map((skillGroup) => (
                <div key={skillGroup.title}>
                  <h3>{skillGroup.title}</h3>
                  <ul>
                    {skillGroup.title === 'Como trabalho' ? (
                      skillGroup.items.map((item) => <li key={item}>{item}</li>)
                    ) : skillGroup.title === 'Linguagens' ? (
                      skillGroup.items.map((item) => (
                        <li className="skill-item" key={item.name}>
                          {Array.isArray(item.logo) ? (
                            <span className="language-logos" aria-hidden="true">
                              {item.logo.map((logo) => <img className="language-logo" src={logo} alt="" key={logo} />)}
                            </span>
                          ) : (
                            <img className="language-logo" src={item.logo} alt="" aria-hidden="true" />
                          )}
                          <span className="skill-copy">
                            <b>{item.name}</b>
                            <span>{item.note}</span>
                          </span>
                        </li>
                      ))
                    ) : (
                      skillGroup.items.map((item) => (
                          <li className="skill-item" key={item.name}>
                            {Array.isArray(item.logo) ? (
                              <span className="language-logos" aria-hidden="true">
                                {item.logo.map((logo) => <img className="language-logo" src={logo} alt="" key={logo} />)}
                              </span>
                            ) : (
                              <img className="language-logo" src={item.logo} alt="" aria-hidden="true" />
                            )}
                            <span className="skill-copy">
                              <b>{item.name}</b>
                              <span>{item.note}</span>
                            </span>
                          </li>
                        ))
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="now">
              <span className="dot" />
              <p>
                <b>No momento:</b> aprofundando React e UI/UX no projeto Âncora, praticando Kotlin para Android e montando novos circuitos de automação com ESP32. Concluo o técnico em dezembro de 2026.
              </p>
            </div>
          </div>
        </section>

        <section id="trajetoria">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">04</span>
              <h2>Trajetória</h2>
              <span className="sec-note">— origem</span>
            </div>

            <div className="tl">
              <div className="tl-item">
                <time>2024 — 2026</time>
                <h3>Ensino Médio Técnico em Desenvolvimento de Sistemas</h3>
                <div className="org">CETI Professor Raldir Cavalcante Bastos · Teresina, PI</div>
                <p>Formação técnica com foco em programação, desenvolvimento de sistemas e tecnologias digitais. Conclusão prevista para dezembro de 2026.</p>
              </div>
              <div className="tl-item">
                <time>mar 2025 — dez 2025</time>
                <h3>Monitora Estudantil de Desenvolvimento de Sistemas</h3>
                <div className="org">Seduc-PI · Teresina, PI</div>
                <p>Atuei no apoio à aprendizagem de programação, auxiliando estudantes em atividades práticas, resolução de exercícios e reforço de conceitos em tecnologia.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="wrap">
            <div className="kicker">Contato</div>
            <h2>
              Vamos construir algo <span>juntos</span>?
            </h2>
            <p>Estou aberta a conexões, aprendizados e oportunidades na área de tecnologia (estágios, projetos colaborativos ou só uma boa conversa sobre código).</p>
            <div className="contact-links">
              <a className="btn solid" href="mailto:kristhyneviviane@gmail.com">
                Enviar e-mail
              </a>
              <a className="btn ghost" href="https://www.linkedin.com/in/viviane-lima-49445a373/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
            <div className="mail">
              <b>kristhyneviviane@gmail.com</b>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © {year} Viviane Lima
        </div>
      </footer>
    </>
  )
}
