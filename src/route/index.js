// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Koszykarska 6, Poland',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume|summary' },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies,with i years of experience in development. Whenever i start to work on a new progect I learn the domain and try to understand the idea of the progect. Good team player, every colleaque is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet progect for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win/draw/second win,totals etc.`,
      },
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume|skills' },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          istop: true,
        },
        {
          name: 'VS code',
          point: 8,
        },
        {
          name: 'terminal & git',
          point: 9,
        },
        {
          name: 'Hendlebars & NPM',
          point: 10,
          istop: true,
        },
        {
          name: 'React.JS',
          point: 0,
        },
        {
          name: 'NPM',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'music',
          isMain: true,
        },
        {
          name: 'sport',
          isMain: true,
        },
        {
          name: 'football',
          isMain: false,
        },
      ],
    },
    summary: {
      title: 'Summary',
      text: `Open-minded for new technologies,with i years of experience in development. Whenever i start to work on a new progect I learn the domain and try to understand the idea of the progect. Good team player, every colleaque is a friend to me.`,
    },
    experience: {
      title: 'Other experience',
      text: `Pet progect for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win/draw/second win,totals etc.`,
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume|education' },
    header,
    main: {
      education: [
        {
          name: 'Машинобудiвничий Лiцей',
          isEnd: true,
        },
        {
          name: 'ITBrains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'tester',
          id: 45787,
        },
        {
          name: 'frontend',
          id: 4478,
        },
        {
          name: 'backend',
          id: 45378,
        },
      ],
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: { title: 'Resume|work' },
    header,
    main: {
      works: [
        {
          position: 'Junior Fulsteck Developer',
          company: {
            name: 'It Brains',
            url: 'https://web.skillzrun.com/learn/115266',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://web.resume.com/learn',
              about:
                'online consultation of a therapist in the application',
              stacks: [
                {
                  name: 'React.JS',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'I cant do anything yet=)',
                },
                {
                  name: 'I cant do anything yet=)',
                },
              ],
              stackAmount: 6,
              awardAmount: 8,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
