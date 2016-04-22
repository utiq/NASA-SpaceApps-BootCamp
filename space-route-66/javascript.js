$(document).ready(function() {
  var $city = $('#city');

  // Create array with combinations
  var table = $("#assets");
  var groupName;
  var assets = []
  var groupCount = 23;
  var elementsPerGroupCount = 6;
  for (var i = 1; i <= groupCount; i++) {
    for (var j = 1; j <= elementsPerGroupCount; j++) {
      groupName = "0" + i;
      if (i >= 10) {
        groupName = i;
      }
      assets.push( groupName + "-" + "0" + j);
    }
  }

  // Generate table with 3 columns
  var newTr = "";
  for (var i = 0; i < assets.length; i++) {

    if(i % 3 == 0)
      newTr += (i > 0) ? "</tr><tr>" : "<tr>"
   newTr += "<td>" + "<img class=\"building\" id=\"" + assets[i] + "\" src=\"images/buildings/" + assets[i] + ".png\" alt=\"\" />" + "</td>";

  }
  newTr+="</tr>";
  table.html(newTr)

  // Everytime you double click on an asset, it's included in the canvas
  $(".building").on('dblclick', function() {
    var $this = $(this);
    var objectName = Math.random().toString(36).substring(7);

    $city.drawImage({
      layer: true,
      draggable: true,
      bringToFront: true,
      name: objectName,
      source: 'images/buildings/' + $this.attr('id') + '.png',
      x: 150, y: 100,
      fromCenter: false,
      width: $this.context.naturalWidth,
      height: $this.context.naturalHeight
    });
  });

  $("#save-image-button").on('click', function() {
    // here is the most important part because if you dont replace you will get a DOM 18 exception.
    var image = $city[0].toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image; // it will save locally
  });
});
