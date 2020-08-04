<template>
  <div class="container-fluid">
    <div class="table">
      <div class="table-row">
        <div class="table-cell text-center">
          <h3 class="name">Primary buttons</h3>
        </div>
        <div class="table-cell">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <Button link="" text="Explore Textures" type="primary" color="green"/>
              </div>
              <div class="col">
                <Button link="" text="Sign Up" type="primary" color="blue"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Button link="" text="Explore Textures" type="primary" color="green"/>
              </div>
              <div class="col">
                <Button link="" text="Sign Up" type="primary" color="blue"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Button link="" text="explore textures" type="primary" color="light"/>
              </div>
              <div class="col">
                <Button link="" text="Sign Up" type="primary" color="light"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Button link="" text="explore textures" type="primary" color="red"/>
                <!-- <a href="#" class="button-primary button-primary--red">explore textures</a> -->
              </div>
              <div class="col">
                <Button link="" text="Sign Up" type="primary" color="red"/>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell text-top color-bck-primary--900 text-center">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <Button link="" text="Get Help" type="primary" color="blue" width="wide"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Button link="" text="Get Help" type="primary" color="blue" width="wide"/>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell text-top color-bck-primary--800 text-center">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <Button link="" text="Join Now!" type="primary" color="inverted"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Button link="" text="Join Now!" type="primary" color="inverted"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell text-center">
          <h3 class="name">Secondary buttons</h3>
        </div>
        <div class="table-cell">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <Button link="" text="See in gallery" type="secondary" />
                <!-- <a href="#" class="button-secondary">See in gallery</a> -->
              </div>
              <div class="col">
                <a href="#" class="button-secondary button-secondary--play">Play Tutorial</a>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <a href="#" class="button">
                      <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" />
                    </a>
                  </div>
                  <div class="col">
                    <a href="#" class="button">
                      <img src="@/assets/img/icon-cross.svg" style="margin:10px;" width="12" />
                    </a>
                  </div>
                  <div class="col">
                    <a href="#" class="button">
                      <img src="@/assets/img/Path 10.svg" style="margin:32px;" width="24" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class="button-secondary active">See in gallery</a>
              </div>
              <div class="col">
                <a href="#" class="button-secondary button-secondary--play active">Play Tutorial</a>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <a href="#" class="button active">
                      <img src="@/assets/img/icon-arrow_left.svg" style="margin:10px;" width="12" />
                    </a>
                  </div>
                  <div class="col">
                    <a href="#" class="button active">
                      <img src="@/assets/img/icon-cross.svg" style="margin:12px;" width="12" />
                    </a>
                  </div>
                  <div class="col">
                    <a href="#" class="button active">
                      <img src="@/assets/img/Path 10.svg" style="margin:32px;" width="24" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell color-bck-primary--900 text-center">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <a
                  href="#"
                  class="button-secondary button-secondary--inverted"
                >See in gallery</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a
                  href="#"
                  class="button-secondary button-secondary--inverted active"
                >See in gallery</a>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell color-bck-primary--800 text-center">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <ToggleSwitch />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <ToggleSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell text-center">
          <h3 class="name">Terciary buttons</h3>
        </div>
        <div class="table-cell">
          <div class="cell-content">
            <div class="row">
              <div class="col">
                <a href="#" class="button-tertiary">Textures</a>
              </div>
              <div class="col">
                <a href="#" class="button-tertiary active">Edit</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--red">Textures</a>
              </div>
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--red active">Edit</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--green">Textures</a>
              </div>
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--green active">Edit</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--blue">Textures</a>
              </div>
              <div class="col">
                <a href="#" class="button-tertiary button-tertiary--blue active">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell color-bck-primary--900 text-center"></div>
        <div class="table-cell color-bck-primary--800 text-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from "@/components/ToggleSwitch";
import Button from "@/components/Button";

export default {
  components: {
    ToggleSwitch,
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/buttons.scss";
</style>
