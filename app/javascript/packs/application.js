// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("jquery-ui-dist/jquery-ui");

$(document).on('turbolinks:load', function () {
  $('.chapter-sortable').sortable({
    axis        : "y",
    cursor      : "grabbing",
    placeholder : "ui-state-highlight",

    update: function(_, ui){
      let item      = ui.item
      let itemData  = item.data()
      let params    = { _method: 'put' }

      params[itemData.modelName] = { row_order_position: item.index() }

      $.ajax({
        type     : 'POST',
        url      : itemData.updateUrl,
        dataType : 'json',
        data     : params
      })
    },
  })

  $('.lesson-sortable').sortable({
    axis        : "y",
    cursor      : "grabbing",
    placeholder : "ui-state-highlight",
    connectWith : '.lesson-sortable',

    update: function(_, ui){
      if (ui.sender) return

      let item      = ui.item
      let itemData  = item.data()
      let listID    = item.parents('.ui-sortable-handle').eq(0).data().id
      let params    = { _method: 'put' }

      params[itemData.modelName] = { row_order_position: item.index(), list_id: listID }

      $.ajax({
        type     : 'POST',
        url      : itemData.updateUrl,
        dataType : 'json',
        data     : params
      })
    }
  })
})