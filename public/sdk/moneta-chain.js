/**
 * MONETA UNIFIED SUPPORT — REAL-TIME EMBED (MONETA CHAIN ONLY)
 * SDK v2.6.0
 */
(function(window) {
  if (window.MonetaChainSupport) return;

  var currentPosition = 'right';
  var isOpen = false;

  window.MonetaChainSupport = {
    open: function(position) {
      currentPosition = position || 'right';
      isOpen = true;
      window.dispatchEvent(new CustomEvent('moneta-support:open', { detail: { position: currentPosition } }));
    },
    close: function() {
      isOpen = false;
      window.dispatchEvent(new CustomEvent('moneta-support:close'));
    },
    toggle: function(position) {
      if (isOpen) {
        this.close();
      } else {
        this.open(position);
      }
    },
    isOpen: function() {
      return isOpen;
    }
  };

  // Extract script attributes
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i];
    if (s.src && s.src.indexOf('moneta-chain.js') !== -1) {
      var userId = s.getAttribute('data-user-id');
      var userName = s.getAttribute('data-user-name');
      if (userId) window.__MONETA_USER_ID__ = userId;
      if (userName) window.__MONETA_USER_NAME__ = userName;
      break;
    }
  }
})(window);
