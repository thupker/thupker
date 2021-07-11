'use strict'










///////////////////////// - BootStrap5 tooltips - ///////////////////////////////////

// for tooltip in bootstrap and you can disable them if you don't need them

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const  tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
