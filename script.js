$.getJSON('https://api.ipdata.co?api-key=0f752a112d35ee5736b1d54e74786c59613c06e7177d7770ec067418', function(data) {
  $('#ip').html(JSON.stringify(data, null, 2));
  alert(hola);
});
