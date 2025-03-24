// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfolio",
          title: "Portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/index.html";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-geopolítica-digital-o-papel-das-redes-sociais-na-eleiçãao-2024-de-prefeitos-em-minas-gerais",
      
        title: 'Geopolítica Digital: O papel das Redes Sociais na Eleiçãao 2024 de Prefeitos em... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "​O artigo analisa como o investimento em publicidade digital influenciou os resultados das eleições municipais de 2024 em Minas Gerais. Utilizando o Índice de Investimento Relativo em Redes Sociais, os autores investigam a correlação entre os gastos em campanhas digitais e o desempenho eleitoral dos partidos, considerando fatores socioeconômicos e políticos dos municípios.",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@bezerraescossia/geopolítica-digital-o-papel-das-redes-sociais-na-eleição-2024-de-prefeitos-em-minas-gerais-9396fb6af958", "_blank");
        
      },
    },{id: "post-boosting-loan-conversions-a-predictive-modeling-approach-in-fintech-marketing",
      
        title: "Boosting Loan Conversions: A Predictive Modeling Approach in Fintech Marketing",
      
      description: "I analyze customer behavior and predict personal loan acceptance using machine learning models. By leveraging R for Exploratory Data Analysis (EDA) and Python (Scikit-learn, TensorFlow, Keras) for predictive modeling, I explore different approaches to enhance targeting and conversion rates.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/universal-bank/";
        
      },
    },{id: "post-the-power-of-spatial-statistics-in-business-missed-opportunities-and-strategic-potential",
      
        title: 'The Power of Spatial Statistics in Business: Missed Opportunities and Strategic Potential <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "This article was developed as part of a course at Fundação Getúlio Vargas (FGV), under the guidance of Prof. Dr. Eduardo de Rezende Francisco, and aims to invite the industry to reflect on the impact of spatial statistical analysis in business. From identifying customer concentration areas to optimizing resource allocation, the potential is immense!",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@bezerraescossia/the-power-of-spatial-statistics-in-business-missed-opportunities-and-strategic-potential-db0246060847", "_blank");
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%7A%65%72%72%61%65%73%63%6F%73%73%69%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bezerraescossia# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bezerraescossia", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@bezerraescossia", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
