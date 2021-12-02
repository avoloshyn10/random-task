function task()
{
  var first = Math.ceil(Math.random()*5);
  console.log("Обязательные задачи:" + first);
  var first_arr = ["1. Обычная задача", "2. English", "3. OpenPanzer2", "4. Постирать носки, трусы, футболку, побриться", "5. Random task, RR3 50000 points"];
  console.log(first_arr[first-1]);
  
  var second = Math.ceil(Math.random()*12);
  console.log("Обычные задачи:" + second);
  var second_arr = ["1. Программирование", "2. Музыка", "3. Кино", "4. Игры", "5. Танки и карты WOT", "6. Отдых", "7. Постирать, зашить, почистить, постричь ногти", 
                    "8. Телеграм, Новости", "9. Стирка трусов, носков", "10. Спорт", "11. Английский язык", "12. Доця, Универ"];
  console.log(second_arr[second-1]);
  if(second == 1)
  {
    var third = Math.ceil(Math.random()*8);
    console.log("Программирование:" + third);
  }
}
