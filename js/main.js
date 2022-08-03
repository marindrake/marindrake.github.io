const links = [
  { label: 'Love Calculator', url: 'proj01/index.html', }, // you can add other tags if you like
  { label: 'Temple Inn & Suites', url: 'proj02/index.html', },
  { label: 'Wedding Planners', url: 'proj03/index.html', },
  { label: 'Salmon River Adventures', url: 'proj04/index.html', },
  { label: 'The Blue Weather', url: 'proj05/index.html', },
  { label: 'CSS Zen Garden', url: 'proj06/index.html', },
  { label: 'Comic Book', url: 'proj07/comic.pdf', },
  { label: 'Composite Photography', url: 'proj07/composite.pdf', },
  { label: 'Magazine Spread', url: 'proj07/magazine.pdf', },
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