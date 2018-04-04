# Contao Bootstrap 4 theme

Dieses Modul dient als gemeinsame CSS-Code-Basis. Neben diesem Modul sollte dann ein eigenes projektspezifisches Theme erstellt werden (siehe unten).

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
