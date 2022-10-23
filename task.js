function task()
{
  var first = Math.ceil(Math.random()*5);
  console.log("Обязательные задачи:" + first);
  var first_arr = ["1. Обычная задача", "2. English (Duolingo, Busuu), Chech", "3. Open Source games, OpenPanzer2", "4. Постирать носки, трусы, футболку, побриться", "5. Random task, RR3 50000 points"];
  console.log(first_arr[first-1]);
  
  var second = Math.ceil(Math.random()*12);
  console.log("Обычные задачи:" + second);
  var second_arr = ["1. Программирование", "2. Музыка", "3. Кино", "4. Игры", "5. Майнкрафт", "6. Отдых", "7. Постирать, зашить, почистить, постричь ногти", 
                    "8. Телеграм, Новости", "9. Стирка трусов, носков", "10. Спорт", "11. Английский язык", "12. Доця, Универ"];
  console.log(second_arr[second-1]);
  if(second == 1)
  {
    var third = Math.ceil(Math.random()*8);
    console.log("Программирование:" + third);
    var third_arr = ["1. Ruby on Rails", "2. Ruby", "3. Clang", "4. Osdev, Babystep 1", "5. Список с tasks", "6. Электродинамика", "7. Logisim", 
                    "8. new", "9. ", "10. ", "11. ", "12. "];
    console.log(third_arr[third-1]);
  }
  else if(second == 2)
  {
    var third = Math.ceil(Math.random()*6);
    console.log("Музыка:" + third);
    var third_arr = ["1. Цой", "2. Алиса", "3. Shakira", "4. Farmer", "5. Наутилус", "6. new", "7. ", 
                    "8. ", "9. ", "10. ", "11. ", "12. "];
    console.log(third_arr[third-1]);
  }
  else if(second == 3)
  {
    var third = Math.ceil(Math.random()*5);
    console.log("Кино:" + third);
    var third_arr = ["1. Советское кино", "2. Иностранные фильмы", "3. Иностранные сериалы", "4. Уникальные фильмы", "5. new", "6. ", "7. ", 
                    "8. ", "9. ", "10. ", "11. ", "12. "];
    console.log(third_arr[third-1]);
  }
  else if(second == 4)
  {
    var third = Math.ceil(Math.random()*12);
    console.log("Игры:" + third);
    var third_arr = ["1. HOI 3", "2. HOI 2", "3. From Warsaw", "4. WOT", "5. Strategies", "6. WW2 games", "7. WOW", 
                    "8. HOI3", "9. RR3", "10. racing games", "11. best game of year 2011,2001,1991,1981", "12. poker"];
    console.log(third_arr[third-1]);
  }
}
