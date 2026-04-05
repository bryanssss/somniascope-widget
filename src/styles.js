const styles = {
  celestial: `
    :host {
      --background-color: #000;
      --text-color: #fff;
      --link-color: #1e90ff;
      --border-color: #444;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }

    a {
      color: var(--link-color);
    }

    /* Add more styles as needed */
  `,

  light: `
    :host {
      --background-color: #fff;
      --text-color: #000;
      --link-color: #0066cc;
      --border-color: #ccc;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }

    a {
      color: var(--link-color);
    }

    /* Add more styles as needed */
  `,
};

export default styles;