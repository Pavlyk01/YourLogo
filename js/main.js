"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

$('.tabs-wrapper').each(function () {
  var ths = $(this);
  ths.find('.tab-item').not(':first').hide();
  ths.find('.tab').click(function () {
    ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    ths.find('.tab-item').hide().eq($(this).index()).fadeIn(700, "linear");
  }).eq(0).addClass('active');
});
//# sourceMappingURL=main.js.map
