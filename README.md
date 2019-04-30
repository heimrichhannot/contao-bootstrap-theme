# Contao Bootstrap 4 theme

Dieses Modul dient als gemeinsame CSS-Code-Basis. Neben diesem Modul sollte dann ein eigenes projektspezifisches Theme erstellt werden (siehe unten).

## Installation 

```
yarn add @hundh/contao-bootstrap-theme
```

## Aufbau projektspezifischer Themes

### SCSS

Hier werden alle SASS-Dateien in ihren zugehörigen Verzeichnissen abgelegt.

- **components:** Komponenten sind konfigurierbare Bausteine innerhalb unserer Seite, wie die Hauptnavigation, Nachrichtentemplates oder Tabellen. **Sowohl Mixins als CSS-Selektoren für die Komponenten werden hier abgelegt.**
- **mixins:** Mixins sind wiederverwendbare Funktionen für SASS. Hier werden globale Verläufe, Grid- oder Sticky-Footer-Funktionen deklariert. **Hier landen ausschließlich Mixins, keine CSS-Selektoren!**
- **regions:** Basis-Regionen des Hauptlayouts(fe_page.html) werden hier gestaltet. **Hier werden ausschließlich CSS-Selektoren gestaltet. Mixins haben hier nichts verloren!**
- **vendor:** Hier werden Fremd-Plugins und Bibliotheken wie z.B. der Slick Slider oder Bootstrap-Select gestaltet. **Sowohl Mixins als CSS-Selektoren für die Komponenten werden hier abgelegt.**
- **browser:** Hier werden alle browserspezifischen Änderungen (IE, Firefox, ...) angelegt. Dieser Ordner wird typischerweise als letzter in der aggregierten Datei referenziert.
- bei Bedarf zusätzlicher Ordner **pages** in dem dann alle Änderungen Seiten betreffend in separaten SASS-Dateien gehalten werden

### Fonts

Hier werden projektspezifische Web- bzw. Iconfonts abgelegt.

### Images

Hier werden projektspezifische Bilder und Grafiken abgelegt.

- **img/icons** Hier landen Icon-Grafiken.
- **img/logos** Hier landen Logos.
- **img/patterns** Hier landen Verläufe und Muster für Hintergrundbilder.
- **img/sprites** Hier landen Image-sprites.

### JavaScripts

Hier werden projektspezifische Javascript-Dateien abgelegt. Dafür bitte eine Datei **common.js** anlegen, die folgenden Aufbau aufweist:

```
let u = require('umbrellajs');

(function($)
{
    window.ContaoBootstrapCommon = {
        onReady: function()
        {
        },
        onResize: function()
        {
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
```

## Verwendung

### SCSS

Es muss die `scss/_common.scss`-Datei und `scss/_variables`-Datei (optional) im Projekt importiert werden. Diese importiert alle enthaltenen Datein. Für eine spezifische Anpassung muss der Inhalt der `_common.scss` kopiert und ungenutzte Einträge entfernt werden. 

**/vendor/heimrichhannot/contao-project-bundle/src/Resources/assets/scss/project.scss**
```
@import "variables.scss";
@import "~contao-bootstrap-theme/scss/_variables.scss";
@import "~contao-bootstrap-theme/scss/_common.scss";

// mixins
...
```


## Mixins

### Responsive font size `fluid-type`

Um Überschriften responsive optimal auszuliefern und den Aufwand der Dimensionierung pro Breakpoint so gering wie möglich zu halten gibt es das mixin `fluid-type`

```
// _variables.scss
$h1-font-size: 3.75rem; // ~60px
$h2-font-size: 3.315rem; // ~53px
$h3-font-size: 1.935rem; // ~31px
$h4-font-size: 1.315rem; // ~21px
$h5-font-size: 1.625rem; // ~25px
$h6-font-size: $font-size-base; // ~17px

$h1-font-sizes: (
  min: $h1-font-size * 0.55,
  max: $h1-font-size
);

$h2-font-sizes: (
  min: $h2-font-size * 0.5,
  max: $h2-font-size
);

$h2-lg-font-sizes: (
  min: $h2-font-size * 0.75 * 1.1,
  max: $h2-font-size * 1.1
);

$h3-font-sizes: (
  min: $h3-font-size * 0.7,
  max: $h3-font-size
);

$h4-font-sizes: (
  min: $h4-font-size * 0.7,
  max: $h4-font-size
);

$h5-font-sizes: (
  min: $h5-font-size * 0.7,
  max: $h5-font-size
);

$h6-font-sizes: (
  min: $h6-font-size,
  max: $h6-font-size
);
```

```
// _type.scss
h1, .h1 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h1-font-sizes, 'min'), map_get($h1-font-sizes, 'max'));
  line-height: 1.2;
}

h2, .h2 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h2-font-sizes, 'min'), map_get($h2-font-sizes, 'max'));
  color: $body-color;
  line-height: 1.2;
}

h3, .h3 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h3-font-sizes, 'min'), map_get($h3-font-sizes, 'max'));
  margin-bottom: 1rem;
}

h4, .h4 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h4-font-sizes, 'min'), map_get($h4-font-sizes, 'max'));
  font-weight: $font-weight-base;
  margin-bottom: 1rem;
}

h5, .h5 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h5-font-sizes, 'min'), map_get($h5-font-sizes, 'max'));
  color: theme-color('primary');
  margin-bottom: 1rem;
}

h6, .h6 {
  @include fluid-type(map_get($container-max-widths, 'sm'),map_get($container-max-widths, 'xl'), map_get($h6-font-sizes, 'min'), map_get($h6-font-sizes, 'max'));
  margin-bottom: 1rem;
}
```

