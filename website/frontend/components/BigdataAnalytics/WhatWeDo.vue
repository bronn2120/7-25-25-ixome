<template>
  <div class="what-we-do-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>What We Do</h2>
        <div class="bar"></div>
        <p>
          At IXome.ai, we simplify smart home management with AI-driven tools tailored for Control4 and Lutron users.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-monitor"></i>
            </div>
            <h3><NuxtLink to="/services">Smart Home Troubleshooting</NuxtLink></h3>
            <p>
              Get fast fixes for common issues using our chatbot, saving you time and frustration.
            </p>
            <NuxtLink to="/services" class="link">Control4 Solutions</NuxtLink>
            <NuxtLink to="/services" class="link">Lutron Fixes</NuxtLink>
            <NuxtLink to="/services" class="read-more-btn">
              <ArrowRightIcon></ArrowRightIcon>Read More
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-idea"></i>
            </div>
            <h3><NuxtLink to="/pricing">Flexible Subscriptions</NuxtLink></h3>
            <p>
              Choose a plan that fits your needs, with tokens for on-demand support whenever you need it.
            </p>
            <NuxtLink to="/pricing" class="link">Basic Plan</NuxtLink>
            <NuxtLink to="/pricing" class="link">Pro Plan</NuxtLink>
            <NuxtLink to="/pricing" class="read-more-btn">
              <ArrowRightIcon></ArrowRightIcon>Read More
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="single-what-we-do-box">
            <div class="icon">
              <i class="flaticon-software"></i>
            </div>
            <h3><NuxtLink to="/about">Agentic Automation</NuxtLink></h3>
            <p>
              Our AI agents handle updates and tasks automatically, so your system stays current without effort.
            </p>
            <NuxtLink to="/about" class="link">CEO Agent</NuxtLink>
            <NuxtLink to="/about" class="link">Content Agent</NuxtLink>
            <NuxtLink to="/about" class="read-more-btn">
              <ArrowRightIcon></ArrowRightIcon>Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatWeDo",
};
</script>