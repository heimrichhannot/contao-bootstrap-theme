class ContaoBootstrapThemeCommon {
    static onReady() {
        ContaoBootstrapThemeCommon.initColFull();
    }
    
    static onResize() {
        ContaoBootstrapThemeCommon.initColFull();
    }
    
    static initColFull() {
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            containers = document.querySelectorAll('.container'),
            containerWidth = 0;

        if (containers.length < 1)
        {
            return;
        }

        containerWidth = containers[0].offsetWidth;

        document.querySelectorAll('.col-full').forEach(function(item) {
            item.style.marginLeft = ((width - containerWidth) / -2) + 'px';
            item.style.marginRight = ((width - containerWidth) / -2) + 'px';
        });
    }
}

document.addEventListener('DOMContentLoaded', ContaoBootstrapThemeCommon.onReady, true);
document.addEventListener('resize', ContaoBootstrapThemeCommon.onResize, true);
