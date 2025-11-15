// Extracted site script from _layouts/default.html
(function () {
  'use strict';

  // Helper: initialize sidebar toggles
  function initSidebarToggles() {
    var STORAGE_KEY = 'sidebarOpenCompanies';

    function readState() {
      try {
        var raw = sessionStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) { return []; }
    }

    function writeState(arr) {
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch (e) {}
    }

    function isOpen(arr, name) { return arr.indexOf(name) !== -1; }

    var state = readState();

    var companySections = document.querySelectorAll('#sidebar-menu .company-section');
    companySections.forEach(function (section) {
      var toggle = section.querySelector('.company-toggle');
      var content = section.querySelector('.company-projects');
      var name = section.getAttribute('data-company') || (section.querySelector('.company-title') && section.querySelector('.company-title').textContent.trim());
      if (!content || !toggle) return;

      if (name && isOpen(state, name)) {
        content.style.display = 'block';
        toggle.textContent = '[-]';
      } else {
        if (!content.style.display) content.style.display = 'none';
        toggle.textContent = (content.style.display === 'none') ? '[+]' : '[-]';
      }

      toggle.onclick = function () {
        var open = content.style.display !== 'block';
        content.style.display = open ? 'block' : 'none';
        toggle.textContent = open ? '[-]' : '[+]';

        if (name) {
          state = readState();
          if (open) {
            if (!isOpen(state, name)) state.push(name);
          } else {
            var idx = state.indexOf(name);
            if (idx !== -1) state.splice(idx, 1);
          }
          writeState(state);
        }
      };
    });
  }

  // Helper: execute inline scripts found in fetched fragment
  function runInlineScripts(container) {
    var scripts = container.querySelectorAll('script');
    scripts.forEach(function (oldScript) {
      var script = document.createElement('script');
      if (oldScript.src) {
        script.src = oldScript.src;
      } else {
        script.textContent = oldScript.textContent;
      }
      document.body.appendChild(script).parentNode.removeChild(script);
    });
  }

  // Load a page fragment and replace #main-content with the fetched page's <section>
  function loadFragment(url, pushState) {
    if (pushState === undefined) pushState = true;
    try {
      var absolute = new URL(url, location.href).href;
    } catch (e) {
      window.location.href = url;
      return;
    }

    fetch(absolute, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      .then(function (response) {
        if (!response.ok) throw new Error('Network response not ok');
        return response.text();
      })
      .then(function (htmlText) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlText, 'text/html');
        var newSection = doc.querySelector('section') || doc.querySelector('.main-content-variable') || doc.querySelector('.main-content');
        if (!newSection) { window.location.href = absolute; return; }

        var main = document.querySelector('.main-content-variable') || document.querySelector('.main-content') || document.getElementById('main-content');
        if (!main) { window.location.href = absolute; return; }

        main.innerHTML = newSection.innerHTML;

        var newTitle = doc.querySelector('title');
        if (newTitle && newTitle.textContent) {
          document.title = newTitle.textContent;
        } else {
          var h1 = main.querySelector('h1');
          if (h1) document.title = h1.textContent + ' — ' + (document.title || '');
        }

        runInlineScripts(main);
        initSidebarToggles();
        if (pushState) history.pushState({ url: absolute }, '', absolute);
      })
      .catch(function () { window.location.href = absolute; });
  }

  // Intercept clicks on sidebar project links to load only the content fragment
  function initAjaxNav() {
    var sidebar = document.getElementById('sidebar-menu');
    if (!sidebar) return;
    sidebar.addEventListener('click', function (e) {
      var target = e.target;
      while (target && target !== sidebar && target.nodeName !== 'A') target = target.parentNode;
      if (!target || target.nodeName !== 'A') return;

      var href = target.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      var dest;
      try { dest = new URL(href, location.href); } catch (err) { return; }
      if (dest.origin !== location.origin) return;

      e.preventDefault();
      loadFragment(dest.href, true);
    });
  }

  // Handle back/forward
  window.addEventListener('popstate', function (event) {
    var url = (event.state && event.state.url) ? event.state.url : location.href;
    loadFragment(url, false);
  });

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initSidebarToggles();
    initAjaxNav();
  });

})();
