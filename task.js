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
}
