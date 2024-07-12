const template = document.createElement("template");

template.innerHTML = /*html*/ `
<style>
  pre {
    counter-reset: line;
    width: min-content;
    border: 0.15rem solid lightgray;
    border-radius: 0.5rem;
    padding: 1ch 3ch 1ch 1ch;
    margin: 1ch;
    background: #f0f0f0;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    counter-increment: line;
  }

  code::before {
    content: counter(line);
    margin-inline: 1ch;
    color: steelblue;
  }

  .selector {
    color: darkorange;
    font-weight: 600
  }

  .property {
    color: darkblue;
    font-weight: 400
  }
</style>
<pre class="code-container">
</pre>
`;

export default class CodeBlock extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.codeContainer = this._shadowRoot.querySelector(".code-container");
    this.codeContainer.innerHTML = this._generateCodeLines(this.textContent);
  }

  _generateCodeLines(textContent) {
    const lines = textContent.split("\n");
    let spacesToRemove = Infinity;
    lines.forEach((line) => {
      if (line.trim()) {
        const leadingSpaces = line.length - line.trimStart().length;
        if (leadingSpaces < spacesToRemove) spacesToRemove = leadingSpaces;
      }
    });
    return lines
      .reduce((acc, line) => {
        line.trim() &&
          acc.push(
            /*html*/ `<code>${this._formatCodeLine(
              line.slice(spacesToRemove)
            )}</code>`
          );
        return acc;
      }, [])
      .join("\n");
  }

  _formatCodeLine(line) {
    if (line.includes("{")) {
      return /*html*/ `<span class="selector">${line.split("{")[0]}</span>{`;
    }
    if (line.includes(":")) {
      const parts = line.split(":");
      return /*html*/ `<span class="property">${parts[0]}:</span>${parts[1]}`;
    }
    return line;
  }
}

window.customElements.define("code-block", CodeBlock);
