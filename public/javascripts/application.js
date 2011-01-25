var com = 
{
  paulmwatson: 
  {
    cdn: function()
    {
      return $('meta[name="cdn"]').attr('content');
    },
    init: function()
    {
      $.backstretch(com.paulmwatson.cdn() + '/images/photos/me/namibia.jpg', {speed: 500});
    }
  }
};

$(com.paulmwatson.init());