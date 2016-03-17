##
# Defines the :pure_date input type.
# @example <% f.input :date, as: :pure_date %>
class PureDateInput < PureAbstractDateInput
  def input_html_classes
    super.push('pure-admin-date')
  end
end
