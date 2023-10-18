const links = [
  { label: 'Résumé', url: 'proj07/resume.pdf', },
  { label: 'Unofficial Transcript - BYUI', url: 'proj07/transcript.pdf', },
  { label: 'Love Calculator', url: 'proj01/index.html', },
  { label: 'Temple Inn & Suites', url: 'proj02/index.html', },
  { label: 'Wedding Planners', url: 'proj03/index.html', },
  { label: 'Salmon River Adventures', url: 'proj04/index.html', },
  { label: 'The Blue Weather', url: 'proj05/index.html', },
  { label: 'CSS Zen Garden', url: 'proj06/index.html', },
  { label: 'Magazine Spread (Adobe InDesign)', url: 'proj07/magazine.pdf', },
  { label: 'Gift Booklet Project (Adobe InDesign)', url: 'https://www.behance.net/gallery/167764491/Gift-Booklet-Project', },
  { label: 'Comic Book (Adobe Illustrator)', url: 'proj07/comic.pdf', },
  { label: 'Posters Project (Adobe Illustrator)', url: 'proj07/posters.pdf', },
  { label: 'Glyphs Project (Adobe Illustrator)', url: 'https://www.behance.net/gallery/161830989/Glyphs-Project', },
  { label: 'Business Card (Adobe Illustrator)', url: 'https://www.behance.net/gallery/163524745/Business-Card', },
  { label: 'Type Poster (Adobe Illustrator)', url: 'https://www.behance.net/gallery/164820655/Type-Poster', },
  { label: 'PSA Campaign Posters (Adobe Illustrator)', url: 'https://www.behance.net/gallery/167016749/PSA-Campaign-Posters', },
  { label: 'Composite Photography (Adobe Photoshop)', url: 'proj07/composite.pdf', },
  { label: 'Conceptual Book Cover (Adobe Photoshop)', url: 'https://www.behance.net/gallery/164610481/Conceptual-Book-Cover', },
  { label: 'Seven Creative Strategies (Adobe Photoshop)', url: 'https://www.behance.net/gallery/161888147/Project-01Creative-Strategies', },
  { label: 'Would you go with me? (Adobe Premiere Pro)', url: 'https://youtu.be/7AcfkYTqt9A', },
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