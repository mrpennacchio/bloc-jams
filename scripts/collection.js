 var buildCollectionItemTemplate = function() {
     var template=
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="/album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="/album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;

return $(template);
};

$(window).load(function() {
     // select the album-covers class and assign it to the variable collectionContainer
     var $collectionContainer = $('.album-covers');
     // assign an empty string to collectionContainer innerHTML property to clear its content
     $collectionContainer.empty();
 
     // for loop creates 12 templates of colletionItemTemplate and assigns it to the innerHTML of collectionContainer
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail);
     }
 });