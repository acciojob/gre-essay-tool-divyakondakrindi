//your code here
setInterval(() => {
  let a = fun(document.getElementsByTagName("input")[0]);
  document.getElementsByTagName("div")[0].innerHTML = a;
}, 10);

fun = (e) => e.value.length;