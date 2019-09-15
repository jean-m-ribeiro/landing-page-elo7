var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.mocky.io/v2/5d6fb6b1310000f89166087b");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
