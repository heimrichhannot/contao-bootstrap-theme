# Changelog
All notable changes to this project will be documented in this file.

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
