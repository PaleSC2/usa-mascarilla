$(document).ready(function () {
  console.log('test');
  $("#nanogallery2").nanogallery2( {
    "thumbnailWidth": "auto",
    "thumbnailBorderVertical": 1,
    "thumbnailBorderHorizontal": 1,
    "thumbnailDisplayTransitionDuration": 100,
    "thumbnailDisplayInterval": 10,
    "thumbnailAlignment": "grid",
    "icons":    {
      "galleryMoreButton": "cargar más"
    },
      items: [
          { src: 'https://placekitten.com/300/200', srct: 'https://placekitten.com/300/200' },
          { src: 'https://placekitten.com/300/200', srct: 'https://placekitten.com/300/200' },
          { src: 'https://placekitten.com/500/300', srct: 'https://placekitten.com/500/300' },
          { src: 'https://placekitten.com/100/200', srct: 'https://placekitten.com/100/200' }
        ]
    });
    var baseURL = 'https://nanogallery2.nanostudio.org/samples/';

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    jQuery('#btn_add').on('click', function() {
      var ngy2data = $("#nanogallery2").nanogallery2('data');
      var instance = $("#nanogallery2").nanogallery2('instance');
      var newItems = [];
      
      for (var i = 0; i < 5; i++) {
        var ID = ngy2data.items.length + newItems.length + 1; 
        var albumID = '0';
        var newItem = NGY2Item.New(instance, '', '', ID, albumID, 'image', '' );
        var height = getRandomArbitrary(100, 300);
        var width = getRandomArbitrary(100, 300)

        console.log(width, height)
        // define thumbnail -> image displayed in the gallery
        newItem.thumbSet( `https://placekitten.com/${width}/${height}`, width, height); // w,h
      
        // define URL of the media to display in lightbox
        newItem.setMediaURL( `https://placekitten.com/${width}/${height}`, 'img');

        newItems.push(newItem);
      }
      
      // currently displayed album
      if( ngy2data.items[ngy2data.gallery.albumIdx].GetID() == 0 ) {
    
        // add new item to current Gallery Object Model (GOM) 
        newItems.forEach(newItem => newItem.addToGOM());
      
        // refresh the display (-> only once if you add multiple items)
        $("#nanogallery2").nanogallery2('resize');
      }
    });

});