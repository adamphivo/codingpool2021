(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var $ = jQuery;
  var T = {
    /**
     * Renvoie vrai si le context est root (document)
     * @param context
     */
    contextIsRoot: function contextIsRoot(context) {
      return 'HTML' === $($(context).children()[0]).prop("tagName");
    },

    /**
     * Retourne vrai si la variable est définie.
     * @param variable
     * @returns {boolean}
     */
    isDefined: function isDefined(variable) {
      return 'undefined' !== typeof variable;
    },

    /**
     * Retourne la taille de la fenêtre dans un objet avec .width et .height
     * @returns object
     */
    viewport: function viewport() {
      var e = window,
          a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    }
  };

  var PopinDefault =
  /*#__PURE__*/
  function () {
    function PopinDefault() {
      _classCallCheck(this, PopinDefault);
    }

    _createClass(PopinDefault, [{
      key: "init",

      /**
       * Initialize event listeners
       */
      value: function init() {
        var _this = this;

        this.$body = $('body');
        this.$popins = $('.Popin');
        this.$popinWrappers = $('.Popin-wrapper');
        this.$triggers = $('.Popin-trigger'); //Hamburger element to close touch menu on popin opening :

        this.$hamburger = $('#hamburger');
        this.$popinWrappers.prepend('<span class="Popin-close icon-cross"></span>');
        this.$triggers.on('click', function (ev) {
          _this.triggerClick();
        });
        this.$popins.on('click', '.Popin-close', function (ev) {
          _this.closePopins();
        });
        this.$popins.on('click', function (ev) {
          _this.closePopins();
        });
        this.$popins.on('click', '.Popin-wrapper', function (e) {
          e.stopPropagation();
        });
      }
      /**
       * Open modal when click on trigger
       */

    }, {
      key: "triggerClick",
      value: function triggerClick() {
        if (this.$hamburger.hasClass('open')) {
          this.$hamburger.trigger('click');
        }

        this.closePopins();
        var target = $(this).data("popin-target");
        var popin = $(target);
        popin.addClass('open');
        this.$body.addClass('no-scroll');
      }
      /**
       * Close all popins
       */

    }, {
      key: "closePopins",
      value: function closePopins() {
        this.$popins.removeClass('open'); //REMOVE FROZEN STATE OF BODY

        this.$body.removeClass('no-scroll');
      }
    }, {
      key: "attach",
      value: function attach(context) {
        if (T.contextIsRoot(context)) {
          this.init(context);
        }
      }
    }]);

    return PopinDefault;
  }();

  var popinDefault = new PopinDefault();

  (function (Drupal) {

    Drupal.behaviors.popinDefault = popinDefault;
  })(Drupal);

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9waW4uanMiLCJzb3VyY2VzIjpbInNyYy9qYXZhc2NyaXB0L3NyYy9jb21tb24vZHJ1cGFsL2RydXBhbC5qcyIsInNyYy9qYXZhc2NyaXB0L3NyYy9wb3Bpbi9zcmMvUG9waW5EZWZhdWx0LmpzIiwic3JjL2phdmFzY3JpcHQvc3JjL3BvcGluL3BvcGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCAkID0galF1ZXJ5O1xuZXhwb3J0IGxldCBUID0ge1xuICAgIC8qKlxuICAgICAqIFJlbnZvaWUgdnJhaSBzaSBsZSBjb250ZXh0IGVzdCByb290IChkb2N1bWVudClcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnRleHRJc1Jvb3Q6IGZ1bmN0aW9uKCBjb250ZXh0KXtcbiAgICAgICAgcmV0dXJuICdIVE1MJyA9PT0gJCgkKGNvbnRleHQpLmNoaWxkcmVuKClbMF0pLnByb3AoXCJ0YWdOYW1lXCIpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0b3VybmUgdnJhaSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWUuXG4gICAgICogQHBhcmFtIHZhcmlhYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEZWZpbmVkOiBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgdmFyaWFibGU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXRvdXJuZSBsYSB0YWlsbGUgZGUgbGEgZmVuw6p0cmUgZGFucyB1biBvYmpldCBhdmVjIC53aWR0aCBldCAuaGVpZ2h0XG4gICAgICogQHJldHVybnMgb2JqZWN0XG4gICAgICovXG4gICAgdmlld3BvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB3aW5kb3csIGEgPSAnaW5uZXInO1xuICAgICAgICBpZiAoISgnaW5uZXJXaWR0aCcgaW4gd2luZG93ICkpIHtcbiAgICAgICAgICAgIGEgPSAnY2xpZW50JztcbiAgICAgICAgICAgIGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB3aWR0aCA6IGVbIGErJ1dpZHRoJyBdICwgaGVpZ2h0IDogZVsgYSsnSGVpZ2h0JyBdfTtcbiAgICB9XG59O1xuZXhwb3J0IGxldCBEcnVwYWxIZWxwZXJzID0ge1xuICAgIGdldEJhc2VQYXRoKCkge1xuICAgICAgICByZXR1cm4gZHJ1cGFsU2V0dGluZ3MucGF0aC5iYXNlVXJsICsgZHJ1cGFsU2V0dGluZ3MucGF0aC5wYXRoUHJlZml4O1xuICAgIH1cbn07IiwiaW1wb3J0IHskLCBUfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RydXBhbC9kcnVwYWxcIjtcblxuY2xhc3MgUG9waW5EZWZhdWx0IHtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJHBvcGlucyA9ICQoJy5Qb3BpbicpO1xuICAgICAgICB0aGlzLiRwb3BpbldyYXBwZXJzID0gJCgnLlBvcGluLXdyYXBwZXInKTtcbiAgICAgICAgdGhpcy4kdHJpZ2dlcnMgPSAkKCcuUG9waW4tdHJpZ2dlcicpO1xuXG4gICAgICAgIC8vSGFtYnVyZ2VyIGVsZW1lbnQgdG8gY2xvc2UgdG91Y2ggbWVudSBvbiBwb3BpbiBvcGVuaW5nIDpcbiAgICAgICAgdGhpcy4kaGFtYnVyZ2VyID0gJCgnI2hhbWJ1cmdlcicpO1xuXG4gICAgICAgIHRoaXMuJHBvcGluV3JhcHBlcnMucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJQb3Bpbi1jbG9zZSBpY29uLWNyb3NzXCI+PC9zcGFuPicpO1xuXG4gICAgICAgIHRoaXMuJHRyaWdnZXJzLm9uKCdjbGljaycsIGV2ID0+IHt0aGlzLnRyaWdnZXJDbGljaygpO30pO1xuICAgICAgICB0aGlzLiRwb3BpbnMub24oJ2NsaWNrJywnLlBvcGluLWNsb3NlJywgZXYgPT4ge3RoaXMuY2xvc2VQb3BpbnMoKTt9KTtcbiAgICAgICAgdGhpcy4kcG9waW5zLm9uKCdjbGljaycsIGV2ID0+IHt0aGlzLmNsb3NlUG9waW5zKCk7fSk7XG4gICAgICAgIHRoaXMuJHBvcGlucy5vbignY2xpY2snLCAnLlBvcGluLXdyYXBwZXInLCBmdW5jdGlvbiAoZSkge2Uuc3RvcFByb3BhZ2F0aW9uKCl9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIHRyaWdnZXJcbiAgICAgKi9cbiAgICB0cmlnZ2VyQ2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy4kaGFtYnVyZ2VyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2VQb3BpbnMoKTtcbiAgICAgICAgbGV0IHRhcmdldCA9ICQodGhpcykuZGF0YShcInBvcGluLXRhcmdldFwiKTtcbiAgICAgICAgbGV0IHBvcGluID0gJCh0YXJnZXQpO1xuXG4gICAgICAgIHBvcGluLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIGFsbCBwb3BpbnNcbiAgICAgKi9cbiAgICBjbG9zZVBvcGlucyAoKSB7XG4gICAgICAgIHRoaXMuJHBvcGlucy5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgIC8vUkVNT1ZFIEZST1pFTiBTVEFURSBPRiBCT0RZXG4gICAgICAgIHRoaXMuJGJvZHkucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIGF0dGFjaChjb250ZXh0KSB7XG4gICAgICAgIGlmKFQuY29udGV4dElzUm9vdChjb250ZXh0KSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IHBvcGluRGVmYXVsdCA9IG5ldyBQb3BpbkRlZmF1bHQoKTsiLCJpbXBvcnQge3BvcGluRGVmYXVsdH0gZnJvbSBcIi4vc3JjL1BvcGluRGVmYXVsdFwiO1xuXG4oZnVuY3Rpb24gKERydXBhbCkgeyAvLyBjbG9zdXJlXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gUG9waW5cbiAgICBEcnVwYWwuYmVoYXZpb3JzLnBvcGluRGVmYXVsdCA9IHBvcGluRGVmYXVsdDtcbn0oRHJ1cGFsKSk7Il0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJUIiwiY29udGV4dElzUm9vdCIsImNvbnRleHQiLCJjaGlsZHJlbiIsInByb3AiLCJpc0RlZmluZWQiLCJ2YXJpYWJsZSIsInZpZXdwb3J0IiwiZSIsIndpbmRvdyIsImEiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJ3aWR0aCIsImhlaWdodCIsIlBvcGluRGVmYXVsdCIsIiRib2R5IiwiJHBvcGlucyIsIiRwb3BpbldyYXBwZXJzIiwiJHRyaWdnZXJzIiwiJGhhbWJ1cmdlciIsInByZXBlbmQiLCJvbiIsImV2IiwidHJpZ2dlckNsaWNrIiwiY2xvc2VQb3BpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNDbGFzcyIsInRyaWdnZXIiLCJ0YXJnZXQiLCJkYXRhIiwicG9waW4iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaW5pdCIsInBvcGluRGVmYXVsdCIsIkRydXBhbCIsImJlaGF2aW9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLElBQU1BLENBQUMsR0FBR0MsTUFBVjtBQUNQLEVBQU8sSUFBSUMsQ0FBQyxHQUFHO0VBQ1g7Ozs7RUFJQUMsRUFBQUEsYUFBYSxFQUFFLHVCQUFVQyxPQUFWLEVBQWtCO0VBQzdCLFdBQU8sV0FBV0osQ0FBQyxDQUFDQSxDQUFDLENBQUNJ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
