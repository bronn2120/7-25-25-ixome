<template>
  <div class="services-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-6 col-md-12 services-content">
          <div class="section-title">
            <h2>{{ heading }}</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box">
                <DatabaseIcon></DatabaseIcon> Cloud databases
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><GlobeIcon></GlobeIcon> Website hosting</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><FileIcon></FileIcon> File storage</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box">
                <TrendingUpIcon></TrendingUpIcon> Forex trading
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><FolderIcon></FolderIcon> File backups</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><MonitorIcon></MonitorIcon> Remote desktop</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><MailIcon></MailIcon> Email servers</div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="box"><CloudIcon></CloudIcon> Hybrid cloud</div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 services-right-image">
          <img
            src="~/assets/img/services-right-image/book-self.png"
            alt="book-self"
          />
          <img src="~/assets/img/services-right-image/box.png" alt="box" />
          <img src="~/assets/img/services-right-image/chair.png" alt="chair" />
          <img src="~/assets/img/services-right-image/cloud.png" alt="cloud" />
          <img src="~/assets/img/services-right-image/cup.png" alt="cup" />
          <img
            src="~/assets/img/services-right-image/flower-top.png"
            alt="flower"
          />
          <img
            src="~/assets/img/services-right-image/head-phone.png"
            alt="head-phone"
          />
          <img
            src="~/assets/img/services-right-image/monitor.png"
            alt="monitor"
          />
          <img src="~/assets/img/services-right-image/mug.png" alt="mug" />
          <img src="~/assets/img/services-right-image/table.png" alt="table" />
          <img
            src="~/assets/img/services-right-image/tissue.png"
            alt="tissue"
          />
          <img
            src="~/assets/img/services-right-image/water-bottle.png"
            alt="water-bottle"
          />
          <img src="~/assets/img/services-right-image/wifi.png" alt="wifi" />
          <img
            src="~/assets/img/services-right-image/cercle-shape.png"
            class="bg-image rotateme"
            alt="shape"
          />

          <img
            src="~/assets/img/services-right-image/main-pic.png"
            alt="main-pic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: ["heading"],
};
</script>