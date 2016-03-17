# Pure Admin Datetime Input

## Installation

Add these lines to your Gemfile

```
gem 'rome-rails'
gem 'pure-admin-rails-datetime'
```

Add these lines to application.scss.css

```
*= require rome
*= require pure_admin/inputs/datetime
```

Add these lines to application.js

```
//= require rome
//= require pure_admin/inputs/datetime
```

## Usage
To ensure the formatting is the same as your application, place the following in application.js
after the inclusion of the JavaScript file.

The formatting rules can be found here:  [http://momentjs.com/docs/#/parsing/string-format/]()

```js
// Date-only format
PureAdmin.inputs.datetime.dateOptions = {
  inputFormat: 'D MMM YYYY',
};

// Time-only format
PureAdmin.inputs.datetime.timeOptions = {
  inputFormat: 'HH:mm',
};

// Date and time format
PureAdmin.inputs.datetime.datetimeOptions = {
  inputFormat: 'D MMM YYYY [at] HH:mm',
};
```

When creating a field in SimpleForm, use the `:pure_date` type for a date field,
the `:pure_time` type for a time field and the `:pure_datetime` type for a joint date and time field.
