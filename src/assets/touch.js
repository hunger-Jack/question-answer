import $ from 'n-zepto'
// var $ul = $('#itemContainer .tests-content')
var romoveClass = function () {
  $('#itemContainer .tests-content').find('li').forEach(function (item) {
    $(item).find('.tests-sort').removeClass('selected')
  })
}
export default function touch(IsNext) {
  if (IsNext) {
    romoveClass()
  } else {
    $('#itemContainer .tests-content').on('touchstart', 'li', function () {
      romoveClass()
      $(this).find('.tests-sort').addClass('selected')
    })
  }
}
