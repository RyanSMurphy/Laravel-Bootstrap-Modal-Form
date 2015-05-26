# Laravel-Bootstrap-Modal-Form

A form validation extension for your Laravel app.  Use when embedding a [Bootstrap form](http://getbootstrap.com/css/#forms) into a [Bootstrap/jQuery modal](http://getbootstrap.com/javascript/#modals).  This script keeps modal open, submits form via AJAX, queries your [Laravel validation](http://laravel.com/docs/validation) rules, and populates error messages.

![Demo](http://zippy.gfycat.com/DefensiveFlickeringKilldeer.gif)

# Quick Installation

Via [Bower](http://bower.io):
```
bower install jerseymilker/laravel-bootstrap-modal-form --save
```

# Basic Usage

- Embed [Bootstrap form](http://getbootstrap.com/css/#forms) into [Bootstrap/jQuery modal](http://getbootstrap.com/javascript/#modals).
- Setup [Laravel validation](http://laravel.com/docs/validation) rules.
- Include this script.
- Add `class="bootstrap-modal-form"` to form.
- Add `class="bootstrap-modal-form-open"` to modal open button.
