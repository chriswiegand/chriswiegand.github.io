// nav.js — shared masthead + footer injector for Stack$Trader

(function () {
  // Detect path depth for relative links
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const base = depth <= 1 ? './' : '../';

  // Which section is active?
  const path = window.location.pathname;
  function isActive(section) {
    return path.includes('/' + section + '/') ? 'active' : '';
  }
  function isHome() {
    return path.endsWith('index.html') || path.endsWith('/') || path === '' ? 'active' : '';
  }

  const nav = `
    <div class="topbar"></div>
    <header class="masthead">
      <div class="masthead-inner">
        <div class="masthead-meta">
          <span>Volume 1 &nbsp;·&nbsp; Issue 1 &nbsp;·&nbsp; March 2026</span>
          <span>Stack$Trader Research Team</span>
          <span>An Algorithmic Research Journal</span>
        </div>
        <a href="${base}index.html" class="masthead-logo" style="text-decoration:none;">
          Stack<span class="dollar">$</span>Trader
        </a>
        <div class="masthead-tagline">An Algorithmic Research Journal</div>
        <nav class="global-nav">
          <a href="${base}index.html" class="${isHome()}">Home</a>
          <a href="${base}brief/what-is-stacktrader.html" class="${isActive('brief')}">The Brief</a>
          <a href="${base}features/the-machine-that-learns-to-wait.html" class="${isActive('features')}">Features</a>
          <a href="${base}research/sixteen-minds-one-trade.html" class="${isActive('research')}">Research</a>
          <a href="${base}lab/seven-phases.html" class="${isActive('lab')}">The Lab</a>
          <a href="${base}theory/theta-the-engine.html" class="${isActive('theory')}">Theory</a>
          <a href="${base}whitepaper.html" class="">Whitepaper</a>
        </nav>
      </div>
    </header>`;

  const foot = `
    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-brand">Stack<span class="dollar">$</span>Trader</div>
          <div style="color:rgba(255,255,255,0.45); font-size:0.65rem; margin-top:4px; letter-spacing:0.06em;">AN ALGORITHMIC RESEARCH JOURNAL</div>
          <p class="footer-disclaimer">
            Stack$Trader is a research project. Nothing published here constitutes investment advice.
            All backtested results are hypothetical and do not guarantee future performance.
            Options trading involves significant risk of loss. Past performance does not predict future results.
          </p>
        </div>
        <div>
          <div class="footer-links">
            <a href="${base}brief/what-is-stacktrader.html">The Brief</a>
            <a href="${base}features/the-machine-that-learns-to-wait.html">Features</a>
            <a href="${base}research/sixteen-minds-one-trade.html">Research</a>
            <a href="${base}lab/seven-phases.html">The Lab</a>
            <a href="${base}theory/theta-the-engine.html">Theory</a>
            <a href="${base}whitepaper.html">Whitepaper</a>
          </div>
          <p style="margin-top:16px; font-size:0.6rem; color:rgba(255,255,255,0.3);">
            © 2026 Stack$Trader Research Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>`;

  // Inject before body content
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', foot);
})();
