
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AboutStyleOneAbout': typeof import("../components/AboutStyleOne/About.vue")['default']
    'AboutStyleThreeAboutThree': typeof import("../components/AboutStyleThree/AboutThree.vue")['default']
    'AboutStyleThreeFeedbackTwo': typeof import("../components/AboutStyleThree/FeedbackTwo.vue")['default']
    'AboutStyleTwoAboutTwo': typeof import("../components/AboutStyleTwo/AboutTwo.vue")['default']
    'AboutStyleTwoFeedback': typeof import("../components/AboutStyleTwo/Feedback.vue")['default']
    'AgencyPortfolioAbout': typeof import("../components/AgencyPortfolio/About.vue")['default']
    'AgencyPortfolioCreative': typeof import("../components/AgencyPortfolio/Creative.vue")['default']
    'AgencyPortfolioFeedback': typeof import("../components/AgencyPortfolio/Feedback.vue")['default']
    'AgencyPortfolioMainBanner': typeof import("../components/AgencyPortfolio/MainBanner.vue")['default']
    'AgencyPortfolioOurLatestProjects': typeof import("../components/AgencyPortfolio/OurLatestProjects.vue")['default']
    'AgencyPortfolioOurRecentNews': typeof import("../components/AgencyPortfolio/OurRecentNews.vue")['default']
    'AgencyPortfolioPartner': typeof import("../components/AgencyPortfolio/Partner.vue")['default']
    'AiMachineLearningClientsFeedback': typeof import("../components/AiMachineLearning/ClientsFeedback.vue")['default']
    'AiMachineLearningMainBanner': typeof import("../components/AiMachineLearning/MainBanner.vue")['default']
    'AiMachineLearningOurRecentStory': typeof import("../components/AiMachineLearning/OurRecentStory.vue")['default']
    'AiMachineLearningOurServices': typeof import("../components/AiMachineLearning/OurServices.vue")['default']
    'BigdataAnalyticsDiscover': typeof import("../components/BigdataAnalytics/Discover.vue")['default']
    'BigdataAnalyticsFeedback': typeof import("../components/BigdataAnalytics/Feedback.vue")['default']
    'BigdataAnalyticsFunFacts': typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']
    'BigdataAnalyticsIndustries': typeof import("../components/BigdataAnalytics/Industries.vue")['default']
    'BigdataAnalyticsMainBanner': typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']
    'BigdataAnalyticsOurRecentStory': typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']
    'BigdataAnalyticsServices': typeof import("../components/BigdataAnalytics/Services.vue")['default']
    'BigdataAnalyticsStartYourFreeTrial': typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']
    'BigdataAnalyticsTeam': typeof import("../components/BigdataAnalytics/Team.vue")['default']
    'BigdataAnalyticsWhatWeDo': typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']
    'BlogDetails': typeof import("../components/BlogDetails/BlogDetails.vue")['default']
    'BlogGrid': typeof import("../components/BlogGrid/BlogGrid.vue")['default']
    'BlogGridThree': typeof import("../components/BlogGridThree/BlogGridThree.vue")['default']
    'BlogGridTwo': typeof import("../components/BlogGridTwo/BlogGridTwo.vue")['default']
    'BlogRightSidebar': typeof import("../components/BlogRightSidebar/BlogRightSidebar.vue")['default']
    'BlogRightSidebarThree': typeof import("../components/BlogRightSidebarThree/BlogRightSidebarThree.vue")['default']
    'BlogRightSidebarTwo': typeof import("../components/BlogRightSidebarTwo/BlogRightSidebarTwo.vue")['default']
    'Cart': typeof import("../components/Cart/Cart.vue")['default']
    'Checkout': typeof import("../components/Checkout/Checkout.vue")['default']
    'ComingSoon': typeof import("../components/ComingSoon/ComingSoon.vue")['default']
    'CommonAbout': typeof import("../components/Common/About.vue")['default']
    'CommonBlog': typeof import("../components/Common/Blog.vue")['default']
    'CommonBlogItems': typeof import("../components/Common/BlogItems.vue")['default']
    'CommonBlogSidebar': typeof import("../components/Common/BlogSidebar.vue")['default']
    'CommonFeedback': typeof import("../components/Common/Feedback.vue")['default']
    'CommonFunfacts': typeof import("../components/Common/Funfacts.vue")['default']
    'CommonMachinePricing': typeof import("../components/Common/MachinePricing.vue")['default']
    'CommonPageTitle': typeof import("../components/Common/PageTitle.vue")['default']
    'CommonPartner': typeof import("../components/Common/Partner.vue")['default']
    'CommonPartnerTwo': typeof import("../components/Common/PartnerTwo.vue")['default']
    'CommonPricing': typeof import("../components/Common/Pricing.vue")['default']
    'CommonProjects': typeof import("../components/Common/Projects.vue")['default']
    'CommonReadyToTalk': typeof import("../components/Common/ReadyToTalk.vue")['default']
    'CommonServices': typeof import("../components/Common/Services.vue")['default']
    'CommonServicesArea': typeof import("../components/Common/ServicesArea.vue")['default']
    'CommonSolutions': typeof import("../components/Common/Solutions.vue")['default']
    'CommonTeam': typeof import("../components/Common/Team.vue")['default']
    'CommonTrial': typeof import("../components/Common/Trial.vue")['default']
    'CommonAccordionItem': typeof import("../components/Common/accordion-item.vue")['default']
    'CommonAccordion': typeof import("../components/Common/accordion.vue")['default']
    'ContactArea': typeof import("../components/Contact/ContactArea.vue")['default']
    'ContactInfo': typeof import("../components/Contact/ContactInfo.vue")['default']
    'DeveloperBoxesArea': typeof import("../components/Developer/BoxesArea.vue")['default']
    'DeveloperFeatherIcon': typeof import("../components/Developer/FeatherIcon.vue")['default']
    'DeveloperMainBanner': typeof import("../components/Developer/MainBanner.vue")['default']
    'DeveloperOurServices': typeof import("../components/Developer/OurServices.vue")['default']
    'DigitalAgencyAbout': typeof import("../components/DigitalAgency/About.vue")['default']
    'DigitalAgencyBlog': typeof import("../components/DigitalAgency/Blog.vue")['default']
    'DigitalAgencyCtaArea': typeof import("../components/DigitalAgency/CtaArea.vue")['default']
    'DigitalAgencyFeedback': typeof import("../components/DigitalAgency/Feedback.vue")['default']
    'DigitalAgencyMainBanner': typeof import("../components/DigitalAgency/MainBanner.vue")['default']
    'DigitalAgencyPricing': typeof import("../components/DigitalAgency/Pricing.vue")['default']
    'DigitalAgencyServices': typeof import("../components/DigitalAgency/Services.vue")['default']
    'DigitalAgencySolutions': typeof import("../components/DigitalAgency/Solutions.vue")['default']
    'FaqArea': typeof import("../components/Faq/FaqArea.vue")['default']
    'FeaturesArea': typeof import("../components/Features/FeaturesArea.vue")['default']
    'FeaturesDetails': typeof import("../components/FeaturesDetails/FeaturesDetails.vue")['default']
    'FeedbackOne': typeof import("../components/Feedback/FeedbackOne.vue")['default']
    'FeedbackThree': typeof import("../components/Feedback/FeedbackThree.vue")['default']
    'FeedbackTwo': typeof import("../components/Feedback/FeedbackTwo.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'HeaderFive': typeof import("../components/Header/HeaderFive.vue")['default']
    'IndexBoxesArea': typeof import("../components/Index/BoxesArea.vue")['default']
    'IndexFeatures': typeof import("../components/Index/Features.vue")['default']
    'IndexMainBanner': typeof import("../components/Index/MainBanner.vue")['default']
    'IndexWorks': typeof import("../components/Index/Works.vue")['default']
    'IndexWorksSlides': typeof import("../components/Index/WorksSlides.vue")['default']
    'IotFeatures': typeof import("../components/Iot/Features.vue")['default']
    'IotFeaturesTwo': typeof import("../components/Iot/FeaturesTwo.vue")['default']
    'IotCta': typeof import("../components/Iot/IotCta.vue")['default']
    'IotServices': typeof import("../components/Iot/IotServices.vue")['default']
    'IotTeam': typeof import("../components/Iot/IotTeam.vue")['default']
    'IotMainBanner': typeof import("../components/Iot/MainBanner.vue")['default']
    'IotWhyChooseUs': typeof import("../components/Iot/WhyChooseUs.vue")['default']
    'MachineLearningClientsFeedback': typeof import("../components/MachineLearning/ClientsFeedback.vue")['default']
    'MachineLearningMainBanner': typeof import("../components/MachineLearning/MainBanner.vue")['default']
    'MachineLearningOurRecentStory': typeof import("../components/MachineLearning/OurRecentStory.vue")['default']
    'MachineLearningOurServices': typeof import("../components/MachineLearning/OurServices.vue")['default']
    'PricingTwo': typeof import("../components/Pricing/PricingTwo.vue")['default']
    'ProductsDetails': typeof import("../components/ProductsDetails/ProductsDetails.vue")['default']
    'ProjectDetails': typeof import("../components/ProjectDetails/ProjectDetails.vue")['default']
    'ProjectStyleOne': typeof import("../components/ProjectStyleOne/ProjectStyleOne.vue")['default']
    'ProjectStyleTwo': typeof import("../components/ProjectStyleTwo/ProjectStyleTwo.vue")['default']
    'RepairCenterAbout': typeof import("../components/RepairCenter/About.vue")['default']
    'RepairCenterCta': typeof import("../components/RepairCenter/Cta.vue")['default']
    'RepairCenterFeedback': typeof import("../components/RepairCenter/Feedback.vue")['default']
    'RepairCenterMainBanner': typeof import("../components/RepairCenter/MainBanner.vue")['default']
    'RepairCenterRepairServices': typeof import("../components/RepairCenter/RepairServices.vue")['default']
    'RepairCenterRepairTeam': typeof import("../components/RepairCenter/RepairTeam.vue")['default']
    'RepairCenterWhyChooseUs': typeof import("../components/RepairCenter/WhyChooseUs.vue")['default']
    'ServiceStyleFiveServicesFive': typeof import("../components/ServiceStyleFive/ServicesFive.vue")['default']
    'ServiceStyleFourServicesFour': typeof import("../components/ServiceStyleFour/ServicesFour.vue")['default']
    'ServiceStyleOneServicesOne': typeof import("../components/ServiceStyleOne/ServicesOne.vue")['default']
    'ServiceStyleThreeServicesThree': typeof import("../components/ServiceStyleThree/ServicesThree.vue")['default']
    'ServiceStyleTwoServicesTwo': typeof import("../components/ServiceStyleTwo/ServicesTwo.vue")['default']
    'ServicesDetails': typeof import("../components/ServicesDetails/ServicesDetails.vue")['default']
    'Shop': typeof import("../components/Shop/Shop.vue")['default']
    'StaticImageOneBoxesArea': typeof import("../components/StaticImageOne/BoxesArea.vue")['default']
    'StaticImageOneFeatures': typeof import("../components/StaticImageOne/Features.vue")['default']
    'StaticImageOneMainBanner': typeof import("../components/StaticImageOne/MainBanner.vue")['default']
    'StaticImageOneServices': typeof import("../components/StaticImageOne/Services.vue")['default']
    'StaticImageOneServicesArea': typeof import("../components/StaticImageOne/ServicesArea.vue")['default']
    'StaticImageOneWorks': typeof import("../components/StaticImageOne/Works.vue")['default']
    'StaticImageThreeBoxesArea': typeof import("../components/StaticImageThree/BoxesArea.vue")['default']
    'StaticImageThreeCTAArea': typeof import("../components/StaticImageThree/CTAArea.vue")['default']
    'StaticImageThreeDomainSearch': typeof import("../components/StaticImageThree/DomainSearch.vue")['default']
    'StaticImageThreeFeedback': typeof import("../components/StaticImageThree/Feedback.vue")['default']
    'StaticImageThreeHostingFeatures': typeof import("../components/StaticImageThree/HostingFeatures.vue")['default']
    'StaticImageThreeMainBanner': typeof import("../components/StaticImageThree/MainBanner.vue")['default']
    'StaticImageThreePricingPlans': typeof import("../components/StaticImageThree/PricingPlans.vue")['default']
    'StaticImageThreeWhyChooseUs': typeof import("../components/StaticImageThree/WhyChooseUs.vue")['default']
    'StaticImageTwoBoxesArea': typeof import("../components/StaticImageTwo/BoxesArea.vue")['default']
    'StaticImageTwoMainBanner': typeof import("../components/StaticImageTwo/MainBanner.vue")['default']
    'StaticImageTwoOurServices': typeof import("../components/StaticImageTwo/OurServices.vue")['default']
    'StaticImageTwoServices': typeof import("../components/StaticImageTwo/Services.vue")['default']
    'StaticImageTwoServicesArea': typeof import("../components/StaticImageTwo/ServicesArea.vue")['default']
    'Team': typeof import("../components/Team/Team.vue")['default']
    'WebHostingBoxesArea': typeof import("../components/WebHosting/BoxesArea.vue")['default']
    'WebHostingCTAArea': typeof import("../components/WebHosting/CTAArea.vue")['default']
    'WebHostingDomainSearch': typeof import("../components/WebHosting/DomainSearch.vue")['default']
    'WebHostingFeedback': typeof import("../components/WebHosting/Feedback.vue")['default']
    'WebHostingFeatures': typeof import("../components/WebHosting/HostingFeatures.vue")['default']
    'WebHostingMainBanner': typeof import("../components/WebHosting/MainBanner.vue")['default']
    'WebHostingPricingPlans': typeof import("../components/WebHosting/PricingPlans.vue")['default']
    'WebHostingWhyChooseUs': typeof import("../components/WebHosting/WhyChooseUs.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAboutStyleOneAbout': LazyComponent<typeof import("../components/AboutStyleOne/About.vue")['default']>
    'LazyAboutStyleThreeAboutThree': LazyComponent<typeof import("../components/AboutStyleThree/AboutThree.vue")['default']>
    'LazyAboutStyleThreeFeedbackTwo': LazyComponent<typeof import("../components/AboutStyleThree/FeedbackTwo.vue")['default']>
    'LazyAboutStyleTwoAboutTwo': LazyComponent<typeof import("../components/AboutStyleTwo/AboutTwo.vue")['default']>
    'LazyAboutStyleTwoFeedback': LazyComponent<typeof import("../components/AboutStyleTwo/Feedback.vue")['default']>
    'LazyAgencyPortfolioAbout': LazyComponent<typeof import("../components/AgencyPortfolio/About.vue")['default']>
    'LazyAgencyPortfolioCreative': LazyComponent<typeof import("../components/AgencyPortfolio/Creative.vue")['default']>
    'LazyAgencyPortfolioFeedback': LazyComponent<typeof import("../components/AgencyPortfolio/Feedback.vue")['default']>
    'LazyAgencyPortfolioMainBanner': LazyComponent<typeof import("../components/AgencyPortfolio/MainBanner.vue")['default']>
    'LazyAgencyPortfolioOurLatestProjects': LazyComponent<typeof import("../components/AgencyPortfolio/OurLatestProjects.vue")['default']>
    'LazyAgencyPortfolioOurRecentNews': LazyComponent<typeof import("../components/AgencyPortfolio/OurRecentNews.vue")['default']>
    'LazyAgencyPortfolioPartner': LazyComponent<typeof import("../components/AgencyPortfolio/Partner.vue")['default']>
    'LazyAiMachineLearningClientsFeedback': LazyComponent<typeof import("../components/AiMachineLearning/ClientsFeedback.vue")['default']>
    'LazyAiMachineLearningMainBanner': LazyComponent<typeof import("../components/AiMachineLearning/MainBanner.vue")['default']>
    'LazyAiMachineLearningOurRecentStory': LazyComponent<typeof import("../components/AiMachineLearning/OurRecentStory.vue")['default']>
    'LazyAiMachineLearningOurServices': LazyComponent<typeof import("../components/AiMachineLearning/OurServices.vue")['default']>
    'LazyBigdataAnalyticsDiscover': LazyComponent<typeof import("../components/BigdataAnalytics/Discover.vue")['default']>
    'LazyBigdataAnalyticsFeedback': LazyComponent<typeof import("../components/BigdataAnalytics/Feedback.vue")['default']>
    'LazyBigdataAnalyticsFunFacts': LazyComponent<typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']>
    'LazyBigdataAnalyticsIndustries': LazyComponent<typeof import("../components/BigdataAnalytics/Industries.vue")['default']>
    'LazyBigdataAnalyticsMainBanner': LazyComponent<typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']>
    'LazyBigdataAnalyticsOurRecentStory': LazyComponent<typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']>
    'LazyBigdataAnalyticsServices': LazyComponent<typeof import("../components/BigdataAnalytics/Services.vue")['default']>
    'LazyBigdataAnalyticsStartYourFreeTrial': LazyComponent<typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']>
    'LazyBigdataAnalyticsTeam': LazyComponent<typeof import("../components/BigdataAnalytics/Team.vue")['default']>
    'LazyBigdataAnalyticsWhatWeDo': LazyComponent<typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']>
    'LazyBlogDetails': LazyComponent<typeof import("../components/BlogDetails/BlogDetails.vue")['default']>
    'LazyBlogGrid': LazyComponent<typeof import("../components/BlogGrid/BlogGrid.vue")['default']>
    'LazyBlogGridThree': LazyComponent<typeof import("../components/BlogGridThree/BlogGridThree.vue")['default']>
    'LazyBlogGridTwo': LazyComponent<typeof import("../components/BlogGridTwo/BlogGridTwo.vue")['default']>
    'LazyBlogRightSidebar': LazyComponent<typeof import("../components/BlogRightSidebar/BlogRightSidebar.vue")['default']>
    'LazyBlogRightSidebarThree': LazyComponent<typeof import("../components/BlogRightSidebarThree/BlogRightSidebarThree.vue")['default']>
    'LazyBlogRightSidebarTwo': LazyComponent<typeof import("../components/BlogRightSidebarTwo/BlogRightSidebarTwo.vue")['default']>
    'LazyCart': LazyComponent<typeof import("../components/Cart/Cart.vue")['default']>
    'LazyCheckout': LazyComponent<typeof import("../components/Checkout/Checkout.vue")['default']>
    'LazyComingSoon': LazyComponent<typeof import("../components/ComingSoon/ComingSoon.vue")['default']>
    'LazyCommonAbout': LazyComponent<typeof import("../components/Common/About.vue")['default']>
    'LazyCommonBlog': LazyComponent<typeof import("../components/Common/Blog.vue")['default']>
    'LazyCommonBlogItems': LazyComponent<typeof import("../components/Common/BlogItems.vue")['default']>
    'LazyCommonBlogSidebar': LazyComponent<typeof import("../components/Common/BlogSidebar.vue")['default']>
    'LazyCommonFeedback': LazyComponent<typeof import("../components/Common/Feedback.vue")['default']>
    'LazyCommonFunfacts': LazyComponent<typeof import("../components/Common/Funfacts.vue")['default']>
    'LazyCommonMachinePricing': LazyComponent<typeof import("../components/Common/MachinePricing.vue")['default']>
    'LazyCommonPageTitle': LazyComponent<typeof import("../components/Common/PageTitle.vue")['default']>
    'LazyCommonPartner': LazyComponent<typeof import("../components/Common/Partner.vue")['default']>
    'LazyCommonPartnerTwo': LazyComponent<typeof import("../components/Common/PartnerTwo.vue")['default']>
    'LazyCommonPricing': LazyComponent<typeof import("../components/Common/Pricing.vue")['default']>
    'LazyCommonProjects': LazyComponent<typeof import("../components/Common/Projects.vue")['default']>
    'LazyCommonReadyToTalk': LazyComponent<typeof import("../components/Common/ReadyToTalk.vue")['default']>
    'LazyCommonServices': LazyComponent<typeof import("../components/Common/Services.vue")['default']>
    'LazyCommonServicesArea': LazyComponent<typeof import("../components/Common/ServicesArea.vue")['default']>
    'LazyCommonSolutions': LazyComponent<typeof import("../components/Common/Solutions.vue")['default']>
    'LazyCommonTeam': LazyComponent<typeof import("../components/Common/Team.vue")['default']>
    'LazyCommonTrial': LazyComponent<typeof import("../components/Common/Trial.vue")['default']>
    'LazyCommonAccordionItem': LazyComponent<typeof import("../components/Common/accordion-item.vue")['default']>
    'LazyCommonAccordion': LazyComponent<typeof import("../components/Common/accordion.vue")['default']>
    'LazyContactArea': LazyComponent<typeof import("../components/Contact/ContactArea.vue")['default']>
    'LazyContactInfo': LazyComponent<typeof import("../components/Contact/ContactInfo.vue")['default']>
    'LazyDeveloperBoxesArea': LazyComponent<typeof import("../components/Developer/BoxesArea.vue")['default']>
    'LazyDeveloperFeatherIcon': LazyComponent<typeof import("../components/Developer/FeatherIcon.vue")['default']>
    'LazyDeveloperMainBanner': LazyComponent<typeof import("../components/Developer/MainBanner.vue")['default']>
    'LazyDeveloperOurServices': LazyComponent<typeof import("../components/Developer/OurServices.vue")['default']>
    'LazyDigitalAgencyAbout': LazyComponent<typeof import("../components/DigitalAgency/About.vue")['default']>
    'LazyDigitalAgencyBlog': LazyComponent<typeof import("../components/DigitalAgency/Blog.vue")['default']>
    'LazyDigitalAgencyCtaArea': LazyComponent<typeof import("../components/DigitalAgency/CtaArea.vue")['default']>
    'LazyDigitalAgencyFeedback': LazyComponent<typeof import("../components/DigitalAgency/Feedback.vue")['default']>
    'LazyDigitalAgencyMainBanner': LazyComponent<typeof import("../components/DigitalAgency/MainBanner.vue")['default']>
    'LazyDigitalAgencyPricing': LazyComponent<typeof import("../components/DigitalAgency/Pricing.vue")['default']>
    'LazyDigitalAgencyServices': LazyComponent<typeof import("../components/DigitalAgency/Services.vue")['default']>
    'LazyDigitalAgencySolutions': LazyComponent<typeof import("../components/DigitalAgency/Solutions.vue")['default']>
    'LazyFaqArea': LazyComponent<typeof import("../components/Faq/FaqArea.vue")['default']>
    'LazyFeaturesArea': LazyComponent<typeof import("../components/Features/FeaturesArea.vue")['default']>
    'LazyFeaturesDetails': LazyComponent<typeof import("../components/FeaturesDetails/FeaturesDetails.vue")['default']>
    'LazyFeedbackOne': LazyComponent<typeof import("../components/Feedback/FeedbackOne.vue")['default']>
    'LazyFeedbackThree': LazyComponent<typeof import("../components/Feedback/FeedbackThree.vue")['default']>
    'LazyFeedbackTwo': LazyComponent<typeof import("../components/Feedback/FeedbackTwo.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeaderFive': LazyComponent<typeof import("../components/Header/HeaderFive.vue")['default']>
    'LazyIndexBoxesArea': LazyComponent<typeof import("../components/Index/BoxesArea.vue")['default']>
    'LazyIndexFeatures': LazyComponent<typeof import("../components/Index/Features.vue")['default']>
    'LazyIndexMainBanner': LazyComponent<typeof import("../components/Index/MainBanner.vue")['default']>
    'LazyIndexWorks': LazyComponent<typeof import("../components/Index/Works.vue")['default']>
    'LazyIndexWorksSlides': LazyComponent<typeof import("../components/Index/WorksSlides.vue")['default']>
    'LazyIotFeatures': LazyComponent<typeof import("../components/Iot/Features.vue")['default']>
    'LazyIotFeaturesTwo': LazyComponent<typeof import("../components/Iot/FeaturesTwo.vue")['default']>
    'LazyIotCta': LazyComponent<typeof import("../components/Iot/IotCta.vue")['default']>
    'LazyIotServices': LazyComponent<typeof import("../components/Iot/IotServices.vue")['default']>
    'LazyIotTeam': LazyComponent<typeof import("../components/Iot/IotTeam.vue")['default']>
    'LazyIotMainBanner': LazyComponent<typeof import("../components/Iot/MainBanner.vue")['default']>
    'LazyIotWhyChooseUs': LazyComponent<typeof import("../components/Iot/WhyChooseUs.vue")['default']>
    'LazyMachineLearningClientsFeedback': LazyComponent<typeof import("../components/MachineLearning/ClientsFeedback.vue")['default']>
    'LazyMachineLearningMainBanner': LazyComponent<typeof import("../components/MachineLearning/MainBanner.vue")['default']>
    'LazyMachineLearningOurRecentStory': LazyComponent<typeof import("../components/MachineLearning/OurRecentStory.vue")['default']>
    'LazyMachineLearningOurServices': LazyComponent<typeof import("../components/MachineLearning/OurServices.vue")['default']>
    'LazyPricingTwo': LazyComponent<typeof import("../components/Pricing/PricingTwo.vue")['default']>
    'LazyProductsDetails': LazyComponent<typeof import("../components/ProductsDetails/ProductsDetails.vue")['default']>
    'LazyProjectDetails': LazyComponent<typeof import("../components/ProjectDetails/ProjectDetails.vue")['default']>
    'LazyProjectStyleOne': LazyComponent<typeof import("../components/ProjectStyleOne/ProjectStyleOne.vue")['default']>
    'LazyProjectStyleTwo': LazyComponent<typeof import("../components/ProjectStyleTwo/ProjectStyleTwo.vue")['default']>
    'LazyRepairCenterAbout': LazyComponent<typeof import("../components/RepairCenter/About.vue")['default']>
    'LazyRepairCenterCta': LazyComponent<typeof import("../components/RepairCenter/Cta.vue")['default']>
    'LazyRepairCenterFeedback': LazyComponent<typeof import("../components/RepairCenter/Feedback.vue")['default']>
    'LazyRepairCenterMainBanner': LazyComponent<typeof import("../components/RepairCenter/MainBanner.vue")['default']>
    'LazyRepairCenterRepairServices': LazyComponent<typeof import("../components/RepairCenter/RepairServices.vue")['default']>
    'LazyRepairCenterRepairTeam': LazyComponent<typeof import("../components/RepairCenter/RepairTeam.vue")['default']>
    'LazyRepairCenterWhyChooseUs': LazyComponent<typeof import("../components/RepairCenter/WhyChooseUs.vue")['default']>
    'LazyServiceStyleFiveServicesFive': LazyComponent<typeof import("../components/ServiceStyleFive/ServicesFive.vue")['default']>
    'LazyServiceStyleFourServicesFour': LazyComponent<typeof import("../components/ServiceStyleFour/ServicesFour.vue")['default']>
    'LazyServiceStyleOneServicesOne': LazyComponent<typeof import("../components/ServiceStyleOne/ServicesOne.vue")['default']>
    'LazyServiceStyleThreeServicesThree': LazyComponent<typeof import("../components/ServiceStyleThree/ServicesThree.vue")['default']>
    'LazyServiceStyleTwoServicesTwo': LazyComponent<typeof import("../components/ServiceStyleTwo/ServicesTwo.vue")['default']>
    'LazyServicesDetails': LazyComponent<typeof import("../components/ServicesDetails/ServicesDetails.vue")['default']>
    'LazyShop': LazyComponent<typeof import("../components/Shop/Shop.vue")['default']>
    'LazyStaticImageOneBoxesArea': LazyComponent<typeof import("../components/StaticImageOne/BoxesArea.vue")['default']>
    'LazyStaticImageOneFeatures': LazyComponent<typeof import("../components/StaticImageOne/Features.vue")['default']>
    'LazyStaticImageOneMainBanner': LazyComponent<typeof import("../components/StaticImageOne/MainBanner.vue")['default']>
    'LazyStaticImageOneServices': LazyComponent<typeof import("../components/StaticImageOne/Services.vue")['default']>
    'LazyStaticImageOneServicesArea': LazyComponent<typeof import("../components/StaticImageOne/ServicesArea.vue")['default']>
    'LazyStaticImageOneWorks': LazyComponent<typeof import("../components/StaticImageOne/Works.vue")['default']>
    'LazyStaticImageThreeBoxesArea': LazyComponent<typeof import("../components/StaticImageThree/BoxesArea.vue")['default']>
    'LazyStaticImageThreeCTAArea': LazyComponent<typeof import("../components/StaticImageThree/CTAArea.vue")['default']>
    'LazyStaticImageThreeDomainSearch': LazyComponent<typeof import("../components/StaticImageThree/DomainSearch.vue")['default']>
    'LazyStaticImageThreeFeedback': LazyComponent<typeof import("../components/StaticImageThree/Feedback.vue")['default']>
    'LazyStaticImageThreeHostingFeatures': LazyComponent<typeof import("../components/StaticImageThree/HostingFeatures.vue")['default']>
    'LazyStaticImageThreeMainBanner': LazyComponent<typeof import("../components/StaticImageThree/MainBanner.vue")['default']>
    'LazyStaticImageThreePricingPlans': LazyComponent<typeof import("../components/StaticImageThree/PricingPlans.vue")['default']>
    'LazyStaticImageThreeWhyChooseUs': LazyComponent<typeof import("../components/StaticImageThree/WhyChooseUs.vue")['default']>
    'LazyStaticImageTwoBoxesArea': LazyComponent<typeof import("../components/StaticImageTwo/BoxesArea.vue")['default']>
    'LazyStaticImageTwoMainBanner': LazyComponent<typeof import("../components/StaticImageTwo/MainBanner.vue")['default']>
    'LazyStaticImageTwoOurServices': LazyComponent<typeof import("../components/StaticImageTwo/OurServices.vue")['default']>
    'LazyStaticImageTwoServices': LazyComponent<typeof import("../components/StaticImageTwo/Services.vue")['default']>
    'LazyStaticImageTwoServicesArea': LazyComponent<typeof import("../components/StaticImageTwo/ServicesArea.vue")['default']>
    'LazyTeam': LazyComponent<typeof import("../components/Team/Team.vue")['default']>
    'LazyWebHostingBoxesArea': LazyComponent<typeof import("../components/WebHosting/BoxesArea.vue")['default']>
    'LazyWebHostingCTAArea': LazyComponent<typeof import("../components/WebHosting/CTAArea.vue")['default']>
    'LazyWebHostingDomainSearch': LazyComponent<typeof import("../components/WebHosting/DomainSearch.vue")['default']>
    'LazyWebHostingFeedback': LazyComponent<typeof import("../components/WebHosting/Feedback.vue")['default']>
    'LazyWebHostingFeatures': LazyComponent<typeof import("../components/WebHosting/HostingFeatures.vue")['default']>
    'LazyWebHostingMainBanner': LazyComponent<typeof import("../components/WebHosting/MainBanner.vue")['default']>
    'LazyWebHostingPricingPlans': LazyComponent<typeof import("../components/WebHosting/PricingPlans.vue")['default']>
    'LazyWebHostingWhyChooseUs': LazyComponent<typeof import("../components/WebHosting/WhyChooseUs.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutStyleOneAbout: typeof import("../components/AboutStyleOne/About.vue")['default']
export const AboutStyleThreeAboutThree: typeof import("../components/AboutStyleThree/AboutThree.vue")['default']
export const AboutStyleThreeFeedbackTwo: typeof import("../components/AboutStyleThree/FeedbackTwo.vue")['default']
export const AboutStyleTwoAboutTwo: typeof import("../components/AboutStyleTwo/AboutTwo.vue")['default']
export const AboutStyleTwoFeedback: typeof import("../components/AboutStyleTwo/Feedback.vue")['default']
export const AgencyPortfolioAbout: typeof import("../components/AgencyPortfolio/About.vue")['default']
export const AgencyPortfolioCreative: typeof import("../components/AgencyPortfolio/Creative.vue")['default']
export const AgencyPortfolioFeedback: typeof import("../components/AgencyPortfolio/Feedback.vue")['default']
export const AgencyPortfolioMainBanner: typeof import("../components/AgencyPortfolio/MainBanner.vue")['default']
export const AgencyPortfolioOurLatestProjects: typeof import("../components/AgencyPortfolio/OurLatestProjects.vue")['default']
export const AgencyPortfolioOurRecentNews: typeof import("../components/AgencyPortfolio/OurRecentNews.vue")['default']
export const AgencyPortfolioPartner: typeof import("../components/AgencyPortfolio/Partner.vue")['default']
export const AiMachineLearningClientsFeedback: typeof import("../components/AiMachineLearning/ClientsFeedback.vue")['default']
export const AiMachineLearningMainBanner: typeof import("../components/AiMachineLearning/MainBanner.vue")['default']
export const AiMachineLearningOurRecentStory: typeof import("../components/AiMachineLearning/OurRecentStory.vue")['default']
export const AiMachineLearningOurServices: typeof import("../components/AiMachineLearning/OurServices.vue")['default']
export const BigdataAnalyticsDiscover: typeof import("../components/BigdataAnalytics/Discover.vue")['default']
export const BigdataAnalyticsFeedback: typeof import("../components/BigdataAnalytics/Feedback.vue")['default']
export const BigdataAnalyticsFunFacts: typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']
export const BigdataAnalyticsIndustries: typeof import("../components/BigdataAnalytics/Industries.vue")['default']
export const BigdataAnalyticsMainBanner: typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']
export const BigdataAnalyticsOurRecentStory: typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']
export const BigdataAnalyticsServices: typeof import("../components/BigdataAnalytics/Services.vue")['default']
export const BigdataAnalyticsStartYourFreeTrial: typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']
export const BigdataAnalyticsTeam: typeof import("../components/BigdataAnalytics/Team.vue")['default']
export const BigdataAnalyticsWhatWeDo: typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']
export const BlogDetails: typeof import("../components/BlogDetails/BlogDetails.vue")['default']
export const BlogGrid: typeof import("../components/BlogGrid/BlogGrid.vue")['default']
export const BlogGridThree: typeof import("../components/BlogGridThree/BlogGridThree.vue")['default']
export const BlogGridTwo: typeof import("../components/BlogGridTwo/BlogGridTwo.vue")['default']
export const BlogRightSidebar: typeof import("../components/BlogRightSidebar/BlogRightSidebar.vue")['default']
export const BlogRightSidebarThree: typeof import("../components/BlogRightSidebarThree/BlogRightSidebarThree.vue")['default']
export const BlogRightSidebarTwo: typeof import("../components/BlogRightSidebarTwo/BlogRightSidebarTwo.vue")['default']
export const Cart: typeof import("../components/Cart/Cart.vue")['default']
export const Checkout: typeof import("../components/Checkout/Checkout.vue")['default']
export const ComingSoon: typeof import("../components/ComingSoon/ComingSoon.vue")['default']
export const CommonAbout: typeof import("../components/Common/About.vue")['default']
export const CommonBlog: typeof import("../components/Common/Blog.vue")['default']
export const CommonBlogItems: typeof import("../components/Common/BlogItems.vue")['default']
export const CommonBlogSidebar: typeof import("../components/Common/BlogSidebar.vue")['default']
export const CommonFeedback: typeof import("../components/Common/Feedback.vue")['default']
export const CommonFunfacts: typeof import("../components/Common/Funfacts.vue")['default']
export const CommonMachinePricing: typeof import("../components/Common/MachinePricing.vue")['default']
export const CommonPageTitle: typeof import("../components/Common/PageTitle.vue")['default']
export const CommonPartner: typeof import("../components/Common/Partner.vue")['default']
export const CommonPartnerTwo: typeof import("../components/Common/PartnerTwo.vue")['default']
export const CommonPricing: typeof import("../components/Common/Pricing.vue")['default']
export const CommonProjects: typeof import("../components/Common/Projects.vue")['default']
export const CommonReadyToTalk: typeof import("../components/Common/ReadyToTalk.vue")['default']
export const CommonServices: typeof import("../components/Common/Services.vue")['default']
export const CommonServicesArea: typeof import("../components/Common/ServicesArea.vue")['default']
export const CommonSolutions: typeof import("../components/Common/Solutions.vue")['default']
export const CommonTeam: typeof import("../components/Common/Team.vue")['default']
export const CommonTrial: typeof import("../components/Common/Trial.vue")['default']
export const CommonAccordionItem: typeof import("../components/Common/accordion-item.vue")['default']
export const CommonAccordion: typeof import("../components/Common/accordion.vue")['default']
export const ContactArea: typeof import("../components/Contact/ContactArea.vue")['default']
export const ContactInfo: typeof import("../components/Contact/ContactInfo.vue")['default']
export const DeveloperBoxesArea: typeof import("../components/Developer/BoxesArea.vue")['default']
export const DeveloperFeatherIcon: typeof import("../components/Developer/FeatherIcon.vue")['default']
export const DeveloperMainBanner: typeof import("../components/Developer/MainBanner.vue")['default']
export const DeveloperOurServices: typeof import("../components/Developer/OurServices.vue")['default']
export const DigitalAgencyAbout: typeof import("../components/DigitalAgency/About.vue")['default']
export const DigitalAgencyBlog: typeof import("../components/DigitalAgency/Blog.vue")['default']
export const DigitalAgencyCtaArea: typeof import("../components/DigitalAgency/CtaArea.vue")['default']
export const DigitalAgencyFeedback: typeof import("../components/DigitalAgency/Feedback.vue")['default']
export const DigitalAgencyMainBanner: typeof import("../components/DigitalAgency/MainBanner.vue")['default']
export const DigitalAgencyPricing: typeof import("../components/DigitalAgency/Pricing.vue")['default']
export const DigitalAgencyServices: typeof import("../components/DigitalAgency/Services.vue")['default']
export const DigitalAgencySolutions: typeof import("../components/DigitalAgency/Solutions.vue")['default']
export const FaqArea: typeof import("../components/Faq/FaqArea.vue")['default']
export const FeaturesArea: typeof import("../components/Features/FeaturesArea.vue")['default']
export const FeaturesDetails: typeof import("../components/FeaturesDetails/FeaturesDetails.vue")['default']
export const FeedbackOne: typeof import("../components/Feedback/FeedbackOne.vue")['default']
export const FeedbackThree: typeof import("../components/Feedback/FeedbackThree.vue")['default']
export const FeedbackTwo: typeof import("../components/Feedback/FeedbackTwo.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const HeaderFive: typeof import("../components/Header/HeaderFive.vue")['default']
export const IndexBoxesArea: typeof import("../components/Index/BoxesArea.vue")['default']
export const IndexFeatures: typeof import("../components/Index/Features.vue")['default']
export const IndexMainBanner: typeof import("../components/Index/MainBanner.vue")['default']
export const IndexWorks: typeof import("../components/Index/Works.vue")['default']
export const IndexWorksSlides: typeof import("../components/Index/WorksSlides.vue")['default']
export const IotFeatures: typeof import("../components/Iot/Features.vue")['default']
export const IotFeaturesTwo: typeof import("../components/Iot/FeaturesTwo.vue")['default']
export const IotCta: typeof import("../components/Iot/IotCta.vue")['default']
export const IotServices: typeof import("../components/Iot/IotServices.vue")['default']
export const IotTeam: typeof import("../components/Iot/IotTeam.vue")['default']
export const IotMainBanner: typeof import("../components/Iot/MainBanner.vue")['default']
export const IotWhyChooseUs: typeof import("../components/Iot/WhyChooseUs.vue")['default']
export const MachineLearningClientsFeedback: typeof import("../components/MachineLearning/ClientsFeedback.vue")['default']
export const MachineLearningMainBanner: typeof import("../components/MachineLearning/MainBanner.vue")['default']
export const MachineLearningOurRecentStory: typeof import("../components/MachineLearning/OurRecentStory.vue")['default']
export const MachineLearningOurServices: typeof import("../components/MachineLearning/OurServices.vue")['default']
export const PricingTwo: typeof import("../components/Pricing/PricingTwo.vue")['default']
export const ProductsDetails: typeof import("../components/ProductsDetails/ProductsDetails.vue")['default']
export const ProjectDetails: typeof import("../components/ProjectDetails/ProjectDetails.vue")['default']
export const ProjectStyleOne: typeof import("../components/ProjectStyleOne/ProjectStyleOne.vue")['default']
export const ProjectStyleTwo: typeof import("../components/ProjectStyleTwo/ProjectStyleTwo.vue")['default']
export const RepairCenterAbout: typeof import("../components/RepairCenter/About.vue")['default']
export const RepairCenterCta: typeof import("../components/RepairCenter/Cta.vue")['default']
export const RepairCenterFeedback: typeof import("../components/RepairCenter/Feedback.vue")['default']
export const RepairCenterMainBanner: typeof import("../components/RepairCenter/MainBanner.vue")['default']
export const RepairCenterRepairServices: typeof import("../components/RepairCenter/RepairServices.vue")['default']
export const RepairCenterRepairTeam: typeof import("../components/RepairCenter/RepairTeam.vue")['default']
export const RepairCenterWhyChooseUs: typeof import("../components/RepairCenter/WhyChooseUs.vue")['default']
export const ServiceStyleFiveServicesFive: typeof import("../components/ServiceStyleFive/ServicesFive.vue")['default']
export const ServiceStyleFourServicesFour: typeof import("../components/ServiceStyleFour/ServicesFour.vue")['default']
export const ServiceStyleOneServicesOne: typeof import("../components/ServiceStyleOne/ServicesOne.vue")['default']
export const ServiceStyleThreeServicesThree: typeof import("../components/ServiceStyleThree/ServicesThree.vue")['default']
export const ServiceStyleTwoServicesTwo: typeof import("../components/ServiceStyleTwo/ServicesTwo.vue")['default']
export const ServicesDetails: typeof import("../components/ServicesDetails/ServicesDetails.vue")['default']
export const Shop: typeof import("../components/Shop/Shop.vue")['default']
export const StaticImageOneBoxesArea: typeof import("../components/StaticImageOne/BoxesArea.vue")['default']
export const StaticImageOneFeatures: typeof import("../components/StaticImageOne/Features.vue")['default']
export const StaticImageOneMainBanner: typeof import("../components/StaticImageOne/MainBanner.vue")['default']
export const StaticImageOneServices: typeof import("../components/StaticImageOne/Services.vue")['default']
export const StaticImageOneServicesArea: typeof import("../components/StaticImageOne/ServicesArea.vue")['default']
export const StaticImageOneWorks: typeof import("../components/StaticImageOne/Works.vue")['default']
export const StaticImageThreeBoxesArea: typeof import("../components/StaticImageThree/BoxesArea.vue")['default']
export const StaticImageThreeCTAArea: typeof import("../components/StaticImageThree/CTAArea.vue")['default']
export const StaticImageThreeDomainSearch: typeof import("../components/StaticImageThree/DomainSearch.vue")['default']
export const StaticImageThreeFeedback: typeof import("../components/StaticImageThree/Feedback.vue")['default']
export const StaticImageThreeHostingFeatures: typeof import("../components/StaticImageThree/HostingFeatures.vue")['default']
export const StaticImageThreeMainBanner: typeof import("../components/StaticImageThree/MainBanner.vue")['default']
export const StaticImageThreePricingPlans: typeof import("../components/StaticImageThree/PricingPlans.vue")['default']
export const StaticImageThreeWhyChooseUs: typeof import("../components/StaticImageThree/WhyChooseUs.vue")['default']
export const StaticImageTwoBoxesArea: typeof import("../components/StaticImageTwo/BoxesArea.vue")['default']
export const StaticImageTwoMainBanner: typeof import("../components/StaticImageTwo/MainBanner.vue")['default']
export const StaticImageTwoOurServices: typeof import("../components/StaticImageTwo/OurServices.vue")['default']
export const StaticImageTwoServices: typeof import("../components/StaticImageTwo/Services.vue")['default']
export const StaticImageTwoServicesArea: typeof import("../components/StaticImageTwo/ServicesArea.vue")['default']
export const Team: typeof import("../components/Team/Team.vue")['default']
export const WebHostingBoxesArea: typeof import("../components/WebHosting/BoxesArea.vue")['default']
export const WebHostingCTAArea: typeof import("../components/WebHosting/CTAArea.vue")['default']
export const WebHostingDomainSearch: typeof import("../components/WebHosting/DomainSearch.vue")['default']
export const WebHostingFeedback: typeof import("../components/WebHosting/Feedback.vue")['default']
export const WebHostingFeatures: typeof import("../components/WebHosting/HostingFeatures.vue")['default']
export const WebHostingMainBanner: typeof import("../components/WebHosting/MainBanner.vue")['default']
export const WebHostingPricingPlans: typeof import("../components/WebHosting/PricingPlans.vue")['default']
export const WebHostingWhyChooseUs: typeof import("../components/WebHosting/WhyChooseUs.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAboutStyleOneAbout: LazyComponent<typeof import("../components/AboutStyleOne/About.vue")['default']>
export const LazyAboutStyleThreeAboutThree: LazyComponent<typeof import("../components/AboutStyleThree/AboutThree.vue")['default']>
export const LazyAboutStyleThreeFeedbackTwo: LazyComponent<typeof import("../components/AboutStyleThree/FeedbackTwo.vue")['default']>
export const LazyAboutStyleTwoAboutTwo: LazyComponent<typeof import("../components/AboutStyleTwo/AboutTwo.vue")['default']>
export const LazyAboutStyleTwoFeedback: LazyComponent<typeof import("../components/AboutStyleTwo/Feedback.vue")['default']>
export const LazyAgencyPortfolioAbout: LazyComponent<typeof import("../components/AgencyPortfolio/About.vue")['default']>
export const LazyAgencyPortfolioCreative: LazyComponent<typeof import("../components/AgencyPortfolio/Creative.vue")['default']>
export const LazyAgencyPortfolioFeedback: LazyComponent<typeof import("../components/AgencyPortfolio/Feedback.vue")['default']>
export const LazyAgencyPortfolioMainBanner: LazyComponent<typeof import("../components/AgencyPortfolio/MainBanner.vue")['default']>
export const LazyAgencyPortfolioOurLatestProjects: LazyComponent<typeof import("../components/AgencyPortfolio/OurLatestProjects.vue")['default']>
export const LazyAgencyPortfolioOurRecentNews: LazyComponent<typeof import("../components/AgencyPortfolio/OurRecentNews.vue")['default']>
export const LazyAgencyPortfolioPartner: LazyComponent<typeof import("../components/AgencyPortfolio/Partner.vue")['default']>
export const LazyAiMachineLearningClientsFeedback: LazyComponent<typeof import("../components/AiMachineLearning/ClientsFeedback.vue")['default']>
export const LazyAiMachineLearningMainBanner: LazyComponent<typeof import("../components/AiMachineLearning/MainBanner.vue")['default']>
export const LazyAiMachineLearningOurRecentStory: LazyComponent<typeof import("../components/AiMachineLearning/OurRecentStory.vue")['default']>
export const LazyAiMachineLearningOurServices: LazyComponent<typeof import("../components/AiMachineLearning/OurServices.vue")['default']>
export const LazyBigdataAnalyticsDiscover: LazyComponent<typeof import("../components/BigdataAnalytics/Discover.vue")['default']>
export const LazyBigdataAnalyticsFeedback: LazyComponent<typeof import("../components/BigdataAnalytics/Feedback.vue")['default']>
export const LazyBigdataAnalyticsFunFacts: LazyComponent<typeof import("../components/BigdataAnalytics/FunFacts.vue")['default']>
export const LazyBigdataAnalyticsIndustries: LazyComponent<typeof import("../components/BigdataAnalytics/Industries.vue")['default']>
export const LazyBigdataAnalyticsMainBanner: LazyComponent<typeof import("../components/BigdataAnalytics/MainBanner.vue")['default']>
export const LazyBigdataAnalyticsOurRecentStory: LazyComponent<typeof import("../components/BigdataAnalytics/OurRecentStory.vue")['default']>
export const LazyBigdataAnalyticsServices: LazyComponent<typeof import("../components/BigdataAnalytics/Services.vue")['default']>
export const LazyBigdataAnalyticsStartYourFreeTrial: LazyComponent<typeof import("../components/BigdataAnalytics/StartYourFreeTrial.vue")['default']>
export const LazyBigdataAnalyticsTeam: LazyComponent<typeof import("../components/BigdataAnalytics/Team.vue")['default']>
export const LazyBigdataAnalyticsWhatWeDo: LazyComponent<typeof import("../components/BigdataAnalytics/WhatWeDo.vue")['default']>
export const LazyBlogDetails: LazyComponent<typeof import("../components/BlogDetails/BlogDetails.vue")['default']>
export const LazyBlogGrid: LazyComponent<typeof import("../components/BlogGrid/BlogGrid.vue")['default']>
export const LazyBlogGridThree: LazyComponent<typeof import("../components/BlogGridThree/BlogGridThree.vue")['default']>
export const LazyBlogGridTwo: LazyComponent<typeof import("../components/BlogGridTwo/BlogGridTwo.vue")['default']>
export const LazyBlogRightSidebar: LazyComponent<typeof import("../components/BlogRightSidebar/BlogRightSidebar.vue")['default']>
export const LazyBlogRightSidebarThree: LazyComponent<typeof import("../components/BlogRightSidebarThree/BlogRightSidebarThree.vue")['default']>
export const LazyBlogRightSidebarTwo: LazyComponent<typeof import("../components/BlogRightSidebarTwo/BlogRightSidebarTwo.vue")['default']>
export const LazyCart: LazyComponent<typeof import("../components/Cart/Cart.vue")['default']>
export const LazyCheckout: LazyComponent<typeof import("../components/Checkout/Checkout.vue")['default']>
export const LazyComingSoon: LazyComponent<typeof import("../components/ComingSoon/ComingSoon.vue")['default']>
export const LazyCommonAbout: LazyComponent<typeof import("../components/Common/About.vue")['default']>
export const LazyCommonBlog: LazyComponent<typeof import("../components/Common/Blog.vue")['default']>
export const LazyCommonBlogItems: LazyComponent<typeof import("../components/Common/BlogItems.vue")['default']>
export const LazyCommonBlogSidebar: LazyComponent<typeof import("../components/Common/BlogSidebar.vue")['default']>
export const LazyCommonFeedback: LazyComponent<typeof import("../components/Common/Feedback.vue")['default']>
export const LazyCommonFunfacts: LazyComponent<typeof import("../components/Common/Funfacts.vue")['default']>
export const LazyCommonMachinePricing: LazyComponent<typeof import("../components/Common/MachinePricing.vue")['default']>
export const LazyCommonPageTitle: LazyComponent<typeof import("../components/Common/PageTitle.vue")['default']>
export const LazyCommonPartner: LazyComponent<typeof import("../components/Common/Partner.vue")['default']>
export const LazyCommonPartnerTwo: LazyComponent<typeof import("../components/Common/PartnerTwo.vue")['default']>
export const LazyCommonPricing: LazyComponent<typeof import("../components/Common/Pricing.vue")['default']>
export const LazyCommonProjects: LazyComponent<typeof import("../components/Common/Projects.vue")['default']>
export const LazyCommonReadyToTalk: LazyComponent<typeof import("../components/Common/ReadyToTalk.vue")['default']>
export const LazyCommonServices: LazyComponent<typeof import("../components/Common/Services.vue")['default']>
export const LazyCommonServicesArea: LazyComponent<typeof import("../components/Common/ServicesArea.vue")['default']>
export const LazyCommonSolutions: LazyComponent<typeof import("../components/Common/Solutions.vue")['default']>
export const LazyCommonTeam: LazyComponent<typeof import("../components/Common/Team.vue")['default']>
export const LazyCommonTrial: LazyComponent<typeof import("../components/Common/Trial.vue")['default']>
export const LazyCommonAccordionItem: LazyComponent<typeof import("../components/Common/accordion-item.vue")['default']>
export const LazyCommonAccordion: LazyComponent<typeof import("../components/Common/accordion.vue")['default']>
export const LazyContactArea: LazyComponent<typeof import("../components/Contact/ContactArea.vue")['default']>
export const LazyContactInfo: LazyComponent<typeof import("../components/Contact/ContactInfo.vue")['default']>
export const LazyDeveloperBoxesArea: LazyComponent<typeof import("../components/Developer/BoxesArea.vue")['default']>
export const LazyDeveloperFeatherIcon: LazyComponent<typeof import("../components/Developer/FeatherIcon.vue")['default']>
export const LazyDeveloperMainBanner: LazyComponent<typeof import("../components/Developer/MainBanner.vue")['default']>
export const LazyDeveloperOurServices: LazyComponent<typeof import("../components/Developer/OurServices.vue")['default']>
export const LazyDigitalAgencyAbout: LazyComponent<typeof import("../components/DigitalAgency/About.vue")['default']>
export const LazyDigitalAgencyBlog: LazyComponent<typeof import("../components/DigitalAgency/Blog.vue")['default']>
export const LazyDigitalAgencyCtaArea: LazyComponent<typeof import("../components/DigitalAgency/CtaArea.vue")['default']>
export const LazyDigitalAgencyFeedback: LazyComponent<typeof import("../components/DigitalAgency/Feedback.vue")['default']>
export const LazyDigitalAgencyMainBanner: LazyComponent<typeof import("../components/DigitalAgency/MainBanner.vue")['default']>
export const LazyDigitalAgencyPricing: LazyComponent<typeof import("../components/DigitalAgency/Pricing.vue")['default']>
export const LazyDigitalAgencyServices: LazyComponent<typeof import("../components/DigitalAgency/Services.vue")['default']>
export const LazyDigitalAgencySolutions: LazyComponent<typeof import("../components/DigitalAgency/Solutions.vue")['default']>
export const LazyFaqArea: LazyComponent<typeof import("../components/Faq/FaqArea.vue")['default']>
export const LazyFeaturesArea: LazyComponent<typeof import("../components/Features/FeaturesArea.vue")['default']>
export const LazyFeaturesDetails: LazyComponent<typeof import("../components/FeaturesDetails/FeaturesDetails.vue")['default']>
export const LazyFeedbackOne: LazyComponent<typeof import("../components/Feedback/FeedbackOne.vue")['default']>
export const LazyFeedbackThree: LazyComponent<typeof import("../components/Feedback/FeedbackThree.vue")['default']>
export const LazyFeedbackTwo: LazyComponent<typeof import("../components/Feedback/FeedbackTwo.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeaderFive: LazyComponent<typeof import("../components/Header/HeaderFive.vue")['default']>
export const LazyIndexBoxesArea: LazyComponent<typeof import("../components/Index/BoxesArea.vue")['default']>
export const LazyIndexFeatures: LazyComponent<typeof import("../components/Index/Features.vue")['default']>
export const LazyIndexMainBanner: LazyComponent<typeof import("../components/Index/MainBanner.vue")['default']>
export const LazyIndexWorks: LazyComponent<typeof import("../components/Index/Works.vue")['default']>
export const LazyIndexWorksSlides: LazyComponent<typeof import("../components/Index/WorksSlides.vue")['default']>
export const LazyIotFeatures: LazyComponent<typeof import("../components/Iot/Features.vue")['default']>
export const LazyIotFeaturesTwo: LazyComponent<typeof import("../components/Iot/FeaturesTwo.vue")['default']>
export const LazyIotCta: LazyComponent<typeof import("../components/Iot/IotCta.vue")['default']>
export const LazyIotServices: LazyComponent<typeof import("../components/Iot/IotServices.vue")['default']>
export const LazyIotTeam: LazyComponent<typeof import("../components/Iot/IotTeam.vue")['default']>
export const LazyIotMainBanner: LazyComponent<typeof import("../components/Iot/MainBanner.vue")['default']>
export const LazyIotWhyChooseUs: LazyComponent<typeof import("../components/Iot/WhyChooseUs.vue")['default']>
export const LazyMachineLearningClientsFeedback: LazyComponent<typeof import("../components/MachineLearning/ClientsFeedback.vue")['default']>
export const LazyMachineLearningMainBanner: LazyComponent<typeof import("../components/MachineLearning/MainBanner.vue")['default']>
export const LazyMachineLearningOurRecentStory: LazyComponent<typeof import("../components/MachineLearning/OurRecentStory.vue")['default']>
export const LazyMachineLearningOurServices: LazyComponent<typeof import("../components/MachineLearning/OurServices.vue")['default']>
export const LazyPricingTwo: LazyComponent<typeof import("../components/Pricing/PricingTwo.vue")['default']>
export const LazyProductsDetails: LazyComponent<typeof import("../components/ProductsDetails/ProductsDetails.vue")['default']>
export const LazyProjectDetails: LazyComponent<typeof import("../components/ProjectDetails/ProjectDetails.vue")['default']>
export const LazyProjectStyleOne: LazyComponent<typeof import("../components/ProjectStyleOne/ProjectStyleOne.vue")['default']>
export const LazyProjectStyleTwo: LazyComponent<typeof import("../components/ProjectStyleTwo/ProjectStyleTwo.vue")['default']>
export const LazyRepairCenterAbout: LazyComponent<typeof import("../components/RepairCenter/About.vue")['default']>
export const LazyRepairCenterCta: LazyComponent<typeof import("../components/RepairCenter/Cta.vue")['default']>
export const LazyRepairCenterFeedback: LazyComponent<typeof import("../components/RepairCenter/Feedback.vue")['default']>
export const LazyRepairCenterMainBanner: LazyComponent<typeof import("../components/RepairCenter/MainBanner.vue")['default']>
export const LazyRepairCenterRepairServices: LazyComponent<typeof import("../components/RepairCenter/RepairServices.vue")['default']>
export const LazyRepairCenterRepairTeam: LazyComponent<typeof import("../components/RepairCenter/RepairTeam.vue")['default']>
export const LazyRepairCenterWhyChooseUs: LazyComponent<typeof import("../components/RepairCenter/WhyChooseUs.vue")['default']>
export const LazyServiceStyleFiveServicesFive: LazyComponent<typeof import("../components/ServiceStyleFive/ServicesFive.vue")['default']>
export const LazyServiceStyleFourServicesFour: LazyComponent<typeof import("../components/ServiceStyleFour/ServicesFour.vue")['default']>
export const LazyServiceStyleOneServicesOne: LazyComponent<typeof import("../components/ServiceStyleOne/ServicesOne.vue")['default']>
export const LazyServiceStyleThreeServicesThree: LazyComponent<typeof import("../components/ServiceStyleThree/ServicesThree.vue")['default']>
export const LazyServiceStyleTwoServicesTwo: LazyComponent<typeof import("../components/ServiceStyleTwo/ServicesTwo.vue")['default']>
export const LazyServicesDetails: LazyComponent<typeof import("../components/ServicesDetails/ServicesDetails.vue")['default']>
export const LazyShop: LazyComponent<typeof import("../components/Shop/Shop.vue")['default']>
export const LazyStaticImageOneBoxesArea: LazyComponent<typeof import("../components/StaticImageOne/BoxesArea.vue")['default']>
export const LazyStaticImageOneFeatures: LazyComponent<typeof import("../components/StaticImageOne/Features.vue")['default']>
export const LazyStaticImageOneMainBanner: LazyComponent<typeof import("../components/StaticImageOne/MainBanner.vue")['default']>
export const LazyStaticImageOneServices: LazyComponent<typeof import("../components/StaticImageOne/Services.vue")['default']>
export const LazyStaticImageOneServicesArea: LazyComponent<typeof import("../components/StaticImageOne/ServicesArea.vue")['default']>
export const LazyStaticImageOneWorks: LazyComponent<typeof import("../components/StaticImageOne/Works.vue")['default']>
export const LazyStaticImageThreeBoxesArea: LazyComponent<typeof import("../components/StaticImageThree/BoxesArea.vue")['default']>
export const LazyStaticImageThreeCTAArea: LazyComponent<typeof import("../components/StaticImageThree/CTAArea.vue")['default']>
export const LazyStaticImageThreeDomainSearch: LazyComponent<typeof import("../components/StaticImageThree/DomainSearch.vue")['default']>
export const LazyStaticImageThreeFeedback: LazyComponent<typeof import("../components/StaticImageThree/Feedback.vue")['default']>
export const LazyStaticImageThreeHostingFeatures: LazyComponent<typeof import("../components/StaticImageThree/HostingFeatures.vue")['default']>
export const LazyStaticImageThreeMainBanner: LazyComponent<typeof import("../components/StaticImageThree/MainBanner.vue")['default']>
export const LazyStaticImageThreePricingPlans: LazyComponent<typeof import("../components/StaticImageThree/PricingPlans.vue")['default']>
export const LazyStaticImageThreeWhyChooseUs: LazyComponent<typeof import("../components/StaticImageThree/WhyChooseUs.vue")['default']>
export const LazyStaticImageTwoBoxesArea: LazyComponent<typeof import("../components/StaticImageTwo/BoxesArea.vue")['default']>
export const LazyStaticImageTwoMainBanner: LazyComponent<typeof import("../components/StaticImageTwo/MainBanner.vue")['default']>
export const LazyStaticImageTwoOurServices: LazyComponent<typeof import("../components/StaticImageTwo/OurServices.vue")['default']>
export const LazyStaticImageTwoServices: LazyComponent<typeof import("../components/StaticImageTwo/Services.vue")['default']>
export const LazyStaticImageTwoServicesArea: LazyComponent<typeof import("../components/StaticImageTwo/ServicesArea.vue")['default']>
export const LazyTeam: LazyComponent<typeof import("../components/Team/Team.vue")['default']>
export const LazyWebHostingBoxesArea: LazyComponent<typeof import("../components/WebHosting/BoxesArea.vue")['default']>
export const LazyWebHostingCTAArea: LazyComponent<typeof import("../components/WebHosting/CTAArea.vue")['default']>
export const LazyWebHostingDomainSearch: LazyComponent<typeof import("../components/WebHosting/DomainSearch.vue")['default']>
export const LazyWebHostingFeedback: LazyComponent<typeof import("../components/WebHosting/Feedback.vue")['default']>
export const LazyWebHostingFeatures: LazyComponent<typeof import("../components/WebHosting/HostingFeatures.vue")['default']>
export const LazyWebHostingMainBanner: LazyComponent<typeof import("../components/WebHosting/MainBanner.vue")['default']>
export const LazyWebHostingPricingPlans: LazyComponent<typeof import("../components/WebHosting/PricingPlans.vue")['default']>
export const LazyWebHostingWhyChooseUs: LazyComponent<typeof import("../components/WebHosting/WhyChooseUs.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
