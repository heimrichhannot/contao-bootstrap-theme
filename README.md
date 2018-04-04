# Common-Theme

Dieses Modul dient als gemeinsame CSS-Code-Basis. Neben diesem Modul sollte dann ein eigenes projektspezifisches Theme erstellt werden (siehe unten).

## Vendor-Versionen

Hier werden enthaltene Vendor-Bibliotheken in ihren Version aufgelistet. Diese sollten regelmäßig aktualisiert oder durch eine gepflegtes Repository ersetzt werden.

Vendor    |Version
:---------|:--------
Bourbon   | 4.3.4

## Aufbau projektspezifischer Themes

### CSS

Hier werden alle SASS und CSS-Dateien in ihren zugehörigen Verzeichnissen abgelegt.

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

Hier werden projektspezifische Javascript-Dateien abgelegt. Dafür bitte eine Datei **scripts.js** anlegen, die folgenden Aufbau aufweist:

```
(function ($) {
	var common = {
		onReady: function () {
		
		},
		onResize: function () {
		
		}
	};


	// document ready shorthand
	$(function () {
		common.onReady();
	});

	$(window).resize(function () {
		common.onResize();
	});
})(jQuery);
```

### vendor

Hier werden projektspezifische Fremdbibliotheken/Bower-Plugins abgelegt.

## Verwendung

### SCSS

Es muss die `scss/_common.scss`-Datei im Projekt importiert werden. Diese importiert alle enthaltenen Datein. Für eine spezifische Anpassung muss der Inhalt der `_common.scss` kopiert und ungenutzte Einträge entfernt werden. 
