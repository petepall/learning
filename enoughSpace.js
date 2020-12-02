/*
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus.
wait is the number of people waiting to get on to the bus.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/


function enough(cap, on, wait) {
  if ((cap - on) >= wait) return 0;
  return wait - (cap - on);
}

console.log(enough(10, 5, 5)); // should return 0
console.log(enough(100, 60, 50)); // should return 10
console.log(enough(20, 5, 5)); // should return 0