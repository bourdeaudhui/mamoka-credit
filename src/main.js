import template from './main.html';
import lottie from 'lottie-web';

export class MamokaCredit extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.append(new DOMParser().parseFromString(`<body>${template}</body>`, 'text/html').body.firstElementChild.content);
  }
  connectedCallback() {
    this.attached();
  }
  attached() {
    const target = this.shadow.querySelector('a');
    this.animation = lottie.loadAnimation({
      container: target,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('./animation.json')
    });
    this.animation.goToAndStop(this.animation.getDuration(true)-1, true);
    this.animation.onComplete = () => {
      this.animation.goToAndStop(this.animation.getDuration(true)-1, true);
    }

    target.addEventListener('mouseenter', event => {
      this.animation.goToAndPlay(0);
    });
    target.addEventListener('mouseleave', event => {
      this.animation.goToAndStop(this.animation.getDuration(true)-1, true);
    });
  }
}
customElements.define('mamoka-credit', MamokaCredit);