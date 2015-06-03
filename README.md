# Laravel-Bootstrap-Modal-Form

A form validation extension for your Laravel app.  Use when embedding a [Bootstrap form](http://getbootstrap.com/css/#forms) into a [Bootstrap/jQuery modal](http://getbootstrap.com/javascript/#modals).  This script keeps modal open, submits form via AJAX, queries your [Laravel validation](http://laravel.com/docs/validation) rules, and populates error messages.

![Demo](http://zippy.gfycat.com/DefensiveFlickeringKilldeer.gif)

# Requirements

- [Bootstrap CSS](http://getbootstrap.com/css/)
- [Bootstrap JS](http://getbootstrap.com/javascript/)
- [jQuery](http://jquery.com)

# Quick Installation

Via [Bower](http://bower.io):
```
bower install jerseymilker/laravel-bootstrap-modal-form --save
```

# Basic Usage

- Embed [Bootstrap form](http://getbootstrap.com/css/#forms) into [Bootstrap/jQuery modal](http://getbootstrap.com/javascript/#modals).
- Setup [Laravel validation](http://laravel.com/docs/validation).
- Include this script.
- Add `class="bootstrap-modal-form"` to form.
- Add `class="bootstrap-modal-form-open"` to modal open button.

# Additional Notes

- Script does not handle CSRF tokens. Use Laravel's [_token field](http://laravel.com/docs/5.0/routing#csrf-protection) in your forms if needed.
- Script submits via `POST` form action. Use Laravel's [method spoofing](http://laravel.com/docs/5.0/routing#method-spoofing) if you need to submit via `PUT`, `PATCH`, or `DELETE`.
- If script detects file input, FormData object will be used (requires IE10+, more info on [browser compatibility here](https://developer.mozilla.org/en/docs/Web/API/FormData#Browser_compatibility)).

# Shameless Plug

I highly recommend [BootForms](http://github.com/adamwathan/bootforms) form builder package by [Adam Wathan](https://twitter.com/adamwathan).  This is a great helper which makes generating Bootstrap form markup super easy.  It even auto-detects Laravel's validation state and outputs error messages for most field types.

Example:
```php
{!! BootForm::text('First Name', 'first_name') !!}
```
Generates:
```php
<div class="form-group {!! $errors->has('first_name') ? 'has-error' : '' !!}">
  <label for="first_name">First Name</label>
  <input type="text" class="form-control" id="first_name">
  {!! $errors->first('first_name', '<p class="help-block">:message</p>') !!}
</div>
```
