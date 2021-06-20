const renderMainBlock = title => {
  $('.competences').append(`
  <div class="block comp">
<div class="block-competition" id="${title}_competition">
  <p>${title}</p>
  <!-- тут короче залупка че внутри будет -->
  <svg version="1.1" id="fi_32195" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847"
      style="enable-background:new 0 0 451.847 451.847; fill: #25228c;" xml:space="preserve">
      <g>
          <path
              d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
          c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
          c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z">
          </path>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
  </svg>
</div>
<div class="inside-competence">
</div>
</div>
</div>`)
}

const renderSubBlock = (title, subTitle) => {
  $(`#title_${title} .inside-competence`).append(`

  <div class="inside-sub-block">
    <div class="sub-block">
        <p>${subTitle}</p>
        <svg version="1.1" id="fi_32195" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847"
            style="enable-background:new 0 0 451.847 451.847; fill: #25228c;" xml:space="preserve">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z">
                </path>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
    </div>

  </div>
  `)
}

fetch("../data.json").then(response => {
  response.json().forEach(element => {
    const title = element.Title;
    const subTitles = element.subTitle;

    renderMainBlock(title);
    subTitles.forEach(subTitle => {
      renderSubBlock(title, subTitle);
    });
  });
});