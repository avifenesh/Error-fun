// CookieScene: embeds the animated fortune cookie SVG and exposes crackWithFortune(html)
// Depends on GSAP being loaded globally (window.gsap)

export default class CookieScene {
  constructor(container) {
    this.container = container;
    this.gsap = window.gsap;
    if (!container || !this.gsap) {
      throw new Error('CookieScene requires a container element and GSAP loaded on window');
    }
    this.isOpen = false;
    this.busy = false;
    this._build();
  }

  _build() {
    // Basic container styling without relying on project CSS
    if (!this.container.style.minHeight) this.container.style.minHeight = '360px';
    if (!this.container.style.display) this.container.style.display = 'grid';
    if (!this.container.style.placeItems) this.container.style.placeItems = 'center';

    this.container.innerHTML = `
      <svg id="cookieScene" width="480" height="360" viewBox="0 0 465 353" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
        <defs>
          <clipPath id="clipLeft"><rect x="0" y="0" width="232.5" height="353" /></clipPath>
          <clipPath id="clipRight"><rect x="232.5" y="0" width="232.5" height="353" /></clipPath>
          <linearGradient id="paperGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#f2e9cc"/>
          </linearGradient>
        </defs>

        <g id="leftHalf" class="half" clip-path="url(#clipLeft)" style="transform-box: fill-box; transform-origin: 35% 55%">
          <g transform="translate(-2365.4 1838.7)">
            <g transform="translate(1.2226)">
              <g transform="translate(821.59 -389.04)"></g>
              <path fill="#fcb659" d="m2444.9-1783.2c-13.246 23.521-20.824 50.661-20.824 79.579 0 89.717 72.752 162.44 162.47 162.44 89.719 0 162.44-72.722 162.44-162.44 0-28.918-7.5783-56.058-20.824-79.579-37.37 10.224-102.81 32.237-141.62 94.546-29.046-55.275-99.19-87.395-141.65-94.546z"/>
              <path fill="#f79937" d="m2445.2-1783.1-0.6423 0.8657c0.866-0.4017 112.48 108.13 118.93 121.08 7.1821-10.984 14.59-21.178 23.12-27.44-29.134-54.89-99.041-87.289-141.41-94.503z"/>
              <path d="m2728.2-1783.2-2.569 0.3351c7.6804 76.555 12.07 152.55-53.307 216.02 45.774-28.729 76.176-79.66 76.176-137.69 0-28.544-7.3712-55.352-20.301-78.661z" fill="#f79937"/>
              <path fill-rule="evenodd" fill="#f68914" d="m2445.2-1783.1c47.941 25.523 90.124 63.411 125.21 111.86 3.0682-4.2076 6.2156-8.1307 9.522-11.505l0.055-0.055c-30.351-49.351-94.686-84.27-134.79-100.3z"/>
              <path fill="#f68914" d="m2733.5-1754.6-1.7492 0.2282c-2.6574 0.3466 3.2149 43.346 1.3395 63.574-3.2321 34.862-11.968 60.552-11.968 60.552-0.9766 2.8692 1.0604 6.944 3.615 2.7113 6.7279-11.148 21.139-46.314 21.139-74.953 0-19.434-3.6575-53.25-12.376-52.112z"/>
              <path style="color:#000000" fill="#fdc67d" d="m2451.3-1737.9c-7.3041 16.822-9.377 60.996-3.3252 80.772 10.122 33.075 69.382 99.896 111.14 102.06 64.079 3.3287 119.79-48.746 119.79-112.91 0-20.681-6.1428-52.382-15.616-69.204-26.727 7.3121-73.529 55.94-101.28 100.5-20.774-39.532-80.338-96.112-110.7-101.23z"/>
            </g>
          </g>
        </g>

        <g id="rightHalf" class="half" clip-path="url(#clipRight)" style="transform-box: fill-box; transform-origin: 65% 55%">
          <g transform="translate(-2365.4 1838.7)">
            <g transform="translate(1.2226)">
              <g transform="translate(821.59 -389.04)"></g>
              <path fill="#fcb659" d="m2444.9-1783.2c-13.246 23.521-20.824 50.661-20.824 79.579 0 89.717 72.752 162.44 162.47 162.44 89.719 0 162.44-72.722 162.44-162.44 0-28.918-7.5783-56.058-20.824-79.579-37.37 10.224-102.81 32.237-141.62 94.546-29.046-55.275-99.19-87.395-141.65-94.546z"/>
              <path fill="#f79937" d="m2445.2-1783.1-0.6423 0.8657c0.866-0.4017 112.48 108.13 118.93 121.08 7.1821-10.984 14.59-21.178 23.12-27.44-29.134-54.89-99.041-87.289-141.41-94.503z"/>
              <path d="m2728.2-1783.2-2.569 0.3351c7.6804 76.555 12.07 152.55-53.307 216.02 45.774-28.729 76.176-79.66 76.176-137.69 0-28.544-7.3712-55.352-20.301-78.661z" fill="#f79937"/>
              <path fill-rule="evenodd" fill="#f68914" d="m2445.2-1783.1c47.941 25.523 90.124 63.411 125.21 111.86 3.0682-4.2076 6.2156-8.1307 9.522-11.505l0.055-0.055c-30.351-49.351-94.686-84.27-134.79-100.3z"/>
              <path fill="#f68914" d="m2733.5-1754.6-1.7492 0.2282c-2.6574 0.3466 3.2149 43.346 1.3395 63.574-3.2321 34.862-11.968 60.552-11.968 60.552-0.9766 2.8692 1.0604 6.944 3.615 2.7113 6.7279-11.148 21.139-46.314 21.139-74.953 0-19.434-3.6575-53.25-12.376-52.112z"/>
              <path style="color:#000000" fill="#fdc67d" d="m2451.3-1737.9c-7.3041 16.822-9.377 60.996-3.3252 80.772 10.122 33.075 69.382 99.896 111.14 102.06 64.079 3.3287 119.79-48.746 119.79-112.91 0-20.681-6.1428-52.382-15.616-69.204-26.727 7.3121-73.529 55.94-101.28 100.5-20.774-39.532-80.338-96.112-110.7-101.23z"/>
            </g>
          </g>
        </g>

        <path id="crack" class="crackLine" d="M232.5,120 l-6,10 l9,10 l-7,10 l8,10 l-6,10 l7,10" stroke="#6d4c41" stroke-width="3" stroke-linejoin="round" opacity="0" style="stroke-linecap:round"/>

        <g id="paperGroup" class="fortunePaper" opacity="0" transform="translate(232.5,230) scale(0)" style="filter: drop-shadow(0 6px 14px rgba(0,0,0,0.25)); transform-box: fill-box; transform-origin: center;">
          <rect id="paperRect" x="-10" y="-10" rx="8" ry="8" width="20" height="20" fill="#fffdfa" stroke="#e5c985" stroke-width="3"/>
          <rect id="paperOverlay" x="-10" y="-10" width="20" height="20" fill="url(#paperGrad)" opacity="0.25"/>
          <text id="fortuneTextSVG" x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#6d4c41" style="font-family: Georgia, serif; font-weight: bold; letter-spacing: 0.3px;"></text>
        </g>
      </svg>
    `;

    this.svg = this.container.querySelector('#cookieScene');
    this.leftHalf = this.container.querySelector('#leftHalf');
    this.rightHalf = this.container.querySelector('#rightHalf');
    this.crack = this.container.querySelector('#crack');
    this.paperGroup = this.container.querySelector('#paperGroup');
    this.paperRect = this.container.querySelector('#paperRect');
    this.paperOverlay = this.container.querySelector('#paperOverlay');
    this.fortuneText = this.container.querySelector('#fortuneTextSVG');
  }

  _htmlToPlainWithBreaks(html) {
    const normalized = String(html || '').replace(/<br\s*\/?>(\s*)/gi, '\n');
    const div = document.createElement('div');
    div.innerHTML = normalized;
    let text = div.textContent || div.innerText || '';
    text = text.replace(/\r/g, '');
    // Collapse spaces but keep newlines; trim each line
    text = text.split('\n').map(s => s.replace(/[ \t\f\v]+/g, ' ').trim()).join('\n');
    return text;
  }

  _updateCrackPath() {
    const cx = 232.5;
    const y0 = 160;
    const seg = 11;
    const amp = 9;
    let d = `M${cx},${y0}`;
    let toggle = -1;
    for (let i = 0; i < seg; i++) {
      const dy = 10 + (i % 2 ? 1 : 0);
      const dx = (amp - (i % 3)) * (toggle);
      d += ` l${dx},${dy}`;
      toggle *= -1;
    }
    this.crack.setAttribute('d', d);
  }

  _setFortuneText(text) {
    while (this.fortuneText.firstChild) this.fortuneText.removeChild(this.fortuneText.firstChild);
    const maxWidth = 300;
    const fontSize = 18;
    const lineHeight = Math.round(fontSize * 1.25);

    const initialLines = String(text || '').split('\n');
    const lines = [];
    const temp = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    this.fortuneText.appendChild(temp);

    for (const raw of initialLines) {
      const words = raw.split(/\s+/).filter(Boolean);
      if (words.length === 0) { lines.push(''); continue; }
      let line = '';
      for (let i = 0; i < words.length; i++) {
        const test = line ? line + ' ' + words[i] : words[i];
        temp.textContent = test;
        const w = temp.getComputedTextLength();
        if (w > maxWidth && line) {
          lines.push(line);
          line = words[i];
        } else {
          line = test;
        }
      }
      lines.push(line);
    }

    this.fortuneText.removeChild(temp);
    const startDy = -((lines.length - 1) * lineHeight) / 2;
    lines.forEach((ln, idx) => {
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      t.setAttribute('x', '0');
      t.setAttribute('dy', idx === 0 ? String(startDy) : String(lineHeight));
      t.textContent = ln;
      this.fortuneText.appendChild(t);
    });
    this._layoutPaper();
  }

  _layoutPaper() {
    this.fortuneText.setAttribute('x', 0);
    this.fortuneText.setAttribute('y', 0);
    const bbox = this.fortuneText.getBBox();
    const padX = 24;
    const padY = 12;
    const width = Math.max(60, bbox.width + padX * 2);
    const height = Math.max(32, bbox.height + padY * 2);
    const x = -width / 2;
    const y = -height / 2;
    this.paperRect.setAttribute('x', x);
    this.paperRect.setAttribute('y', y);
    this.paperRect.setAttribute('width', width);
    this.paperRect.setAttribute('height', height);
    this.paperOverlay.setAttribute('x', x);
    this.paperOverlay.setAttribute('y', y);
    this.paperOverlay.setAttribute('width', width);
    this.paperOverlay.setAttribute('height', height);
  }

  _setClosedInstant() {
    // Stop any running tweens and normalize to closed state so each run looks identical
    this.gsap.killTweensOf([this.leftHalf, this.rightHalf, this.paperGroup, this.crack]);
    this.gsap.set([this.leftHalf, this.rightHalf], { x: 0, y: 0, rotation: 0 });
    this.gsap.set(this.paperGroup, { opacity: 0, scale: 0, y: 0 });
    this._updateCrackPath();
    const length = this.crack.getTotalLength();
    const dash = length + 0.1;
    this.gsap.set(this.crack, { opacity: 0, strokeDasharray: dash, strokeDashoffset: dash });
    this.isOpen = false;
  }

  _openAnimation() {
    this._updateCrackPath();
    const length = this.crack.getTotalLength();
    const dash = length + 0.1;
    this.gsap.killTweensOf(this.crack);
    this.gsap.set(this.crack, { opacity: 1, strokeDasharray: dash, strokeDashoffset: dash });

    const tl = this.gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => { this.isOpen = true; this.busy = false; }
    });

    tl.to([this.leftHalf, this.rightHalf], { x: -4, duration: 0.06, yoyo: true, repeat: 3 })
      .to([this.leftHalf, this.rightHalf], { x: 0, duration: 0.06 }, '<')
      .to(this.crack, { strokeDashoffset: 0, duration: 0.35 }, '-=0.05')
      .to(this.leftHalf, { x: -70, y: -34, rotation: -12, duration: 0.85 }, '-=0.05')
      .to(this.rightHalf, { x: 70, y: -34, rotation: 12, duration: 0.85 }, '-=0.85')
      .to(this.crack, { opacity: 0, duration: 0.2, onComplete: () => {
        const len = this.crack.getTotalLength();
        const d = len + 0.1;
        this.gsap.set(this.crack, { strokeDasharray: d, strokeDashoffset: d });
      } }, '-=0.75')
      .to(this.paperGroup, { opacity: 1, scale: 1, duration: 0.65, ease: 'back.out(1.6)' }, '-=0.3')
      .to(this.paperGroup, { y: -6, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.inOut' }, '-=0.3');
  }

  _reset(next) {
    const tl = this.gsap.timeline({ defaults: { ease: 'power2.inOut' }, onComplete: () => { this.isOpen = false; if (typeof next === 'function') { next(); } else { this.busy = false; } } });
    tl.to([this.leftHalf, this.rightHalf], { x: 0, y: 0, rotation: 0, duration: 0.6 })
      .to(this.paperGroup, { opacity: 0, scale: 0, y: 0, duration: 0.4 }, '-=0.3')
      .to(this.crack, { opacity: 0, duration: 0.2 }, '-=0.3');
  }

  crackWithFortune(htmlFortune) {
    if (this.busy) return;
    this.busy = true;
    const text = this._htmlToPlainWithBreaks(htmlFortune);
    // Always normalize to closed instantly so each run starts identically
    this._setFortuneText(text);
    this._setClosedInstant();
    this._openAnimation();
  }
}
