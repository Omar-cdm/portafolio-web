export function renderHero() {
    const sectionHero = document.createElement('section')
    sectionHero.className = 'hero'
    sectionHero.innerHTML = `
      <div class="hero__container">
        <img class="hero__image" src="./assets/image-profile.jpg">
        <div class="hero__content">
          <p class="hero__text">Hola, soy</p>
          <h1 class="hero__title">Omar Rodriguez</h1>
          <p class="hero__description">Desarrollador web en formación que ama la tecnologia y el software</p>            
          <a href="./" class="hero__button--click">Ver mis proyectos</a>
        </div>
      </div>

      <div class="about__container">
        <h1 class="about__title">Sobre mi</h1>

        <p class="about__intro">
          Mi nombre es Omar Junior Rodriguez Perez, tengo 23 y soy de Barranquilla-Colombia. Actualmente estoy formandome como <strong>Desarrollador web</strong> de forma autodidacta.
        </p>

        <p class="about__intro">
          Soy un joven apasionado por la tecnologia, me gusta aprender temas de desarrollo web y bunas practicas. Ademas del <strong>Desarrollo Web</strong> tambien me gusta aprender de <strong>Linux</strong> en tiempos libres, me considero una persona que ama a Linux y el software Open Source.
        </p>

        <blockquote class="quote">
          <h2 class="quote__subtitle">"Nunca pares de aprender"</h2>
          <p class="quote__text">
            Esta frase muy sonada en la comunidad de Platzi, no solo me ha motivado tambien me ha enseñado a ser constante con el aprendizaje, creando en mi el habito y la necesidad de siempre querer aprender temas nuevos acerca del desarrollo web.
        </p>
          <cite class="quote__author">— Platzi</cite>
        </blockquote>

        <div class="values">
          <h2 class="values__title">Mis valores</h2>
          <ul class="values__list">
            <li class="values__item">
              <svg class="values__icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/></svg>
              <strong>Dedicación</strong>
              <span>Comprometido con mi aprendizaje diario</span>
            </li>
            <li class="values__item">
              <svg class="values__icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/></svg>
              <strong>Curiosidad</strong>
              <span>Siempre explorando nuevas tecnologías</span>
            </li>
            <li class="values__item">
              <svg class="values__icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/></svg>
              <strong>Comunidad</strong>
              <span>Aprendiendo y compartiendo con otros</span>
            </li>
            <li class="values__item">
              <svg class="values__icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/></svg>
              <strong>Creatividad</strong>
              <span>Buscando soluciones innovadoras</span>
            </li>
          </ul>
        </div>

        <div class="skills">
          <h2 class="skills__subtitle">Tecnologias que estoy aprendiendo</h2>

          <div class="skills__list">
            <div class="skill">
              <h4 class="skill__name">HTML5 & Semántica</h4>
              <div class="skill__bar">
                <div class="skill__progress skill__progress--html"></div>
              </div>
              <p><span class="skill__percentage skill__html">80</span>%</p>
            </div>

            <div class="skill">
              <h4 class="skill__name">CSS3 & Diseño</h4>
              <div class="skill__bar">
                <div class="skill__progress skill__progress--css"></div>
              </div>
              <p><span class="skill__percentage skill__css">60</span>%</p>
            </div>

            <div class="skill">
              <h4 class="skill__name">JavaScript</h4>
              <div class="skill__bar">
                <div class="skill__progress skill__progress--js"></div>
              </div>
              <p><span class="skill__percentage skill__js">50</span>%</p>
            </div>

            <div class="skill">
              <h4 class="skill__name">Python</h4>
              <div class="skill__bar">
                <div class="skill__progress skill__progress--python"></div>
              </div>
              <p><span class="skill__percentage skill__python">30</span>%</p>
            </div>
          </div>   
        </div>
      </div>
    `
    return sectionHero;
}

export function renderProjects() {
    const sectionProjects = document.createElement('section')
    sectionProjects.className = 'projects'
    sectionProjects.innerHTML = `
      <div class="projects__container">
        <h1 class="projects__title">Mis Proyectos de Práctica</h1>
        <p class="projects__description">
          Cada proyecto representa el progreso de mi aprendizaje, implementando conceptos aprendidos y buenas practicas aprendidas, ya que siempre busco hacer codigo de calidad y facil de mantener.
        </p>

        <div class="projects__grid">
          <article class="project">
            <h2 class="project__title">Super Pokemon</h2>
            <p class="project__description">
              Mi primer proyecto desarrollado localmente usando HTML, CSS y JavaScript. Un juego sencillo basado en el juego Super Mokepon del curso de programación basica de Platzi. Con una logica mejorada y ataques dinamicos en el campo de batalla, brindando una experiencia entretenida y divertida.
            </p>

            <img class="project__image" src="./assets/pokrmon-2.webp">

            <div class="project__technologies">
              <span class="tag">HTML5</span>
              <span class="tag">CSS3</span>
              <span class="tag">JavaScript</span>
            </div>
          </article>

          <article class="project">
            <h2 class="project__title">Portafolio Personal</h2>
            <p class="project__description">
              Este mismo portfolio en donde use HTML, CSS y un poco de JavaScript, en el cual comparto sobre mi, mis conocimientos, mis proyectos y mi contacto para conectar con la comunidad y el ambiente del desarrollo web.
            </p>

            <img class="project__image" src="./assets/portafolio.webp">

            <div class="project__technologies">
              <span class="tag">HTML5</span>
              <span class="tag">CSS3</span>
              <span class="tag">BEM</span>
              <span class="tag">JavaScript</span>
            </div>
          </article>

          <article class="project">
            <h2 class="project__title">Free Math</h2>
            <p class="project__description">
              Una apk hecha con MIT App Inventor, con bloques de codigo una forma de hacer apk para Android e IOS sin escribir codigo solo pero aplicando la logica necesaria para el buen funcionamiento de la apk. Free Math es una apk pensada facilitar el calculo de angulos y longitud de lados de un triangulo implementando formulas trigonometricas.
            </p>

            <img class="project__image" src="./assets/pokemon3.webp">

            <div class="project__technologies">
              <span class="tag">MIT App Inventor</span>
            </div>
          </article>
        </div>
      </div>
    `
    return sectionProjects;
}

export function renderContact() {
    const sectionContact = document.createElement('section')
    sectionContact.className = 'contact'
    sectionContact.innerHTML = `
      <div class="contact__container">
        <h1 class="contact__title">¿Te gustaría conectar?</h1>
        <p class="contact__description">
          Siempre estoy buscando aprender de otros desarrolladores,
          compartir experiencias y tal vez colaborar en proyectos
          interesantes.
        </p>

        <form class="contact__form" action="https://formspree.io/f/xdkqzykq" method="POST">
          <label class="form__text-name">Nombre</label>
          <input class="form__input-text" type="text" name="nombre" required></input>
          <label class="form__text-email">Email</label>
          <input class="form__input-email" type="email" name="email" required></input>
          <label class="form__text-message">Mensaje</label>
          <textarea class="form__input-message" name="mensaje" rows="5" required></textarea>
          <div class="form__button-container">
            <button class="form__button" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    `
    return sectionContact;
}