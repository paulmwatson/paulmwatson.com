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
      $("#showcase").awShowcase({
        content_width:      700,
        fit_to_parent:      true,
        auto:          false,
        interval:        1000,
        continuous:        false,
        loading:        true,
        tooltip_width:      200,
        tooltip_icon_width:    32,
        tooltip_icon_height:  32,
        tooltip_offsetx:    18,
        tooltip_offsety:    0,
        arrows:          true,
        buttons:        true,
        btn_numbers:      false,
        keybord_keys:      true,
        mousetrace:        false, /* Trace x and y coordinates for the mouse */
        pauseonover:      true,
        stoponclick:      true,
        transition:        'hslide', /* hslide/vslide/fade */
        transition_speed:    500,
        transition_delay:    300,
        show_caption:      'onhover', /* onload/onhover/show */
        thumbnails:        false,
        thumbnails_position:  'outside-last', /* outside-last/outside-first/inside-last/inside-first */
        thumbnails_direction:  'horizontal', /* vertical/horizontal */
        thumbnails_slidex:    0, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
        dynamic_height:      true, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
        speed_change:      false, /* Set to true to prevent users from swithing more then one slide at once. */
        viewline:        false /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
      });
      return true;
    }
  }
};

$(document).ready(com.paulmwatson.init);