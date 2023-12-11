class PlayButton extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "play-button", PlayButton);
    }
  }

  connectedCallback() {
    this.button.addEventListener("click", (event) => {
      !this.player.paused ? this.player.pause() : this.player.play();
    });
  }

  get player() {
    return this.querySelector("audio, video");
  }

  get button() {
    return this.querySelector("button");
  }
}

PlayButton.register();
