##
# Defines the :pure_time input type.
# @example <% f.input :date, as: :pure_time %>
class PureTimeInput < PureAbstractDateInput
  self.default_options = { icon: 'fa-clock-o' }

  def input_html_classes
    super.push('pure-admin-time')
  end
end
