/* Declara la etiqueta "herramientas-abc" que se usa en "index.html" y
 * "usuarios.html". */
customElements.define("herramientas-abc", class extends HTMLElement {
  /** Se invoca al agregar este element a la página. */
  connectedCallback() {
    this.innerHTML =  /*html*/
      `<button id="agregar" type="button" class="btn btn-success btn-lg" onclick="agrega()">
        Agregar...
      </button>
      <button class="btn btn-info btn-lg" type="submit">Guardar</button>
      <button  class="btn btn-danger btn-lg" id="eliminar" type="button" onclick="elimina()">
        Eliminar
      </button>`;
  }
});