const links = [
  { label: 'Love Calculator', url: 'proj01/index.html', }, // you can add other tags if you like
  { label: 'Temple Inn & Suites', url: 'proj02/index.html', },
  { label: 'Wedding Planners', url: 'proj03/index.html', },
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