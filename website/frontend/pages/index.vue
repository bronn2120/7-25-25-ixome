<template>
  <div>
    <BigdataAnalyticsMainBanner />
    <BigdataAnalyticsWhatWeDo />
    <BigdataAnalyticsDiscover />
    <BigdataAnalyticsServices />
    <BigdataAnalyticsTeam />
    <BigdataAnalyticsFunFacts />
    <BigdataAnalyticsFeedback />
    <BigdataAnalyticsIndustries />
    <BigdataAnalyticsOurRecentStory />
    <BigdataAnalyticsStartYourFreeTrial />

    <!-- Floating Chat Button -->
    <router-link
      v-if="showChatButton"
      to="/support"
      class="floating-chat-button"
      role="button"
      aria-label="Open support chat with ixome.ai"
    >
      <span>Chat with Us</span>
    </router-link>

    <!-- Simple Chatbot Widget on every page -->
    <div class="chat-widget">
      <input v-model="query" type="text" placeholder="Quick question?">
      <button @click="sendQuery">Ask</button>
      <p v-if="response">{{ response }}</p>
    </div>
  </div>
</template>

<script>
import BigdataAnalyticsMainBanner from '~/components/BigdataAnalytics/MainBanner.vue';
import BigdataAnalyticsWhatWeDo from '~/components/BigdataAnalytics/WhatWeDo.vue';
import BigdataAnalyticsDiscover from '~/components/BigdataAnalytics/Discover.vue';
import BigdataAnalyticsServices from '~/components/BigdataAnalytics/Services.vue';
import BigdataAnalyticsTeam from '~/components/BigdataAnalytics/Team.vue';
import BigdataAnalyticsFunFacts from '~/components/BigdataAnalytics/FunFacts.vue';
import BigdataAnalyticsFeedback from '~/components/BigdataAnalytics/Feedback.vue';
import BigdataAnalyticsIndustries from '~/components/BigdataAnalytics/Industries.vue';
import BigdataAnalyticsOurRecentStory from '~/components/BigdataAnalytics/OurRecentStory.vue';
import BigdataAnalyticsStartYourFreeTrial from '~/components/BigdataAnalytics/StartYourFreeTrial.vue';

export default {
  name: 'HomePage',
  components: {
    BigdataAnalyticsMainBanner,
    BigdataAnalyticsWhatWeDo,
    BigdataAnalyticsDiscover,
    BigdataAnalyticsServices,
    BigdataAnalyticsTeam,
    BigdataAnalyticsFunFacts,
    BigdataAnalyticsFeedback,
    BigdataAnalyticsIndustries,
    BigdataAnalyticsOurRecentStory,
    BigdataAnalyticsStartYourFreeTrial
  },
  data() {
    return {
      boxes: [],
      query: '',
      response: ''
    }
  },
  computed: {
    showChatButton() {
      return this.$route.path !== '/support';
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/homepage_data')
      this.boxes = response.data.boxes || []
    } catch (e) {
      console.error('Error fetching homepage data:', e)
    }
  },
  methods: {
    async sendQuery() {
      if (!this.query) return
      try {
        const res = await this.$axios.post('/process', {
          input_type: 'text',
          input_data: this.query
        })
        this.response = res.data.result || 'Error: No response'
      } catch (e) {
        this.response = 'Error: Failed to send query'
      }
    }
  },
  head() {
    return {
      title: 'IXome.ai - Smart Home Chatbot Subscriptions',
      meta: [
        { name: 'description', content: 'Subscribe to our AI chatbot for Control4 and Lutron troubleshooting.' },
        { name: 'keywords', content: 'smart home chatbot, Control4, Lutron, troubleshooting, subscription' }
      ]
    }
  }
}
</script>

<style scoped>
.floating-chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff; /* Pasona blue */
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
  z-index: 1000;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.floating-chat-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.floating-chat-button:focus {
  outline: 3px solid #0056b3;
  outline-offset: 2px;
  background-color: #0056b3;
}

.floating-chat-button span {
  display: inline-block;
  text-align: center;
  font-weight: 500;
}

@media (max-width: 768px) {
  .floating-chat-button {
    bottom: 10px;
    right: 10px;
    padding: 10px 18px;
    font-size: 1rem;
  }
}

.chat-widget {
  position: fixed;
  bottom: 80px; /* Above floating button */
  right: 20px;
  background: white;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 999;
}
</style>