<template>
  <div class="feedback-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>What users Saying</h2>
        <div class="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="feedback-slides">
        <div class="client-feedback">
          <div>
            <slick ref="slick" :options="slickOptions" :asNavFor="$refs.slick2">
              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/1.jpg" alt="image" />
                    <h3>John Lucy</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/2.jpg" alt="image" />
                    <h3>John Smith</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/3.jpg" alt="image" />
                    <h3>Maxwel Warner</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/4.jpg" alt="image" />
                    <h3>Ross Taylor</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/5.jpg" alt="image" />
                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/1.jpg" alt="image" />
                    <h3>Steven Smith</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/2.jpg" alt="image" />
                    <h3>Steven Lucy</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="item">
                <div class="single-repair-feedback">
                  <div class="client-img">
                    <img src="~/assets/img/client-image/3.jpg" alt="image" />
                    <h3>John Terry</h3>
                    <span>Web Developer</span>
                  </div>

                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </slick>
          </div>
        </div>

        <div class="client-thumbnails">
          <div>
            <slick
              ref="slick2"
              :asNavFor="$refs.slick"
              :options="slickOptions2"
            >
              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/1.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/2.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/3.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/4.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/5.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/1.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/2.jpg" alt="client" />
                </div>
              </div>

              <div class="item">
                <div class="img-fill">
                  <img src="~/assets/img/client-image/3.jpg" alt="client" />
                </div>
              </div>
            </slick>
          </div>

          <button class="prev-arrow slick-arrow">
            <ArrowLeftIcon></ArrowLeftIcon>
          </button>

          <button class="next-arrow slick-arrow">
            <ArrowRightIcon></ArrowRightIcon>
          </button>
        </div>
      </div>
    </div>

    <div class="shape1"><img src="~/assets/img/shape1.png" alt="shape" /></div>
    <div class="shape2 rotateme">
      <img src="~/assets/img/shape2.svg" alt="shape" />
    </div>
    <div class="shape4"><img src="~/assets/img/shape4.svg" alt="shape" /></div>
    <div class="shape5"><img src="~/assets/img/shape5.png" alt="shape" /></div>
    <div class="shape6 rotateme">
      <img src="~/assets/img/shape4.svg" alt="shape" />
    </div>
    <div class="shape7"><img src="~/assets/img/shape4.svg" alt="shape" /></div>
    <div class="shape8 rotateme">
      <img src="~/assets/img/shape2.svg" alt="shape" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
};
</script>