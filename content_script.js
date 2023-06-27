const websites = [
  "https://www.marketer.monetate.net",
  "https://www.arnette.com",
  "https://www.contactsdirect.com",
  "https://www.costadelmar.com",
  "https://www.davidclulow.com",
  "https://www.glasses.com",
  "https://www.lenscrafters.com",
  "https://www.oakley.com",
  "https://www.oakleysi.com",
  "https://www.opsm.com",
  "https://www.oliverpeoples.com",
  "https://www.persol.com",
  "https://www.ray-ban.com",
  "https://www.salmoiraghievigano.com",
  "https://www.sunglasshut.com",
  "https://www.targetoptical.com",
  "https://www.vogue-eyewear.com"
];

const fileNames = [
  'monetate-1-custom-events',
  'monetate-2-target',
  'monetate-3-actions',
  'monetate-4-conditions',
  'monetate-5-retrack',
  'monetate-6-preview',
  'monetate-7-inspector',
  'cheatsheet-experiences',
  'cheatsheet-events',
  'cheatsheet-targets',
  'glossario',
  'monetate',
  'clickup-1-task',
  'clickup-2-task-code',
  'clickup-3-task-uat',
  'clickup',
];

const fileTitles = {
  'cheatsheet-experiences': 'Naming per le Experiences',
  'cheatsheet-events': 'Naming per i Custom Events',
  'cheatsheet-targets': 'Naming per i Custom Targets',
  'clickup-1-task': 'Il task di Clickup',
  'clickup-2-task-code': 'Il sottotask CODE',
  'clickup-3-task-uat': 'Il sottotask UAT',
  'clickup': 'Il flusso di lavoro su Clickup',
  'glossario': 'Glossario',
  'monetate-1-custom-events': 'I Custom Events in Monetate',
  'monetate-2-target': 'I Target in Monetate',
  'monetate-3-actions': 'Le Actions in Monetate',
  'monetate-4-conditions': 'Le Conditions in Monetate',
  'monetate-5-retrack': 'I retrack in Monetate',
  'monetate-6-preview': 'Le preview in Monetate',
  'monetate-7-inspector': 'L\'inspector per il debuh',
  'monetate': 'Monetate',
}

const icon = `
  <div id="crodevs__icon" class="crodevs__icon crodevsAPP" style="opacity: 0">
    <div class="crodevs__icon__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><g id="Livello_2" data-name="Livello 2"><g id="Livello_1-2" data-name="Livello 1"><path class="cls-1" d="M11,0a1,1,0,0,0-1,1V3.76c-.17.06-.35.12-.51.19a9.65,9.65,0,0,0-1.15.6,11.11,11.11,0,0,0-1.07.72c-.13.1-.25.22-.38.33L4.52,4.15A1,1,0,0,0,4,4a1,1,0,0,0-.86.49l-3,5.19a1.13,1.13,0,0,0-.13.5,1,1,0,0,0,.51.88l2.6,1.47c0,.12,0,.23,0,.36A10.14,10.14,0,0,0,3,14a10.32,10.32,0,0,0,.06,1.11c0,.12,0,.24.06.36L.51,16.93A1,1,0,0,0,0,17.8a1.06,1.06,0,0,0,.13.5l3,5.2A1,1,0,0,0,4,24a1,1,0,0,0,.5-.14L6.9,22.45c.13.11.25.23.39.33a11,11,0,0,0,1.07.71,10.18,10.18,0,0,0,1.14.58l.5.19V27a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V24.26l.49-.19a10.32,10.32,0,0,0,1.15-.58c.36-.22.72-.45,1.07-.71.13-.1.26-.22.39-.33l2.38,1.41A1,1,0,0,0,24,24a1,1,0,0,0,.86-.5l3-5.2a1,1,0,0,0,.13-.5,1,1,0,0,0-.51-.87l-2.6-1.46c0-.12,0-.24.05-.36A10.34,10.34,0,0,0,25,14a10.15,10.15,0,0,0-.07-1.1c0-.13,0-.24-.05-.36l2.6-1.47a1,1,0,0,0,.51-.88,1,1,0,0,0-.13-.5l-3-5.19A1,1,0,0,0,24,4a1,1,0,0,0-.52.14L21.1,5.6c-.13-.11-.25-.23-.38-.33a11.11,11.11,0,0,0-1.07-.72A10.34,10.34,0,0,0,18.51,4L18,3.76V1a1,1,0,0,0-1-1Zm1,2h4V4.45a1,1,0,0,0,.71,1c.33.11.67.24,1,.38a8.17,8.17,0,0,1,.93.48,7.58,7.58,0,0,1,.88.6,10.13,10.13,0,0,1,.79.68,1,1,0,0,0,1.22.15l2.13-1.3,2,3.43-2.32,1.31a1,1,0,0,0-.49,1.07c.06.3.11.6.14.9s0,.6,0,.9a10.3,10.3,0,0,1-.18,1.8,1,1,0,0,0,.49,1.08l2.31,1.3-2,3.44-2.13-1.25a1,1,0,0,0-1.2.13c-.25.24-.52.47-.8.69a8.92,8.92,0,0,1-.88.58,7.36,7.36,0,0,1-.93.47,8.38,8.38,0,0,1-1,.37,1,1,0,0,0-.7.95V26H12V23.56a1,1,0,0,0-.71-.95,8.38,8.38,0,0,1-1-.37,8.1,8.1,0,0,1-.93-.47,10.28,10.28,0,0,1-.88-.58c-.28-.22-.54-.45-.8-.69a1,1,0,0,0-1.2-.13L4.36,21.62l-2-3.44,2.32-1.3a1,1,0,0,0,.48-1.08A8.25,8.25,0,0,1,5,14c0-.3,0-.6,0-.9s.08-.6.14-.9a1,1,0,0,0-.48-1.07L2.37,9.82l2-3.43,2.12,1.3A1,1,0,0,0,7.7,7.54a8.7,8.7,0,0,1,.8-.68,8.42,8.42,0,0,1,.87-.6,7.55,7.55,0,0,1,.94-.48c.32-.14.65-.27,1-.38a1,1,0,0,0,.7-1Zm0,8a1,1,0,0,0-.63.21l-4,3a1,1,0,0,0,0,1.6l4,3A1,1,0,0,0,12,18a1,1,0,0,0,.57-1.82L9.67,14l2.93-2.2A1,1,0,0,0,12,10ZM16,10A1,1,0,0,0,15,11a1,1,0,0,0,.4.81L18.34,14,15.4,16.2a1,1,0,1,0,1.2,1.6l4-3a1,1,0,0,0,0-1.6l-4-3A1,1,0,0,0,16,10Z"/></g></g></svg>
    </div>
  </div>
  `;
document.querySelector('body').insertAdjacentHTML('beforeend', icon);
document.querySelector('#crodevs__icon').addEventListener('click', toggleSidebar);
setTimeout(() => {
  document.querySelector('#crodevs__icon').classList.add('showBar')
}, 200)
// document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${chrome.runtime.getURL('styles.css')}">`)
initSidebar();

function toggleSidebar() {
  const sidebar = document.getElementById('crodevs__sidebar');
  sidebar.classList.add('crodevsAPP')
  if (sidebar.classList.contains('barOpened')) {
    sidebar.classList.remove('barOpened');
    sidebar.classList.add('barClosed');
  } else {
    sidebar.classList.remove('barClosed');
    sidebar.classList.add('barOpened');
  }
}

function initSidebar() {
  const sidebarTemplate = `
  <div class="crodevs__sidebar__wrapper">
    <div class="crodevs__sidebar__wrapper__header">
      <span class="crodevs__sidebar__wrapper__header__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><g id="Livello_2" data-name="Livello 2"><g id="Livello_1-2" data-name="Livello 1"><path class="cls-1" d="M11,0a1,1,0,0,0-1,1V3.76c-.17.06-.35.12-.51.19a9.65,9.65,0,0,0-1.15.6,11.11,11.11,0,0,0-1.07.72c-.13.1-.25.22-.38.33L4.52,4.15A1,1,0,0,0,4,4a1,1,0,0,0-.86.49l-3,5.19a1.13,1.13,0,0,0-.13.5,1,1,0,0,0,.51.88l2.6,1.47c0,.12,0,.23,0,.36A10.14,10.14,0,0,0,3,14a10.32,10.32,0,0,0,.06,1.11c0,.12,0,.24.06.36L.51,16.93A1,1,0,0,0,0,17.8a1.06,1.06,0,0,0,.13.5l3,5.2A1,1,0,0,0,4,24a1,1,0,0,0,.5-.14L6.9,22.45c.13.11.25.23.39.33a11,11,0,0,0,1.07.71,10.18,10.18,0,0,0,1.14.58l.5.19V27a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V24.26l.49-.19a10.32,10.32,0,0,0,1.15-.58c.36-.22.72-.45,1.07-.71.13-.1.26-.22.39-.33l2.38,1.41A1,1,0,0,0,24,24a1,1,0,0,0,.86-.5l3-5.2a1,1,0,0,0,.13-.5,1,1,0,0,0-.51-.87l-2.6-1.46c0-.12,0-.24.05-.36A10.34,10.34,0,0,0,25,14a10.15,10.15,0,0,0-.07-1.1c0-.13,0-.24-.05-.36l2.6-1.47a1,1,0,0,0,.51-.88,1,1,0,0,0-.13-.5l-3-5.19A1,1,0,0,0,24,4a1,1,0,0,0-.52.14L21.1,5.6c-.13-.11-.25-.23-.38-.33a11.11,11.11,0,0,0-1.07-.72A10.34,10.34,0,0,0,18.51,4L18,3.76V1a1,1,0,0,0-1-1Zm1,2h4V4.45a1,1,0,0,0,.71,1c.33.11.67.24,1,.38a8.17,8.17,0,0,1,.93.48,7.58,7.58,0,0,1,.88.6,10.13,10.13,0,0,1,.79.68,1,1,0,0,0,1.22.15l2.13-1.3,2,3.43-2.32,1.31a1,1,0,0,0-.49,1.07c.06.3.11.6.14.9s0,.6,0,.9a10.3,10.3,0,0,1-.18,1.8,1,1,0,0,0,.49,1.08l2.31,1.3-2,3.44-2.13-1.25a1,1,0,0,0-1.2.13c-.25.24-.52.47-.8.69a8.92,8.92,0,0,1-.88.58,7.36,7.36,0,0,1-.93.47,8.38,8.38,0,0,1-1,.37,1,1,0,0,0-.7.95V26H12V23.56a1,1,0,0,0-.71-.95,8.38,8.38,0,0,1-1-.37,8.1,8.1,0,0,1-.93-.47,10.28,10.28,0,0,1-.88-.58c-.28-.22-.54-.45-.8-.69a1,1,0,0,0-1.2-.13L4.36,21.62l-2-3.44,2.32-1.3a1,1,0,0,0,.48-1.08A8.25,8.25,0,0,1,5,14c0-.3,0-.6,0-.9s.08-.6.14-.9a1,1,0,0,0-.48-1.07L2.37,9.82l2-3.43,2.12,1.3A1,1,0,0,0,7.7,7.54a8.7,8.7,0,0,1,.8-.68,8.42,8.42,0,0,1,.87-.6,7.55,7.55,0,0,1,.94-.48c.32-.14.65-.27,1-.38a1,1,0,0,0,.7-1Zm0,8a1,1,0,0,0-.63.21l-4,3a1,1,0,0,0,0,1.6l4,3A1,1,0,0,0,12,18a1,1,0,0,0,.57-1.82L9.67,14l2.93-2.2A1,1,0,0,0,12,10ZM16,10A1,1,0,0,0,15,11a1,1,0,0,0,.4.81L18.34,14,15.4,16.2a1,1,0,1,0,1.2,1.6l4-3a1,1,0,0,0,0-1.6l-4-3A1,1,0,0,0,16,10Z"></path></g></g></svg>
      </span>
      <span class="crodevs__sidebar__wrapper__header__text">CRO For Devs</span>
      <span class="crodevs__sidebar__wrapper__header__closeIcon">
        <svg width="8" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" hanging="8"><path d="M7.83725 1.30615L1.30664 7.83676M1.30664 1.30615L7.83725 7.83676" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </div>
    <div class="crodevs__sidebar__wrapper__content">
      <div class="crodevs__intro">
        <div class="crodevs__intro__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><g id="Livello_2" data-name="Livello 2"><g id="Livello_1-2" data-name="Livello 1"><path class="cls-1" d="M11,0a1,1,0,0,0-1,1V3.76c-.17.06-.35.12-.51.19a9.65,9.65,0,0,0-1.15.6,11.11,11.11,0,0,0-1.07.72c-.13.1-.25.22-.38.33L4.52,4.15A1,1,0,0,0,4,4a1,1,0,0,0-.86.49l-3,5.19a1.13,1.13,0,0,0-.13.5,1,1,0,0,0,.51.88l2.6,1.47c0,.12,0,.23,0,.36A10.14,10.14,0,0,0,3,14a10.32,10.32,0,0,0,.06,1.11c0,.12,0,.24.06.36L.51,16.93A1,1,0,0,0,0,17.8a1.06,1.06,0,0,0,.13.5l3,5.2A1,1,0,0,0,4,24a1,1,0,0,0,.5-.14L6.9,22.45c.13.11.25.23.39.33a11,11,0,0,0,1.07.71,10.18,10.18,0,0,0,1.14.58l.5.19V27a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V24.26l.49-.19a10.32,10.32,0,0,0,1.15-.58c.36-.22.72-.45,1.07-.71.13-.1.26-.22.39-.33l2.38,1.41A1,1,0,0,0,24,24a1,1,0,0,0,.86-.5l3-5.2a1,1,0,0,0,.13-.5,1,1,0,0,0-.51-.87l-2.6-1.46c0-.12,0-.24.05-.36A10.34,10.34,0,0,0,25,14a10.15,10.15,0,0,0-.07-1.1c0-.13,0-.24-.05-.36l2.6-1.47a1,1,0,0,0,.51-.88,1,1,0,0,0-.13-.5l-3-5.19A1,1,0,0,0,24,4a1,1,0,0,0-.52.14L21.1,5.6c-.13-.11-.25-.23-.38-.33a11.11,11.11,0,0,0-1.07-.72A10.34,10.34,0,0,0,18.51,4L18,3.76V1a1,1,0,0,0-1-1Zm1,2h4V4.45a1,1,0,0,0,.71,1c.33.11.67.24,1,.38a8.17,8.17,0,0,1,.93.48,7.58,7.58,0,0,1,.88.6,10.13,10.13,0,0,1,.79.68,1,1,0,0,0,1.22.15l2.13-1.3,2,3.43-2.32,1.31a1,1,0,0,0-.49,1.07c.06.3.11.6.14.9s0,.6,0,.9a10.3,10.3,0,0,1-.18,1.8,1,1,0,0,0,.49,1.08l2.31,1.3-2,3.44-2.13-1.25a1,1,0,0,0-1.2.13c-.25.24-.52.47-.8.69a8.92,8.92,0,0,1-.88.58,7.36,7.36,0,0,1-.93.47,8.38,8.38,0,0,1-1,.37,1,1,0,0,0-.7.95V26H12V23.56a1,1,0,0,0-.71-.95,8.38,8.38,0,0,1-1-.37,8.1,8.1,0,0,1-.93-.47,10.28,10.28,0,0,1-.88-.58c-.28-.22-.54-.45-.8-.69a1,1,0,0,0-1.2-.13L4.36,21.62l-2-3.44,2.32-1.3a1,1,0,0,0,.48-1.08A8.25,8.25,0,0,1,5,14c0-.3,0-.6,0-.9s.08-.6.14-.9a1,1,0,0,0-.48-1.07L2.37,9.82l2-3.43,2.12,1.3A1,1,0,0,0,7.7,7.54a8.7,8.7,0,0,1,.8-.68,8.42,8.42,0,0,1,.87-.6,7.55,7.55,0,0,1,.94-.48c.32-.14.65-.27,1-.38a1,1,0,0,0,.7-1Zm0,8a1,1,0,0,0-.63.21l-4,3a1,1,0,0,0,0,1.6l4,3A1,1,0,0,0,12,18a1,1,0,0,0,.57-1.82L9.67,14l2.93-2.2A1,1,0,0,0,12,10ZM16,10A1,1,0,0,0,15,11a1,1,0,0,0,.4.81L18.34,14,15.4,16.2a1,1,0,1,0,1.2,1.6l4-3a1,1,0,0,0,0-1.6l-4-3A1,1,0,0,0,16,10Z"></path></g></g></svg>
        </div>
        <h1 class="textAppear"><span>Ciao!</span><br>Hai bisogno di aiuto sulla CRO?</h1>
      </div>
      <div id="crodevs__search" class="crodevs__search">
        <div class="crodevs__search__base">
          <span class="crodevs__search__back">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
          </span>
          <span class="crodevs__search__field">
            <span class="crodevs__search__field__icon">
              <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            </span>
            <input type="text" id="search-input" placeholder="Cerca...">
          </span>
        </div>
      </div>
      <div class="crodevs__topic textAppear">
        <div class="crodevs__topic__card crodevs__topic__card--clickup">
          <h2>Clickup</h2>
          <span>Il flusso di lavoro</span>
          <div class="crodevs__topic__card__links">
            <span data-file="clickup">La board di Clickup</span>
            <span data-file="clickup-1-task">Il task dell'esperimento</span>
            <span data-file="clickup-2-task-code">Il sottotask CODE</span>
            <span data-file="clickup-2-task-uat">Il sottotask UAT</span>
          </div>
        </div>
        <div class="crodevs__topic__card crodevs__topic__card--monetate">
          <h2>Monetate</h2>
          <span>Creazione esperimenti</span>
          <div class="crodevs__topic__card__links">
            <span data-file="monetate-1-custom-events">I custom events</span>
            <span data-file="monetate-2-target">L'audience e i target</span>
            <span data-file="monetate-3-actions">Le actions</span>
            <span data-file="monetate-4-conditions">Le conditions</span>
            <span data-file="monetate-5-retrack">I retrack</span>
            <span data-file="monetate-6-preview">Le preview</span>
            <span data-file="monetate-7-inspector">L'inspector</span>
          </div>
        </div>
        <div class="crodevs__topic__card crodevs__topic__card--naming">
          <h2>Naming</h2>
          <span>Nomi e titoli</span>
          <div class="crodevs__topic__card__links">
            <span data-file="cheatsheet-experiences">Experiences</span>
            <span data-file="cheatsheet-events">Custom Events</span>
            <span data-file="cheatsheet-targets">Custom Targets</span>
          </div>
        </div>
        <div class="crodevs__topic__card crodevs__topic__card--code">
          <h2>Il codice</h2>
          <span>Snippets e how to</span>
          <div class="crodevs__topic__card__links">
            <span data-file="code-api-events">Push API Event</span>
            <span data-file="code-retrack">Retrack</span>
            <span data-file="code-monetate-exec">Monetate Exec</span>
          </div>
        </div>
      </div>
      ${websites.includes(location.origin) && location.origin != 'https://www.marketer.monetate.net' ? `
      <div id="crodevs__debug" class="crodevs__debug crodevs__debug--visible">
        <div class="crodevs__debug__selector">
          <h3>Visualizza esperienze attive:</h3>
          <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </div>
        <div class="crodevs__debug__list">
        </div>
      </div>
      ` : ''}
      <div id="crodevs__results" class="crodevs__results">
      </div>
    </div>
    <div class="crodevs__sidebar__wrapper__footer">
      <a href="https://teams.microsoft.com/l/chat/0/0?users=lucia.cenetiempo@luxottica.com" target="_blank" class="crodevs__sidebar__wrapper__footer__baloon crodevs__sidebar__wrapper__footer__baloon--chat">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.80019 7.05266V7.00002M7.00019 7.05266V7.00002M4.20019 7.05266V7.00002M1.40019 7.00002C1.40019 7.80504 1.57005 8.57038 1.87589 9.26216L1.39913 12.5995L4.25917 11.8845C5.06939 12.3401 6.00444 12.6 7.00019 12.6C10.093 12.6 12.6002 10.0928 12.6002 7.00002C12.6002 3.90723 10.093 1.40002 7.00019 1.40002C3.9074 1.40002 1.40019 3.90723 1.40019 7.00002Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        Hai bisogno di aiuto?
      </a>
      <span class="openFile" data-file="glossario">Glossario</span>
    </div>
  </div>
  `;
  const sidebar = document.createElement('div');
  sidebar.id = 'crodevs__sidebar';
  sidebar.insertAdjacentHTML('afterbegin', sidebarTemplate);
  sidebar.querySelector('#search-input').addEventListener('input', handleSearch);
  document.body.appendChild(sidebar);
  document.querySelector('.crodevs__sidebar__wrapper__header__closeIcon').addEventListener('click', toggleSidebar);

  const backButton = document.querySelector('.crodevs__search__back');
  backButton.addEventListener('click', () => {
    if (document.querySelector('#crodevs__results').classList.contains('opened') || document.querySelector('#crodevs__results').classList.contains('directLink')) {
      document.querySelector('#crodevs__results').classList.remove('opened');
      document.getElementById('crodevs__search').classList.remove('crodevs__search--onactive');
      if (document.getElementById('crodevs__debug')) {
        document.getElementById('crodevs__debug').classList.add('crodevs__debug--visible');
      }
      if(document.querySelector('#crodevs__results').classList.contains('directLink')){
        document.querySelector('#crodevs__results').classList.remove('directLink')
      }
      document.querySelector('.crodevs__topic').classList.add('textAppear');
      document.querySelector('.crodevs__intro h1').classList.add('textAppear');
      document.querySelector('.crodevs__topic').classList.remove('textDisappear');
      document.querySelector('.crodevs__intro h1').classList.remove('textDisappear');
      document.getElementById('search-input').value = '';

    }
    if (document.querySelector('#crodevs__results__content')) {
      if (document.querySelector('#crodevs__results__content').classList.contains('opened')) {
        document.querySelector('#crodevs__results__content').innerHTML = ''
        document.querySelector('#crodevs__results__content').classList.remove('opened');
        if(!document.querySelector('#crodevs__results__content').classList.contains('directLink')){
          document.querySelector('#crodevs__results').classList.add('opened');
          document.querySelector('.crodevs__topic').classList.remove('textAppear');
          document.querySelector('.crodevs__intro h1').classList.remove('textAppear');
          document.querySelector('.crodevs__topic').classList.add('textDisappear');
          document.querySelector('.crodevs__intro h1').classList.add('textDisappear');
        } else {
          document.querySelector('#crodevs__results__content').classList.remove('directLink')
        }
      }
    }
  });
  document.querySelectorAll('.crodevs__topic__card__links, .openFile').forEach(
    (link) => {
      link.onclick = (e) => {
        getFileContent(e.target.dataset.file)
        .then(fileContent => {
          let result = {
            'fileName' : e.target.dataset.file,
            'content': fileContent
          }
         handleView();
         showResultContent(result, 'directLink');
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        });
      }
    }
  )
  if (document.getElementById('crodevs__debug')) {
    const debugMode = document.getElementById('switch');
    var dataMessage;
    debugMode.addEventListener('change', (event) => {
      var debugList = document.querySelector('.crodevs__debug__list');
      if (event.currentTarget.checked) {
        document.querySelector('.crodevs__debug').classList.add('crodevs__debug--active');
        document.querySelector('.crodevs__debug').classList.remove('crodevs__debug--notactive');
        if (!debugList.classList.contains('debugVisible')) {
          debugList.classList.add('debugVisible');
        }
        if (!document.getElementById('mnt_debug_script')) {
          var script = document.createElement('script');
          script.id = 'mnt_debug_script'
          script.src = chrome.runtime.getURL('debug.js');
          document.body.appendChild(script);
          window.addEventListener("message", (event) => {
            if (event.origin == location.origin) {
              dataMessage = event.data;
              if (typeof dataMessage == 'object' && dataMessage.length > 0) {
                let template = `
                  <div class="crodevs__debug__list__row crodevs__debug__list__row--head">
                    <div class="crodevs__debug__list__col crodevs__debug__list__col--name">
                      <strong># </strong> Nome
                    </div>
                    <div class="crodevs__debug__list__col crodevs__debug__list__col--type">
                      Tipologia
                    </div>
                  </div>
                  <div class="crodevs__debug__list__row--content">
                    <div class="crodevs__debug__list__row--content__container">
                    ${dataMessage.map((item, index) => (
                  `
                      <a href="${item.link}" target="_blank" class="crodevs__debug__list__row">
                        <div class="crodevs__debug__list__col crodevs__debug__list__col--name">
                        <strong>#${index} </strong> ${item.name}
                        </div>
                        <div class="crodevs__debug__list__col crodevs__debug__list__col--type">
                          ${item.split}
                        </div>
                      </a>
                      `
                )).join('')}
                    </div>
                  </div>
                `;
                document.querySelector('.crodevs__debug__list').insertAdjacentHTML('afterbegin', template)
              } else if (dataMessage.indexOf('experience') > -1) {
                document.querySelector('.crodevs__debug__list').insertAdjacentHTML('afterbegin', '<span class="crodevs__debug__list__error">' + dataMessage + '</span>')
              }
            }
          }, false);
        }
      } else {
        document.querySelector('.crodevs__debug').classList.remove('crodevs__debug--active');
        document.querySelector('.crodevs__debug').classList.add('crodevs__debug--notactive');
        if (debugList.classList.contains('debugVisible')) {
          debugList.classList.remove('debugVisible');
        }
      }
    })
  }
}

function handleView(){
  document.getElementById('crodevs__search').classList.add('crodevs__search--onactive');
  if (document.getElementById('crodevs__debug')) {
    document.getElementById('crodevs__debug').classList.remove('crodevs__debug--visible');
  }
  document.querySelector('.crodevs__topic').classList.remove('textAppear');
  document.querySelector('.crodevs__intro h1').classList.remove('textAppear');
  document.querySelector('.crodevs__topic').classList.add('textDisappear');
  document.querySelector('.crodevs__intro h1').classList.add('textDisappear');
  document.querySelector('.crodevs__results').classList.add('directLink');
}
function handleSearch(event) {
  const keyword = event.target.value;
  if (document.querySelector('#crodevs__results__content')) {
    document.querySelector('#crodevs__results__content').innerHTML = '';
    document.querySelector('#crodevs__results__content').classList.remove('opened');
  }
  if (keyword.length > 0) {
    document.getElementById('crodevs__search').classList.add('crodevs__search--onactive');
    if (document.getElementById('crodevs__debug')) {
      document.getElementById('crodevs__debug').classList.remove('crodevs__debug--visible');
    }
    document.querySelector('.crodevs__topic').classList.remove('textAppear');
    document.querySelector('.crodevs__intro h1').classList.remove('textAppear');
    document.querySelector('.crodevs__topic').classList.add('textDisappear');
    document.querySelector('.crodevs__intro h1').classList.add('textDisappear');

    searchKeywords(keyword);
  } else {
    let resultContainer = document.getElementById('crodevs__results');
    resultContainer.innerHTML = '';
    resultContainer.classList.remove('opened');
    document.getElementById('crodevs__search').classList.remove('crodevs__search--onactive');
    if (document.getElementById('crodevs__debug')) {
      document.getElementById('crodevs__debug').classList.add('crodevs__debug--visible');
    }
    document.querySelector('.crodevs__topic').classList.add('textAppear');
    document.querySelector('.crodevs__intro h1').classList.add('textAppear');
    document.querySelector('.crodevs__topic').classList.remove('textDisappear');
    document.querySelector('.crodevs__intro h1').classList.remove('textDisappear');
  }
}

function searchKeywords(keyword) {
  const searchResults = [];
  fileNames.forEach(fileName => {
    getFileContent(fileName)
      .then(fileContent => {
        if (fileContent.toLowerCase().includes(keyword.toLowerCase())) {
          searchResults.push({
            fileName: fileName,
            content: fileContent
          });
        }

        updateResults(searchResults, keyword);
      })
      .catch(error => {
        console.error(`Errore nel caricamento del file ${fileName}: ${error}`);
      });
  });
}

function getFileContent(fileName) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Errore nel caricamento del file ${fileName}: ${xhr.statusText}`));
        }
      }
    };
    xhr.open('GET', chrome.runtime.getURL('markdown/' + fileName + '.md'), true);
    xhr.send();
  });
}

const EXCERPT_LENGTH = 240;

function updateResults(searchResults, keyword) {
  const resultsContainer = document.getElementById('crodevs__results');
  resultsContainer.classList.add('opened');
  resultsContainer.innerHTML = '';
  if (searchResults.length == 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'Nessun risultato trovato.';
    resultsContainer.appendChild(noResultsMessage);
  } else {
    searchResults.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.addEventListener('click', () => {
        showResultContent(result, keyword);
      });

      const fileNameElement = document.createElement('h3');
      fileNameElement.textContent = fileTitles[result.fileName];

      const contentElement = document.createElement('div');
      contentElement.classList.add('result-item-content')
      contentElement.insertAdjacentHTML('afterbegin', generateExcerpt(result.content, keyword));

      resultItem.appendChild(fileNameElement);
      resultItem.appendChild(contentElement);
      resultsContainer.appendChild(resultItem);
    });
  }
}

function generateExcerpt(text, keyword) {
  const excerptLength = EXCERPT_LENGTH;
  const htmlText = markdownToHtml(text);
  const cleanText = htmlText.replace(/<\/?[^>]+(>|$)/g, '');
  const keywordIndex = cleanText.toLowerCase().indexOf(keyword.toLowerCase());

  if (keywordIndex === -1) {
    return cleanText.slice(0, excerptLength);
  } else {
    let startIndex = Math.max(0, keywordIndex - Math.floor(excerptLength / 2));
    let endIndex = startIndex + excerptLength;

    if (endIndex > cleanText.length) {
      endIndex = cleanText.length;
      startIndex = Math.max(0, endIndex - excerptLength);
    }

    let excerpt = cleanText.slice(startIndex, endIndex);

    if (startIndex > 0) {
      excerpt = `...${excerpt}`;
    }

    if (endIndex < cleanText.length) {
      excerpt = `${excerpt}...`;
    }

    const excerptElement = document.createElement('span');
    const highlightedExcerpt = excerpt.replace(new RegExp(keyword, 'gi'), match => `<strong>${match}</strong>`);

    excerptElement.innerHTML = highlightedExcerpt;

    return excerptElement.outerHTML;
  }
}
function markdownToHtml(markdown) {
  const md = window.markdownit();
  return md.render(markdown);
}

function showResultContent(result, keyword) {
  const resultsContainer = document.getElementById('crodevs__results');
  resultsContainer.classList.remove('opened');

  const contentContainer = document.getElementById('crodevs__results__content');
  if (contentContainer) {
    contentContainer.parentNode.removeChild(contentContainer);
  }

  const newContentContainer = document.createElement('div');
  newContentContainer.id = 'crodevs__results__content';
  newContentContainer.classList.add('crodevs__results__content');
  if(keyword == 'directLink'){
    newContentContainer.classList.add('directLink');
  }

  const fileNameElement = document.createElement('span');
  fileNameElement.id = 'topic-title'
  fileNameElement.textContent = fileTitles[result.fileName];

  const contentElement = document.createElement('div');
  let fullContent = markdownToHtml(result.content);
  
  const url = chrome.runtime.getURL('/images/');
  const withImages = fullContent.replace(/\/images\//g, url);
  contentElement.innerHTML = withImages;

  newContentContainer.appendChild(fileNameElement);
  newContentContainer.appendChild(contentElement);

  document.querySelector('.crodevs__sidebar__wrapper__content').appendChild(newContentContainer);
  document.querySelector('#crodevs__results__content').classList.add('opened');

  const phraseElement = getClosestPhraseElement(contentElement, keyword);
  
  if (phraseElement) {
    phraseElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function getClosestPhraseElement(contentElement, keyword) {
  const textNodes = getTextNodes(contentElement);

  for (let i = 0; i < textNodes.length; i++) {
    const textNode = textNodes[i];
    const nodeValue = textNode.nodeValue;

    if (nodeValue.toLowerCase().includes(keyword.toLowerCase())) {
      return textNode.parentNode;
    }
  }

  return null;
}

function getTextNodes(element) {
  const textNodes = [];
  const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);

  let node;
  while (node = walk.nextNode()) {
    textNodes.push(node);
  }

  return textNodes;
}
