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
      return true;
    }
  }
};

$(document).ready(com.paulmwatson.init);
