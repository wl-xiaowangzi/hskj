$(function () {
  $('a[href="/coopCase/"]').addClass('selected')

  function hiddenAllTitle () {
    $('.banner-title').hide()
    $('.banner-title-small').hide()
  }

  hiddenAllTitle()

  $('#banner-title-1').show().css('visibility', 'visible')
  $('#banner-title-small-1').show().css('visibility', 'visible')
  $('#banner-title-small-2').show().css('visibility', 'visible')

  var sr = ScrollReveal()
  sr.reveal('.all')

  $('#li-finance').click(
    function () {
      hiddenAllTitle()
      $('.banner').css('backgroundImage', 'url("/static/web/image/智慧金融-背景.jpg")')
      $('.banner-image').css('backgroundImage', 'url("/static/web/image/智慧金融.png")')
      $('#banner-title-1').show().css('visibility', 'visible')
      $('#banner-title-small-1').show().css('visibility', 'visible')
      $('#banner-title-small-2').show().css('visibility', 'visible')
      sr.reveal('.all')
    }
  )

  $('#li-commerce').click(
    function () {
      hiddenAllTitle()
      $('.banner').css('backgroundImage', 'url("/static/web/image/智慧金融-背景.jpg")')
      $('.banner-image').css('backgroundImage', 'url("/static/web/image/智慧商业.png")')
      $('#banner-title-2').show().css('visibility', 'visible')
      $('#banner-title-small-3').show().css('visibility', 'visible')
      $('#banner-title-small-4').show().css('visibility', 'visible')
      sr.reveal('.all')
    }
  )

  $('#li-safety').click(
    function () {
      hiddenAllTitle()
      $('.banner').css('backgroundImage', 'url("/static/web/image/智慧金融-背景.jpg")')
      $('.banner-image').css('backgroundImage', 'url("/static/web/image/智慧安防.png")')
      $('#banner-title-3').show().css('visibility', 'visible')
      $('#banner-title-small-5').show().css('visibility', 'visible')
      $('#banner-title-small-6').show().css('visibility', 'visible')
      sr.reveal('.all')
    }
  )

  $('#li-internet').click(
    function () {
      hiddenAllTitle()
      $('.banner').css('backgroundImage', 'url("/static/web/image/智慧金融-背景.jpg")')
      $('.banner-image').css('backgroundImage', 'url("/static/web/image/互联网+.png")')
      $('#banner-title-4').show().css('visibility', 'visible')
      $('#banner-title-small-7').show().css('visibility', 'visible')
      $('#banner-title-small-8').show().css('visibility', 'visible')
      $('#banner-title-small-9').show().css('visibility', 'visible')
      $('#banner-title-small-10').show().css('visibility', 'visible')
      sr.reveal('.all')
    }
  )

  $('#li-others').click(
    function () {
      hiddenAllTitle()
      $('.banner').css('backgroundImage', 'url("/static/web/image/智慧金融-背景.jpg")')
      $('.banner-image').css('backgroundImage', 'url("/static/web/image/其他.jpg")')
      $('#banner-title-5').show().css('visibility', 'visible')
      $('#banner-title-small-11').show().css('visibility', 'visible')
      $('#banner-title-small-12').show().css('visibility', 'visible')
      sr.reveal('.all')
    }
  )
})
