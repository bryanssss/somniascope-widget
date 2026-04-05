class SomniaScopeWidget {
    constructor() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.render();
    }

    render() {
        return `
            <style>
                .widget {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    background-color: white;
                }
                .floating {
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }
                .inline {
                    display: inline-block;
                }
            </style>
            <div class="widget ${this.mode}">
                <p>Welcome to the SomniaScope Widget!</p>
            </div>
        `;
    }

    setMode(mode) {
        this.mode = mode;
        this.shadowRoot.querySelector('.widget').className = `widget ${mode}`;
    }
}

// Usage Example
const widget = new SomniaScopeWidget();
widget.setMode('inline'); // or 'floating'
