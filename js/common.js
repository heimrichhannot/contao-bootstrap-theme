let u = require('umbrellajs');

(function($)
{
    window.ContaoBootstrapCommon = {
        onReady: function()
        {
            this.initColFull();
        },
        onResize: function()
        {
            this.initColFull();
        },
        initColFull: function()
        {
            let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                containerWidth = u('.container:first').offsetWidth;

            u('.col-full').each(function(node, i)
            {

		u(node).style.marginLeft = (width - containerWidth) / -2;
		u(node).style.marginRight = (width - containerWidth) / -2;
            });
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        window.ContaoBootstrapCommon.onReady();
    });

    window.addEventListener('resize', function()
    {
        window.ContaoBootstrapCommon.onResize();
    }, false);

})(u);
