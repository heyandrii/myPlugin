(function ($) {
    var defaults = { color: 'green' };
    var close_icon = $('<span class="db__close"></span>').html('&times;');
    var overlay = $('<div class="db--overlay"></div>');
    var wrapper = $('<div class="db--wrapper"></div>');
    var open = $('.db--open');

    var methods = {
        init: function (params) {
            var options = $.extend({}, defaults, params);

            $('body').prepend(overlay);

            this
                .wrap(wrapper)
                .prepend(close_icon);

            $('.db--open').on('click', function () {
                close_icon.addClass('fast');
                overlay.addClass('db--overlay__shown');
            });

            close_icon.on('click', function () {
                overlay.removeClass('db--overlay__shown');
                $(this)
                    .parents('.db--wrapper')
                    .fadeOut('fast');
            });

            return this;
        }
    };

    $.fn.divisionBellPop = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод "' + method + '" не найден в плагине jQuery.mySimplePlugin');
        }
    };

})(jQuery);