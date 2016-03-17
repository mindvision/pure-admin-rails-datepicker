##
# Shared code for the :pure_date, :pure_time, and :pure_datetime inputs.
class PureAbstractDateInput < AddonInput
  self.default_options = { icon: 'fa-calendar' }

  ##
  # Moves the :max, :min, :before, and :after options to data attributes,
  # formats the value, and merges this with any other options.
  def input_html_options
    data = {}
    # data[:min] = options[:min] if options[:min].present?
    # data[:max] = options[:max] if options[:max].present?
    data[:before] = options[:before] if options[:before].present?
    data[:after] = options[:after] if options[:after].present?

    super.deep_merge(
      value: format_value(@builder.object.send(attribute_name)),
      type: 'text',
      data: data
    )
  end

  protected

    ##
    # @return (String) a formatted version of the input's value
    # @param (Date, Time, DateTime, String) value
    def format_value(value)
      case value
        when Date, Time, DateTime
          format = options[:format] || :default
          value.to_s(format)
        else
          value.to_s
      end
    end
end
