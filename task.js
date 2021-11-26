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
  }
}
