##
# Defines the :pure_datetime input type.
# @example <% f.input :starts_at, as: :pure_datetime %>
class PureDatetimeInput < PureAbstractDateInput
  def input_html_classes
    super.push('pure-admin-datetime')
  end
end
