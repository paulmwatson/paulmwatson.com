com.paulmwatson.photos =
{
  currentImageIndex: 0,
  images:
  [
    com.paulmwatson.cdn() + '/images/photos/deadvlei.jpg',
    com.paulmwatson.cdn() + '/images/photos/namibia.jpg'
  ],
  backstretchNext: function()
  {
    if ((com.paulmwatson.photos.currentImageIndex + 1) >= com.paulmwatson.photos.images.length)
    {
      com.paulmwatson.photos.currentImageIndex = 0;
    }
    else
    {
      com.paulmwatson.photos.currentImageIndex = com.paulmwatson.photos.currentImageIndex + 1;
    }

    $.backstretch(com.paulmwatson.photos.images[com.paulmwatson.photos.currentImageIndex], {speed: 500, index: 0});
  },
  backstretchPrevious: function()
  {
    if ((com.paulmwatson.photos.currentImageIndex - 1) < 0)
    {
      com.paulmwatson.photos.currentImageIndex = com.paulmwatson.photos.images.length - 1;
    }
    else
    {
      com.paulmwatson.photos.currentImageIndex = com.paulmwatson.photos.currentImageIndex - 1;
    }

    $.backstretch(com.paulmwatson.photos.images[com.paulmwatson.photos.currentImageIndex], {speed: 500, index: 0});
  }
};