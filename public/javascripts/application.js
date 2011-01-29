var com = 
{
  paulmwatson: 
  {
    cdn: function()
    {
      return $('meta[name="cdn"]').attr('content');
    },
    currentImageIndex: 0,
    init: function()
    {
      $.backstretch(com.paulmwatson.photos.images[com.paulmwatson.photos.currentImageIndex], {speed: 500, index: 0});
      $('<button>').attr('id', 'backstretch-next').text('Next').appendTo('body').click(com.paulmwatson.photos.backstretchNext);
      $('<button>').attr('id', 'backstretch-previous').text('Previous').appendTo('body').click(com.paulmwatson.photos.backstretchPrevious);
    }
  }
};