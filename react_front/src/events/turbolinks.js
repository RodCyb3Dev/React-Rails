module.exports = {
  // Turbolinks 5+ got rid of named events (?!)
  setup: function(ujs) {
    ujs.handleEvent('DOMContentLoaded', ujs.handleMount)
    ujs.handleEvent('turbolinks:render', ujs.handleMount)
    ujs.handleEvent('turbolinks:before-render', ujs.handleUnmount)
  },

  teardown: function(ujs) {
    ujs.removeEvent('DOMContentLoaded', ujs.handleMount)
    ujs.removeEvent('turbolinks:render', ujs.handleMount)
    ujs.removeEvent('turbolinks:before-render', ujs.handleUnmount)
  },
}
