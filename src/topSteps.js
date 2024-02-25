/*export const topSteps = [
    {
      id: 1,
      color: '#d32f2f',//красный
      label: 'Старт',
      field: 'Посёлок Уренгой',
      description: ''
    },
    {
      id: 2,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 3,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 4,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 5,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 6,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 7,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 1',
      field: 'Безымянный ручей',
      description: 'Описание хода',
    },
    {
      id: 8,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 9,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 10,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Безымянный ручей',
      description: 'Описание хода'
    },
    {
      id: 11,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 12,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 13,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 14,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 15,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 16,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 2',
      field: 'Священная сопка',
      description: 'Описание хода',
    },
    {
      id: 17,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 18,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 20,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Священная сопк',
      description: 'Описание хода'
    },
    {
      id: 21,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 22,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 23,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Призрачные кочевники',
      description: 'Описание хода'
    },
    {
      id: 24,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 25,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Призрачные кочевники',
      description: 'Переход на нижний уровень'
    },
    {
      id: 26,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 27,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 28,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 1',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 29,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 30,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 31,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 32,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 33,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 5',
      field: 'Блуждающее озеро',
      description: 'Описание хода',
    },
    {
      id: 34,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Блуждающее озеро',
      description: ''
    },
    {
      id: 35,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Блуждающее озеро',
      description: ''
    },
    {
      id: 36,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 4',
      field: 'Лабаз топографов',
      description: 'Описание хода',
    },
    {
      id: 37,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 38,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 39,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Гиблое озеро',
      description: 'Описание хода',
    },
    {
      id: 40,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 41,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 42,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 43,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Чум шамана',
      description: 'Описание хода'
    },
    {
      id: 44,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 45,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 46,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Чум шамана',
      description: 'Описание хода'
    },
    {
      id: 47,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 48,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Стойбище',
      description: 'Описание хода'
    },
    {
      id: 49,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 50,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Стойбище',
      description: 'Описание хода',
    },
    {
      id: 51,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 52,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 53,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Священная роща',
      description: 'Описание хода'
    },
    {
      id: 54,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 55,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Лабаз топографов',
      description: 'Описание хода'
    },
    {
      id: 56,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 57,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 58,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 2',
      field: 'Лабаз топографов',
      description: 'Описание хода'
    },
    {
      id: 59,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 60,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 61,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Туманный переход',
      description: ''
    },
    {
      id: 62,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Туманный переход',
      description: 'Описание хода'
    },
    {
      id: 63,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Туманный переход',
      description: 'Описание хода'
    },
    {
      id: 64,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 65,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Ненецкое кладбище',
      description: 'Описание хода',
    },
    {
      id: 66,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 67,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 68,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 69,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 70,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 3',
      field: 'Священная роща',
      description: 'Описание хода',
    },
    {
      id: 71,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 72,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Область миражей',
      description: 'Описание хода'
    },
    {
      id: 73,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Избушки первых людей',
      description: 'Описание хода'
    },
    {
      id: 74,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 75,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Избушки первых людей',
      description: 'Описание хода',
    },
    {
      id: 76,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 77,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 78,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Область миражей',
      description: 'Описание хода'
    },
    {
      id: 79,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 80,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 81,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Ненецкое кладбище',
      description: 'Описание хода',
    },
    {
      id: 82,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 83,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Ненецкое кладбищ',
      description: 'Описание хода'
    },
    {
      id: 84,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 85,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Область миражей',
      description: ''
    },
    {
      id: 86,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 3',
      field: 'Избушки первых людей',
      description: 'Описание хода'
    },
    {
      id: 87,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 88,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Уренгойский вал',
      description: 'Описание хода',
    },
    {
      id: 89,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 90,
      color: '#d32f2f',//красный
      label: 'Финиш',
      field: 'Уренгойский вал',
      description: ''
    },
  ];*/

  export const topSteps = [
    {
      id: 1,
      color: '#d32f2f',//красный
      label: 'Старт',
      field: 'Посёлок Уренгой',
      description: ''
    },
    {
      id: 2,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 3,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 4,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 5,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Начало пути',
      description: ''
    },
    {
      id: 6,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 7,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 1',
      field: 'Безымянный ручей',
      description: 'Описание хода',
    },
    {
      id: 8,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 9,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 10,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Безымянный ручей',
      description: 'Описание хода'
    },
    {
      id: 11,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 12,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Безымянный ручей',
      description: ''
    },
    {
      id: 13,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 14,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 15,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 16,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 2',
      field: 'Священная сопка',
      description: 'Описание хода',
    },
    {
      id: 17,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 18,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная сопка',
      description: ''
    },
    {
      id: 20,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Священная сопк',
      description: 'Описание хода'
    },
    {
      id: 21,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 22,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 23,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Призрачные кочевники',
      description: 'Описание хода'
    },
    {
      id: 24,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 25,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Призрачные кочевники',
      description: 'Переход на нижний уровень'
    },
    {
      id: 26,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 27,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Призрачные кочевники',
      description: ''
    },
    {
      id: 28,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 1',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 29,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 30,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 31,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 32,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 33,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 5',
      field: 'Блуждающее озеро',
      description: 'Описание хода',
    },
    {
      id: 34,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Блуждающее озеро',
      description: ''
    },
    {
      id: 35,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Блуждающее озеро',
      description: ''
    },
    {
      id: 36,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 4',
      field: 'Лабаз топографов',
      description: 'Описание хода',
    },
    {
      id: 37,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 38,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 39,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Гиблое озеро',
      description: 'Описание хода',
    },
    {
      id: 40,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Гиблое озеро',
      description: ''
    },
    {
      id: 41,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Гиблое озеро',
      description: 'Описание хода'
    },
    {
      id: 42,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 43,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Чум шамана',
      description: 'Описание хода'
    },
    {
      id: 44,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 45,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Чум шамана',
      description: ''
    },
    {
      id: 46,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Чум шамана',
      description: 'Описание хода'
    },
    {
      id: 47,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 48,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Стойбище',
      description: 'Описание хода'
    },
    {
      id: 49,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 50,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Стойбище',
      description: 'Описание хода',
    },
    {
      id: 51,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Стойбище',
      description: ''
    },
    {
      id: 52,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 53,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Священная роща',
      description: 'Описание хода'
    },
    {
      id: 54,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 55,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Лабаз топографов',
      description: 'Описание хода'
    },
    {
      id: 56,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 57,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 58,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 2',
      field: 'Лабаз топографов',
      description: 'Описание хода'
    },
    {
      id: 59,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 60,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Лабаз топографов',
      description: ''
    },
    {
      id: 61,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Туманный переход',
      description: ''
    },
    {
      id: 62,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Туманный переход',
      description: 'Описание хода'
    },
    {
      id: 63,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Туманный переход',
      description: 'Описание хода'
    },
    {
      id: 64,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 65,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Ненецкое кладбище',
      description: 'Описание хода',
    },
    {
      id: 66,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 67,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 68,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 69,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 70,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос 3',
      field: 'Священная роща',
      description: 'Описание хода',
    },
    {
      id: 71,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Священная роща',
      description: ''
    },
    {
      id: 72,
      color: '#1976d2',//синий
      label: 'Ход-возможность',
      field: 'Область миражей',
      description: 'Описание хода'
    },
    {
      id: 73,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Избушки первых людей',
      description: 'Описание хода'
    },
    {
      id: 74,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 75,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Избушки первых людей',
      description: 'Описание хода',
    },
    {
      id: 76,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 77,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 78,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Область миражей',
      description: 'Описание хода'
    },
    {
      id: 79,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 80,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 81,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Ненецкое кладбище',
      description: 'Описание хода',
    },
    {
      id: 82,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Ненецкое кладбище',
      description: ''
    },
    {
      id: 83,
      color: '#616161',//серый
      label: 'Ход-приключение',
      field: 'Ненецкое кладбищ',
      description: 'Описание хода'
    },
    {
      id: 84,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 85,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Область миражей',
      description: ''
    },
    {
      id: 86,
      color: '#fbc02d',//жёлтый
      label: 'Ход-переход 3',
      field: 'Избушки первых людей',
      description: 'Описание хода'
    },
    {
      id: 87,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Избушки первых людей',
      description: ''
    },
    {
      id: 88,
      color: '#388e3c',//зеленый
      label: 'Ход-вопрос',
      field: 'Уренгойский вал',
      description: 'Описание хода',
    },
    {
      id: 89,
      color: '#d32f2f',//красный
      label: 'Ход',
      field: 'Уренгойский вал',
      description: ''
    },
    {
      id: 90,
      color: '#d32f2f',//красный
      label: 'Финиш',
      field: 'Уренгойский вал',
      description: ''
    },
  ];