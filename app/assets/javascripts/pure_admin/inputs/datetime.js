//= require_tree .

if (!PureAdmin) {
  console.error('You must load the PureAdmin JavaScript first before loading this JavaScript.');
}

PureAdmin.inputs.datetime = {
  defaults: {
    dayFormat: 'D',
    monthFormat: 'MMM',
    yearFormat: 'YYYY',
    weekStart: 1,
  },

  /*
   * The individual project is able to set options for each input type by defining the following
   * objects after this file is included.
   *   PureAdmin.inputs.datetime.dateOptions
   *   PureAdmin.inputs.datetime.timeOptions
   *   PureAdmin.inputs.datetime.datetimeOptions
   */

  init: function(context) {
    PureAdmin.inputs.datetime._initDateInputs(context);
    PureAdmin.inputs.datetime._initTimeInputs(context);
    PureAdmin.inputs.datetime._initDatetimeInputs(context);
  },

  _initDateInputs: function(context) {
    var inputs = $('.pure-admin-date:not(.initialised)', context);

    var options = {
      date: true,
      time: false,
    };

    options = $.extend({}, PureAdmin.inputs.datetime.defaults, options,
      PureAdmin.inputs.datetime.dateOptions);

    inputs.each(function() {
      input = $(this);
      input.addClass('initialised');

      PureAdmin.inputs.datetime._setInput(input, options);
    });
  },

  _initTimeInputs: function(context) {
    var inputs = $('.pure-admin-time:not(.initialised)', context);

    var options = {
      date: false,
      time: true,
    };

    options = $.extend({}, PureAdmin.inputs.datetime.defaults, options,
      PureAdmin.inputs.datetime.timeOptions);

    inputs.each(function() {
      input = $(this);
      input.addClass('initialised');

      PureAdmin.inputs.datetime._setInput(input, options);
    });
  },

  _initDatetimeInputs: function(context) {
    var inputs = $('.pure-admin-datetime:not(.initialised)', context);

    var options = {
      date: true,
      time: true,
    };

    options = $.extend({}, PureAdmin.inputs.datetime.defaults, options,
      PureAdmin.inputs.datetime.datetimeOptions);

    inputs.each(function() {
      input = $(this);
      input.addClass('initialised');

      PureAdmin.inputs.datetime._setInput(input, options);
    });
  },

  _setInput: function(input, options) {
    options = $.extend({}, options);

    if (input.data('min')) {
      options.min = rome.moment(new Date(input.data('min')));
    }

    if (input.data('max')) {
      options.max = rome.moment(new Date(input.data('max')));
    }

    if (input.data('before')) {
      var beforeEl = $(input.data('before'))[0];
      options.dateValidator = rome.val.beforeEq(beforeEl);
    }

    if (input.data('after')) {
      var afterEl = $(input.data('after'))[0];
      options.dateValidator = rome.val.afterEq(afterEl);
    }

    rome(input[0], options);
  }
};
