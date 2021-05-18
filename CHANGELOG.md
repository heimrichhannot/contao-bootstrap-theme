# Changelog
All notable changes to this project will be documented in this file.

## [6.5.0]
- added mixin `headline-styles`

## [6.4.0]
- removed heading styles (performance issues)

## [6.3.0]
- BS5 version bump
- added popperjs dependency

## [6.2.0]
- added col-full mixin
- added heading styles
- updated gitignore

## [6.1.0]
- BS5 migrations
- Renamed `border-left-radius()` and `border-right-radius()` to `border-start-radius()` and `border-end-radius()`
- The `button-size()` does not accept line height parameters anymore
- The `theme-color-level()` function is dropped -> changed to `shift-color()`
- `$input-line-height-sm` and `-md` are dropped -> changed to `$line-height-sm`, `-md`
- The`theme-color()` is dropped, used variants instead

## [6.0.0] - 2021-03-04
- update to bootstrap 5.0.0.beta2

## [5.0.8] - 2021-01-14
- fixed z-index of sweetalert (hidden under modal)

## [5.0.7] - 2020-10-08
- fixed accessibility: remove `text-decoration: underline` for buttons

## [5.0.6] - 2020-10-06
- fixed accessibility: remove `text-decoration: underline` for buttons and pagination

## [5.0.5] - 2020-10-02
- fix version

## [5.0.4] - 2020-10-02
- fix version

## [5.0.3] - 2020-10-02
- accessibility: fix remove button css

## [5.0.2] - 2020-10-02
- accessibility: remove `text-decoration: underline` for buttons and pagination

## [5.0.1] - 2020-10-02
- accessibility: added `text-decoration: underline` for links in #main

## [5.0.0] - 2020-10-02
- accessibility: removed `text-decoration: none` for hovered links

## [4.4.2] - 2020-08-26
- fixed version

## [4.4.1] - 2020-08-26
- fixed privacy center style

## [4.4.0] - 2020-06-10
- added mixins: type.scss -> ellipsis, multiline-ellipsis

## [4.3.0] - 2019-09-30

### Added
- mixin: forms.scss -> form-multi-column();
- non-important spacing classes (mb-5-ni) -> useful for global declarations that can be overridden afterwards

## [4.2.1] - 2019-09-17

### Fixed
- sweet alert issue

## [4.2.0] - 2019-09-17

### Added
- privacy center
- sweet alert

## [4.1.1] - 2019-09-17

### Changed
- variables.scss import position

## [4.1.0] - 2019-09-16

### Added
- more spacer classes (6 to 10)

## [4.0.2] - 2019-04-30

### Fixed
- moved font awesome leftovers into `utilities/font-awesome`

## [4.0.1] - 2019-03-22

### Fixed
- import `variables.scss` in `core.scss`

## [4.0.0] - 2019-03-22

### Added
- created `_mixins.scss` that contains all mixins, and no generated css-code
- created `_functions.scss` that contains all functions that should be loaded before all mixins, components and utilities
- created `_components.scss` that contains all components
- created `_contao-helper.scss` that contains all core contao related css rules, that normally are shipped with assets/contao/css/layout.css 

### Changed
- font-awesome is no longer a core dependency, import `utilities/font-awesome` now

## [3.0.1] - 2019-03-04

### Added
- .gitignore

## [3.0.0] - 2019-03-04

### Changed
- module namespace to `@hundh/contao-bootstrap-theme`

### Removed
- umbrella.js as a dependency (JavaScript is vanilla now)

### Fixed
- scss folder structure
- form custom control checkbox background color

## [2.10.0] - 2018-12-17

### Added
- support for choices.js text

## [2.9.0] - 2018-12-17

### Added
- support for choices.js

## [2.8.1] - 2018-11-23

### Fixed
- do not remove box-shadow on custom-control-label pseudo element, in order to provide aria support (:focus highlighting)

## [2.8.0] - 2018-11-14

### Changed
- removed `*:focus` (outline: none !important) rule

## [2.7.1] - 2018-11-13

### Fixed
- pagination

## [2.7.0] - 2018-11-13

### Added
- responsive type `fluid-type` mixin 

## [2.6.2] - 2018-11-05

### Removed
- badges.scss which is obsolete

## [2.6.1] - 2018-11-05

### Fixed
- font awesome 5.5 issues

## [2.6.0] - 2018-11-05

### Added
- font awesome 5.5
- fa-icon-before
- fa-icon-after

## [2.5.1] - 2018-11-05

### Fixed
- removed dump message

## [2.5.0] - 2018-10-29

### Added
- missing mixins `form-control-base()`, `btn-base()`
- responsive helper classes `.form-control-sm-sm`,`.form-control-md-sm`,`.form-control-lg-sm`,`.form-control-xl-sm`, dont forget to add `.form-control` to element
- responsive helper classes `.form-control-sm-base`,`.form-control-md-base`,`.form-control-lg-base`,`.form-control-xl-base`, dont forget to add `.form-control` to element
- responsive helper classes `.form-control-sm-lg`,`.form-control-md-lg`,`.form-control-lg-lg`,`.form-control-xl-lg`, dont forget to add `.form-control` to element 
- responsive helper classes `.btn-sm-sm`,`.btn-md-sm`,`.btn-lg-sm`,`.btn-xl-sm`
- responsive helper classes `.btn-sm-base`,`.btn-md-base`,`.btn-lg-base`,`.btn-xl-base`
- responsive helper classes `.btn-sm-lg`,`.btn-md-lg`,`.btn-lg-lg`,`.btn-xl-lg`

## [2.4.0] - 2018-10-29

### Added
- missing mixins `form-control-sm()`, `form-control-lg()`, `btn-sm()`, `btn-lg()`

## [2.3.0] - 2018-10-29

### Added
- font awesome utility for creating the fa classes defined in `$fa-class-icons`

### Removed
- font awesome's `icons.scss` in order to reduce CSS size

## [2.2.0] - 2018-10-25

### Added
- `d-ios-` and `d-android-` display utilities use `d-none d-ios-flex` classes to display elements only on ios devices

## [2.1.2] - 2018-07-19

### Fixed
- accordion

## [2.1.1] - 2018-07-17

### Fixed
- restricted Font Awesome to 5.1.0

## [2.1.0] - 2018-07-17

### Added
- alerts

## [2.0.2] - 2018-07-17

### Fixed
- cookie bar
- buttons

## [2.0.1] - 2018-07-17

### Fixed
- cookie bar

## [2.0.0] - 2018-07-16

### Added
- Font Awesome 5.1

## [1.1.2] - 2018-06-20

### Fixed
- form inputs for bootstrap 4 final

## [1.1.1] - 2018-06-20

### Fixed
- version number

## [1.1.0] - 2018-06-20

### Added
- font-face() from bourbon

## [1.0.6] - 2018-04-12

### Added
- `make-custom-row` and `make-custom-col-ready` mixin

## [1.0.5] - 2018-04-12

### Fixed
- fixed `$fa-font-path`

## [1.0.4] - 2018-04-11

### Fixed
- add on groups

## [1.0.3] - 2018-04-09

### Fixed
- removed outdated Font Awesome path from variables

## [1.0.1] - 2018-04-09

#### Fixed
- include paths
- dependencies
