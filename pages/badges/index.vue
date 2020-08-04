<template>
  <div class="container">
    <div class="table">
      <div class="table-row">
        <div class="table-cell text-top">
          <h3 class="name">Badges</h3>
        </div>
        <div class="table-cell text-top badges">
          <div class="row">
            <div class="col">
              <a href class="badge-rounded color-bck-secondary--green h4">Free</a>
            </div>
            <div class="col">
              <div>
                <a href class="badge-circle color-bck-secondary--purple h4">
                  <img src="@/assets/img/icon-download.svg" />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <label class="badge-play h4">
                  <span>Tutorial</span>
                </label>
              </div>
              <div class="row">
                <label class="badge-play h4 active">Tutorial</label>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <a href class="social__link_book">
                  <img src="@/assets/img/icon-bookmark-1.svg" />
                </a>
              </div>
              <div class="row">
                <a href class="social__link_book">
                  <img src="@/assets/img/icon-bookmark-2.svg" />
                </a>
              </div>
              <div class="row">
                <a href class="social__link_book">
                  <img src="@/assets/img/icon-bookmark-3.svg" />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div>
                  <label class="badge-checkbox" />
                </div>
              </div>
              <div class="row">
                <div>
                  <label class="badge-checkbox badge-checkbox--disabled" />
                </div>
              </div>
              <div class="row">
                <div>
                  <label class="badge-checkbox badge-checkbox--checked" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row">
                <a href class="social__link">
                  <img src="@/assets/img/social-youtube-primary.svg" />
                </a>
                <a href class="social__link">
                  <img src="@/assets/img/social-instagram-primary.svg" />
                </a>
                <a href class="social__link">
                  <img src="@/assets/img/social-facebook-primary.svg" />
                </a>
              </div>
              <div class="row">
                <a href class="social__link">
                  <img src="@/assets/img/social-youtube-green.svg" />
                </a>
                <a href class="social__link">
                  <img src="@/assets/img/social-instagram-green.svg" />
                </a>
                <a href class="social__link">
                  <img src="@/assets/img/social-facebook-green.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/pages/badges.scss";
</style>
