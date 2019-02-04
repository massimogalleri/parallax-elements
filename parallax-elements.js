{

  function scrollingEvents() {

    let _element = document.querySelectorAll('[data-parallax]');

    _element.forEach(function (item) {
      let _elementH = item.clientHeight;
      let _elementT = item.getBoundingClientRect().top;
      let _elementP = item.dataset.parallax;
      let _elementY = ((window.outerHeight - _elementH) / 2, _elementT - window.pageYOffset);
      TweenLite.to(item, 1, {
        y: _elementY * - _elementP / 5
      })
    })

  }

  window.addEventListener('scroll', scrollingEvents);

}