const links = [
  { label: 'Week 1 Notes', url: 'week1/index.html', }, // you can add other tags if you like
  { label: 'Week 2 Notes', url: 'week2/index.html', },
  { label: 'Week 3 Notes', url: 'week3/index.html', },
  { label: 'Week 4 Notes', url: 'week4/index.html', },
  { label: 'Week 5 Notes', url: 'week5/index.html', },
  ];

  var list = document.getElementsByTagName('ol');

  links.forEach(function(link){
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.text = link.label;
    a.href = link.url;
    list[0].appendChild(li);
    li.appendChild(a);
  });

  console.log(list);