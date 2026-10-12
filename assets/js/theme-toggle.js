(function() {
  var ICONS = { dark: 'fa-solid fa-sun', light: 'fa-solid fa-moon' };
  var STORAGE_KEY = 'theme';

  function storedTheme() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyFavicon(theme) {
    var links = document.querySelectorAll('link[rel*="icon"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      if (href.indexOf('favicon') === -1) {
        continue;
      }
      var isDarkAsset = href.indexOf('favicon-dark') !== -1;
      links[i].setAttribute('media', isDarkAsset === (theme === 'dark') ? 'all' : 'not all');
    }
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.className = ICONS[theme];
    }
    applyFavicon(theme);
  }

  function init() {
    apply(currentTheme());

    var button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', function() {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        apply(next);
      });
    }

    if (window.matchMedia) {
      var query = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function(event) {
        if (!storedTheme()) {
          apply(event.matches ? 'dark' : 'light');
        }
      };
      if (query.addEventListener) {
        query.addEventListener('change', onChange);
      } else if (query.addListener) {
        query.addListener(onChange);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
