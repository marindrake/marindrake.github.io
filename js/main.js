const links = [
  { label: 'Love Calculator', url: 'proj01/index.html', }, // you can add other tags if you like
  { label: 'Temple Inn & Suites', url: 'proj02/index.html', },
  { label: 'Wedding Planners', url: 'proj03/index.html', },
  { label: 'Salmon River Adventures', url: 'proj04/index.html', },
  { label: 'The Blue Weather', url: 'proj05/index.html', },
  { label: 'CSS Zen Garden', url: 'proj06/index.html', },
  { label: 'Comic Book (Adobe Illustrator)', url: 'proj07/comic.pdf', },
  { label: 'Composite Photography (Adobe Photoshop)', url: 'proj07/composite.pdf', },
  { label: 'Magazine Spread (Adobe InDesign)', url: 'proj07/magazine.pdf', },
  { label: 'Résumé', url: 'proj07/resume.pdf', },
  { label: 'Unofficial Transcript - BYUI', url: 'proj07/transcript.pdf', },
  { label: 'Would you go with me?', url: 'https://youtu.be/7AcfkYTqt9A', },
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