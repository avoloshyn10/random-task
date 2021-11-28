function task()
{
  var first = Math.ceil(Math.random()*5);
  console.log("Обязательные задачи:" + first);
  switch(first)
  {
    case 1:
      console.log("1. Обычная задача");
      break;
    case 2:
      console.log("2. English");
      break;
    case 3:
      console.log("3. OpenPanzer2");
      break;
    case 4:
      console.log("4. Постирать носки, трусы, футболку, побриться");
      break;
    case 5:
      console.log("5. Random task, RR3 25000 points");
      break;
  }
  var second = Math.ceil(Math.random()*12);
  console.log("Обычные задачи:" + second);
  switch(second)
  {
    case 1:
      console.log("1. Программирование");
      break;
    case 2:
      console.log("2. Музыка");
      break;
    case 3:
      console.log("3. Кино");
      break;
    case 4:
      console.log("4. Игры");
      break;
    case 5:
      console.log("5. Танки и карты WOT");
      break;
    case 6:
      console.log("6. Отдых");
      break;
    case 7:
      console.log("7. Постирать, зашить, почистить");
      break;
    case 8:
      console.log("8. Телеграм, Новости");
      break;
    case 9:
      console.log("9. ");
      break;
    case 10:
      console.log("10. ");
      break;
    case 11:
      console.log("11. ");
      break;
    case 12:
      console.log("12. ");
      break;
  }
}
