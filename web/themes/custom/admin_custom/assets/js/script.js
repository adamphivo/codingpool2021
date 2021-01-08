(function ($, Drupal) { // closure

  Drupal.behaviors.admin_custom = {
    attach: function (context, settings) {

      // Ajout de Select2 aux select du BO.
      $('select', context).not('.select2-hidden-accessible').each(function () {
        var select = $(this),
          CkeditorParents = select.parents('#ckeditor-entity-link-dialog-form');

        if (CkeditorParents.length === 0 && select.hasClass('js-hide') === false) {
          select.select2({minimumResultsForSearch:12});
        }
      });

      // Menu Contribuer : pour avoir le même comportement que celui fourni par le module Toolbar
      if ('drupalToolbarMenu' in $.fn) {
        $('.toolbar-menu').drupalToolbarMenu();
      }

    }
  };
}(jQuery, Drupal));
