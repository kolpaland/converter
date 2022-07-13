Vue.component('layout-converter', {
    data: function () {
      return {
        value1: 0,
        value2: 1.125
      }
    },
    props: {
        title: String,
    },
    template: 
    `<div class="columns py-3 is-desktop">
    <div class="comumn mx-3 px-3 py-3 is-narrow">
      <article class="box" style="width: 480px;">

        <b-notification type="is-success is-light" :closable="false">
          <div class="level">
            <div class="level-left">
              <p class="subtitle">{{ title }}</p>
            </div>
            <div class="level-right">
              <b-tag type="is-success">Исправен</b-tag>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <b-taglist attached>
                  <b-tag type="is-dark">Версия ПО</b-tag>
                  <b-tag type="is-info">1.3.4.0</b-tag>
                </b-taglist>
              </div>
              <div class="level-item">
                <b-taglist attached>
                  <b-tag type="is-dark">Версия ПЛИС</b-tag>
                  <b-tag type="is-info">0.2.28.0</b-tag>
                </b-taglist>
              </div>
            </div>
          </div>
        </b-notification>

        <b-notification type="is-success is-light" has-icon :closable="false">
          <p class="mb-2">Азимут</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <b-taglist attached>
                  <b-tag type="is-dark">Датчик 1</b-tag>
                  <b-tag type="is-success">Исправен</b-tag>
                </b-taglist>
              </div>
              <div class="level-item">
                <b-taglist attached>
                  <b-tag type="is-dark">Датчик 2</b-tag>
                  <b-tag type="is-success">Исправен</b-tag>
                </b-taglist>
              </div>
            </div>
          </div>
        </b-notification>

        <b-notification type="is-success is-light" :closable="false">
          <div class="level">
            <div class="level-left">
              <p class="subtitle">Горизонт</p>
            </div>
            <div class="level-right">
              <b-tag type="is-success">Исправен</b-tag>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <p>Поперечная ось</p>
              <b-notification type="is-success" :closable="false">
                <p>Угол</p>
                <p class="is-size-2">{{ value1 }}</p>
                <p>мин.</p>

              </b-notification>
            </div>
            <div class="column is-half">
              <p>Продольная ось</p>
              <b-notification type="is-success" :closable="false">
                <p>Угол</p>
                <p class="is-size-2">{{ value2 }}</p>
                <p>мин.</p>

              </b-notification>
            </div>

          </div>

          <b-field label="Угол поперечной оси">
            <b-slider v-model="value1" class="pt-5" tooltip-always type="is-success" :step="0.005" :min="0" :max="2">
            </b-slider>
          </b-field>

          <b-field label="Угол продольной оси">
            <b-slider v-model="value2" class="pt-5" tooltip-always type="is-success" :step="0.005" :min="0" :max="2">
            </b-slider>
          </b-field>

          <b-taglist class="pt-2" attached>
            <b-tag type="is-dark">Состояние горизонтирования</b-tag>
            <b-tag type="is-success">Норма</b-tag>
          </b-taglist>

        </b-notification>


      </article>
    </div>
  </div>`
  })