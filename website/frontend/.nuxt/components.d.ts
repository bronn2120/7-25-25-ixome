
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
    'BAccordion': typeof import("bootstrap-vue-next")['BAccordion']
    'BAccordionItem': typeof import("bootstrap-vue-next")['BAccordionItem']
    'BAlert': typeof import("bootstrap-vue-next")['BAlert']
    'BAvatar': typeof import("bootstrap-vue-next")['BAvatar']
    'BAvatarGroup': typeof import("bootstrap-vue-next")['BAvatarGroup']
    'BBadge': typeof import("bootstrap-vue-next")['BBadge']
    'BBreadcrumb': typeof import("bootstrap-vue-next")['BBreadcrumb']
    'BBreadcrumbItem': typeof import("bootstrap-vue-next")['BBreadcrumbItem']
    'BButton': typeof import("bootstrap-vue-next")['BButton']
    'BButtonGroup': typeof import("bootstrap-vue-next")['BButtonGroup']
    'BButtonToolbar': typeof import("bootstrap-vue-next")['BButtonToolbar']
    'BCard': typeof import("bootstrap-vue-next")['BCard']
    'BCardBody': typeof import("bootstrap-vue-next")['BCardBody']
    'BCardFooter': typeof import("bootstrap-vue-next")['BCardFooter']
    'BCardGroup': typeof import("bootstrap-vue-next")['BCardGroup']
    'BCardHeader': typeof import("bootstrap-vue-next")['BCardHeader']
    'BCardImg': typeof import("bootstrap-vue-next")['BCardImg']
    'BCardSubtitle': typeof import("bootstrap-vue-next")['BCardSubtitle']
    'BCardText': typeof import("bootstrap-vue-next")['BCardText']
    'BCardTitle': typeof import("bootstrap-vue-next")['BCardTitle']
    'BCarousel': typeof import("bootstrap-vue-next")['BCarousel']
    'BCarouselSlide': typeof import("bootstrap-vue-next")['BCarouselSlide']
    'BCloseButton': typeof import("bootstrap-vue-next")['BCloseButton']
    'BCol': typeof import("bootstrap-vue-next")['BCol']
    'BCollapse': typeof import("bootstrap-vue-next")['BCollapse']
    'BContainer': typeof import("bootstrap-vue-next")['BContainer']
    'BDropdown': typeof import("bootstrap-vue-next")['BDropdown']
    'BDropdownDivider': typeof import("bootstrap-vue-next")['BDropdownDivider']
    'BDropdownForm': typeof import("bootstrap-vue-next")['BDropdownForm']
    'BDropdownGroup': typeof import("bootstrap-vue-next")['BDropdownGroup']
    'BDropdownHeader': typeof import("bootstrap-vue-next")['BDropdownHeader']
    'BDropdownItem': typeof import("bootstrap-vue-next")['BDropdownItem']
    'BDropdownItemButton': typeof import("bootstrap-vue-next")['BDropdownItemButton']
    'BDropdownText': typeof import("bootstrap-vue-next")['BDropdownText']
    'BForm': typeof import("bootstrap-vue-next")['BForm']
    'BFormCheckbox': typeof import("bootstrap-vue-next")['BFormCheckbox']
    'BFormCheckboxGroup': typeof import("bootstrap-vue-next")['BFormCheckboxGroup']
    'BFormFile': typeof import("bootstrap-vue-next")['BFormFile']
    'BFormFloatingLabel': typeof import("bootstrap-vue-next")['BFormFloatingLabel']
    'BFormGroup': typeof import("bootstrap-vue-next")['BFormGroup']
    'BFormInput': typeof import("bootstrap-vue-next")['BFormInput']
    'BFormInvalidFeedback': typeof import("bootstrap-vue-next")['BFormInvalidFeedback']
    'BFormRadio': typeof import("bootstrap-vue-next")['BFormRadio']
    'BFormRadioGroup': typeof import("bootstrap-vue-next")['BFormRadioGroup']
    'BFormRow': typeof import("bootstrap-vue-next")['BFormRow']
    'BFormSelect': typeof import("bootstrap-vue-next")['BFormSelect']
    'BFormSelectOption': typeof import("bootstrap-vue-next")['BFormSelectOption']
    'BFormSelectOptionGroup': typeof import("bootstrap-vue-next")['BFormSelectOptionGroup']
    'BFormSpinbutton': typeof import("bootstrap-vue-next")['BFormSpinbutton']
    'BFormTag': typeof import("bootstrap-vue-next")['BFormTag']
    'BFormTags': typeof import("bootstrap-vue-next")['BFormTags']
    'BFormText': typeof import("bootstrap-vue-next")['BFormText']
    'BFormTextarea': typeof import("bootstrap-vue-next")['BFormTextarea']
    'BFormValidFeedback': typeof import("bootstrap-vue-next")['BFormValidFeedback']
    'BImg': typeof import("bootstrap-vue-next")['BImg']
    'BInputGroup': typeof import("bootstrap-vue-next")['BInputGroup']
    'BInputGroupAddon': typeof import("bootstrap-vue-next")['BInputGroupAddon']
    'BInputGroupAppend': typeof import("bootstrap-vue-next")['BInputGroupAppend']
    'BInputGroupPrepend': typeof import("bootstrap-vue-next")['BInputGroupPrepend']
    'BInputGroupText': typeof import("bootstrap-vue-next")['BInputGroupText']
    'BLink': typeof import("bootstrap-vue-next")['BLink']
    'BListGroup': typeof import("bootstrap-vue-next")['BListGroup']
    'BListGroupItem': typeof import("bootstrap-vue-next")['BListGroupItem']
    'BModal': typeof import("bootstrap-vue-next")['BModal']
    'BModalOrchestrator': typeof import("bootstrap-vue-next")['BModalOrchestrator']
    'BNav': typeof import("bootstrap-vue-next")['BNav']
    'BNavForm': typeof import("bootstrap-vue-next")['BNavForm']
    'BNavItem': typeof import("bootstrap-vue-next")['BNavItem']
    'BNavItemDropdown': typeof import("bootstrap-vue-next")['BNavItemDropdown']
    'BNavText': typeof import("bootstrap-vue-next")['BNavText']
    'BNavbar': typeof import("bootstrap-vue-next")['BNavbar']
    'BNavbarBrand': typeof import("bootstrap-vue-next")['BNavbarBrand']
    'BNavbarNav': typeof import("bootstrap-vue-next")['BNavbarNav']
    'BNavbarToggle': typeof import("bootstrap-vue-next")['BNavbarToggle']
    'BOffcanvas': typeof import("bootstrap-vue-next")['BOffcanvas']
    'BOverlay': typeof import("bootstrap-vue-next")['BOverlay']
    'BPagination': typeof import("bootstrap-vue-next")['BPagination']
    'BPlaceholder': typeof import("bootstrap-vue-next")['BPlaceholder']
    'BPlaceholderButton': typeof import("bootstrap-vue-next")['BPlaceholderButton']
    'BPlaceholderCard': typeof import("bootstrap-vue-next")['BPlaceholderCard']
    'BPlaceholderTable': typeof import("bootstrap-vue-next")['BPlaceholderTable']
    'BPlaceholderWrapper': typeof import("bootstrap-vue-next")['BPlaceholderWrapper']
    'BPopover': typeof import("bootstrap-vue-next")['BPopover']
    'BProgress': typeof import("bootstrap-vue-next")['BProgress']
    'BProgressBar': typeof import("bootstrap-vue-next")['BProgressBar']
    'BRow': typeof import("bootstrap-vue-next")['BRow']
    'BSpinner': typeof import("bootstrap-vue-next")['BSpinner']
    'BTab': typeof import("bootstrap-vue-next")['BTab']
    'BTable': typeof import("bootstrap-vue-next")['BTable']
    'BTableLite': typeof import("bootstrap-vue-next")['BTableLite']
    'BTableSimple': typeof import("bootstrap-vue-next")['BTableSimple']
    'BTabs': typeof import("bootstrap-vue-next")['BTabs']
    'BTbody': typeof import("bootstrap-vue-next")['BTbody']
    'BTd': typeof import("bootstrap-vue-next")['BTd']
    'BTfoot': typeof import("bootstrap-vue-next")['BTfoot']
    'BTh': typeof import("bootstrap-vue-next")['BTh']
    'BThead': typeof import("bootstrap-vue-next")['BThead']
    'BToast': typeof import("bootstrap-vue-next")['BToast']
    'BToastOrchestrator': typeof import("bootstrap-vue-next")['BToastOrchestrator']
    'BTooltip': typeof import("bootstrap-vue-next")['BTooltip']
    'BTr': typeof import("bootstrap-vue-next")['BTr']
    'BTransition': typeof import("bootstrap-vue-next")['BTransition']
    'ActivityIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ActivityIcon")['default']
    'AirplayIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AirplayIcon")['default']
    'AlertCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertCircleIcon")['default']
    'AlertOctagonIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertOctagonIcon")['default']
    'AlertTriangleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertTriangleIcon")['default']
    'AlignCenterIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignCenterIcon")['default']
    'AlignJustifyIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignJustifyIcon")['default']
    'AlignLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignLeftIcon")['default']
    'AlignRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignRightIcon")['default']
    'AnchorIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AnchorIcon")['default']
    'ApertureIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ApertureIcon")['default']
    'ArchiveIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArchiveIcon")['default']
    'ArrowDownCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownCircleIcon")['default']
    'ArrowDownLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownLeftIcon")['default']
    'ArrowDownRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownRightIcon")['default']
    'ArrowDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownIcon")['default']
    'ArrowLeftCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftCircleIcon")['default']
    'ArrowLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftIcon")['default']
    'ArrowRightCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightCircleIcon")['default']
    'ArrowRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightIcon")['default']
    'ArrowUpCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpCircleIcon")['default']
    'ArrowUpLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpLeftIcon")['default']
    'ArrowUpRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpRightIcon")['default']
    'ArrowUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpIcon")['default']
    'AtSignIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AtSignIcon")['default']
    'AwardIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AwardIcon")['default']
    'BarChart2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChart2Icon")['default']
    'BarChartIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChartIcon")['default']
    'BatteryChargingIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryChargingIcon")['default']
    'BatteryIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryIcon")['default']
    'BellOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellOffIcon")['default']
    'BellIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellIcon")['default']
    'BluetoothIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BluetoothIcon")['default']
    'BoldIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoldIcon")['default']
    'BookOpenIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookOpenIcon")['default']
    'BookIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookIcon")['default']
    'BookmarkIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookmarkIcon")['default']
    'BoxIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoxIcon")['default']
    'BriefcaseIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BriefcaseIcon")['default']
    'CalendarIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CalendarIcon")['default']
    'CameraOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraOffIcon")['default']
    'CameraIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraIcon")['default']
    'CastIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CastIcon")['default']
    'CheckCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckCircleIcon")['default']
    'CheckSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckSquareIcon")['default']
    'CheckIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckIcon")['default']
    'ChevronDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronDownIcon")['default']
    'ChevronLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronLeftIcon")['default']
    'ChevronRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronRightIcon")['default']
    'ChevronUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronUpIcon")['default']
    'ChevronsDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsDownIcon")['default']
    'ChevronsLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsLeftIcon")['default']
    'ChevronsRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsRightIcon")['default']
    'ChevronsUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsUpIcon")['default']
    'ChromeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChromeIcon")['default']
    'CircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CircleIcon")['default']
    'ClipboardIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClipboardIcon")['default']
    'ClockIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClockIcon")['default']
    'CloudDrizzleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudDrizzleIcon")['default']
    'CloudLightningIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudLightningIcon")['default']
    'CloudOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudOffIcon")['default']
    'CloudRainIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudRainIcon")['default']
    'CloudSnowIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudSnowIcon")['default']
    'CloudIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudIcon")['default']
    'CodeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodeIcon")['default']
    'CodepenIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodepenIcon")['default']
    'CodesandboxIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodesandboxIcon")['default']
    'CoffeeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CoffeeIcon")['default']
    'ColumnsIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ColumnsIcon")['default']
    'CommandIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CommandIcon")['default']
    'CompassIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CompassIcon")['default']
    'CopyIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CopyIcon")['default']
    'CornerDownLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownLeftIcon")['default']
    'CornerDownRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownRightIcon")['default']
    'CornerLeftDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftDownIcon")['default']
    'CornerLeftUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftUpIcon")['default']
    'CornerRightDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightDownIcon")['default']
    'CornerRightUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightUpIcon")['default']
    'CornerUpLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpLeftIcon")['default']
    'CornerUpRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpRightIcon")['default']
    'CpuIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CpuIcon")['default']
    'CreditCardIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CreditCardIcon")['default']
    'CropIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CropIcon")['default']
    'CrosshairIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CrosshairIcon")['default']
    'DatabaseIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DatabaseIcon")['default']
    'DeleteIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DeleteIcon")['default']
    'DiscIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DiscIcon")['default']
    'DivideCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideCircleIcon")['default']
    'DivideSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideSquareIcon")['default']
    'DivideIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideIcon")['default']
    'DollarSignIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DollarSignIcon")['default']
    'DownloadCloudIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadCloudIcon")['default']
    'DownloadIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadIcon")['default']
    'DribbbleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DribbbleIcon")['default']
    'DropletIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DropletIcon")['default']
    'Edit2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit2Icon")['default']
    'Edit3Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit3Icon")['default']
    'EditIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EditIcon")['default']
    'ExternalLinkIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ExternalLinkIcon")['default']
    'EyeOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeOffIcon")['default']
    'EyeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeIcon")['default']
    'FacebookIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FacebookIcon")['default']
    'FastForwardIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FastForwardIcon")['default']
    'FeatherIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FeatherIcon")['default']
    'FigmaIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FigmaIcon")['default']
    'FileMinusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileMinusIcon")['default']
    'FilePlusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilePlusIcon")['default']
    'FileTextIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileTextIcon")['default']
    'FileIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileIcon")['default']
    'FilmIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilmIcon")['default']
    'FilterIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilterIcon")['default']
    'FlagIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FlagIcon")['default']
    'FolderMinusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderMinusIcon")['default']
    'FolderPlusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderPlusIcon")['default']
    'FolderIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderIcon")['default']
    'FramerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FramerIcon")['default']
    'FrownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FrownIcon")['default']
    'GiftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GiftIcon")['default']
    'GitBranchIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitBranchIcon")['default']
    'GitCommitIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitCommitIcon")['default']
    'GitMergeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitMergeIcon")['default']
    'GitPullRequestIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitPullRequestIcon")['default']
    'GithubIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GithubIcon")['default']
    'GitlabIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitlabIcon")['default']
    'GlobeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GlobeIcon")['default']
    'GridIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GridIcon")['default']
    'HardDriveIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HardDriveIcon")['default']
    'HashIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HashIcon")['default']
    'HeadphonesIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeadphonesIcon")['default']
    'HeartIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeartIcon")['default']
    'HelpCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HelpCircleIcon")['default']
    'HexagonIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HexagonIcon")['default']
    'HomeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HomeIcon")['default']
    'ImageIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ImageIcon")['default']
    'InboxIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InboxIcon")['default']
    'InfoIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InfoIcon")['default']
    'InstagramIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InstagramIcon")['default']
    'ItalicIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ItalicIcon")['default']
    'KeyIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/KeyIcon")['default']
    'LayersIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayersIcon")['default']
    'LayoutIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayoutIcon")['default']
    'LifeBuoyIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LifeBuoyIcon")['default']
    'Link2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Link2Icon")['default']
    'LinkIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkIcon")['default']
    'LinkedinIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkedinIcon")['default']
    'ListIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ListIcon")['default']
    'LoaderIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LoaderIcon")['default']
    'LockIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LockIcon")['default']
    'LogInIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogInIcon")['default']
    'LogOutIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogOutIcon")['default']
    'MailIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MailIcon")['default']
    'MapPinIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapPinIcon")['default']
    'MapIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapIcon")['default']
    'Maximize2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Maximize2Icon")['default']
    'MaximizeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MaximizeIcon")['default']
    'MehIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MehIcon")['default']
    'MenuIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MenuIcon")['default']
    'MessageCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageCircleIcon")['default']
    'MessageSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageSquareIcon")['default']
    'MicOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicOffIcon")['default']
    'MicIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicIcon")['default']
    'Minimize2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Minimize2Icon")['default']
    'MinimizeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinimizeIcon")['default']
    'MinusCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusCircleIcon")['default']
    'MinusSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusSquareIcon")['default']
    'MinusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusIcon")['default']
    'MonitorIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MonitorIcon")['default']
    'MoonIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoonIcon")['default']
    'MoreHorizontalIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreHorizontalIcon")['default']
    'MoreVerticalIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreVerticalIcon")['default']
    'MousePointerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MousePointerIcon")['default']
    'MoveIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoveIcon")['default']
    'MusicIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MusicIcon")['default']
    'Navigation2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Navigation2Icon")['default']
    'NavigationIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/NavigationIcon")['default']
    'OctagonIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/OctagonIcon")['default']
    'PackageIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PackageIcon")['default']
    'PaperclipIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PaperclipIcon")['default']
    'PauseCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseCircleIcon")['default']
    'PauseIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseIcon")['default']
    'PenToolIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PenToolIcon")['default']
    'PercentIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PercentIcon")['default']
    'PhoneCallIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneCallIcon")['default']
    'PhoneForwardedIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneForwardedIcon")['default']
    'PhoneIncomingIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIncomingIcon")['default']
    'PhoneMissedIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneMissedIcon")['default']
    'PhoneOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOffIcon")['default']
    'PhoneOutgoingIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOutgoingIcon")['default']
    'PhoneIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIcon")['default']
    'PieChartIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PieChartIcon")['default']
    'PlayCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayCircleIcon")['default']
    'PlayIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayIcon")['default']
    'PlusCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusCircleIcon")['default']
    'PlusSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusSquareIcon")['default']
    'PlusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusIcon")['default']
    'PocketIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PocketIcon")['default']
    'PowerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PowerIcon")['default']
    'PrinterIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PrinterIcon")['default']
    'RadioIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RadioIcon")['default']
    'RefreshCcwIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCcwIcon")['default']
    'RefreshCwIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCwIcon")['default']
    'RepeatIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RepeatIcon")['default']
    'RewindIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RewindIcon")['default']
    'RotateCcwIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCcwIcon")['default']
    'RotateCwIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCwIcon")['default']
    'RssIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RssIcon")['default']
    'SaveIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SaveIcon")['default']
    'ScissorsIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ScissorsIcon")['default']
    'SearchIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SearchIcon")['default']
    'SendIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SendIcon")['default']
    'ServerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ServerIcon")['default']
    'SettingsIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SettingsIcon")['default']
    'Share2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Share2Icon")['default']
    'ShareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShareIcon")['default']
    'ShieldOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldOffIcon")['default']
    'ShieldIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldIcon")['default']
    'ShoppingBagIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingBagIcon")['default']
    'ShoppingCartIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingCartIcon")['default']
    'ShuffleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShuffleIcon")['default']
    'SidebarIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SidebarIcon")['default']
    'SkipBackIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipBackIcon")['default']
    'SkipForwardIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipForwardIcon")['default']
    'SlackIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlackIcon")['default']
    'SlashIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlashIcon")['default']
    'SlidersIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlidersIcon")['default']
    'SmartphoneIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmartphoneIcon")['default']
    'SmileIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmileIcon")['default']
    'SpeakerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SpeakerIcon")['default']
    'SquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SquareIcon")['default']
    'StarIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StarIcon")['default']
    'StopCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StopCircleIcon")['default']
    'SunIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunIcon")['default']
    'SunriseIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunriseIcon")['default']
    'SunsetIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunsetIcon")['default']
    'TableIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TableIcon")['default']
    'TabletIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TabletIcon")['default']
    'TagIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TagIcon")['default']
    'TargetIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TargetIcon")['default']
    'TerminalIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TerminalIcon")['default']
    'ThermometerIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThermometerIcon")['default']
    'ThumbsDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsDownIcon")['default']
    'ThumbsUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsUpIcon")['default']
    'ToggleLeftIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleLeftIcon")['default']
    'ToggleRightIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleRightIcon")['default']
    'ToolIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToolIcon")['default']
    'Trash2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Trash2Icon")['default']
    'TrashIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrashIcon")['default']
    'TrelloIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrelloIcon")['default']
    'TrendingDownIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingDownIcon")['default']
    'TrendingUpIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingUpIcon")['default']
    'TriangleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TriangleIcon")['default']
    'TruckIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TruckIcon")['default']
    'TvIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TvIcon")['default']
    'TwitchIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitchIcon")['default']
    'TwitterIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitterIcon")['default']
    'TypeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TypeIcon")['default']
    'UmbrellaIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UmbrellaIcon")['default']
    'UnderlineIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnderlineIcon")['default']
    'UnlockIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnlockIcon")['default']
    'UploadCloudIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadCloudIcon")['default']
    'UploadIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadIcon")['default']
    'UserCheckIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserCheckIcon")['default']
    'UserMinusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserMinusIcon")['default']
    'UserPlusIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserPlusIcon")['default']
    'UserXIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserXIcon")['default']
    'UserIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserIcon")['default']
    'UsersIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UsersIcon")['default']
    'VideoOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoOffIcon")['default']
    'VideoIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoIcon")['default']
    'VoicemailIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VoicemailIcon")['default']
    'Volume1Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume1Icon")['default']
    'Volume2Icon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume2Icon")['default']
    'VolumeXIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeXIcon")['default']
    'VolumeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeIcon")['default']
    'WatchIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WatchIcon")['default']
    'WifiOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiOffIcon")['default']
    'WifiIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiIcon")['default']
    'WindIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WindIcon")['default']
    'XCircleIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XCircleIcon")['default']
    'XOctagonIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XOctagonIcon")['default']
    'XSquareIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XSquareIcon")['default']
    'XIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XIcon")['default']
    'YoutubeIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/YoutubeIcon")['default']
    'ZapOffIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapOffIcon")['default']
    'ZapIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapIcon")['default']
    'ZoomInIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomInIcon")['default']
    'ZoomOutIcon': typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomOutIcon")['default']
    'MyPrefixCarousel': typeof import("vue3-carousel/dist/carousel")['Carousel']
    'MyPrefixSlide': typeof import("vue3-carousel/dist/carousel")['Slide']
    'MyPrefixPagination': typeof import("vue3-carousel/dist/carousel")['Pagination']
    'MyPrefixNavigation': typeof import("vue3-carousel/dist/carousel")['Navigation']
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
    'LazyBAccordion': LazyComponent<typeof import("bootstrap-vue-next")['BAccordion']>
    'LazyBAccordionItem': LazyComponent<typeof import("bootstrap-vue-next")['BAccordionItem']>
    'LazyBAlert': LazyComponent<typeof import("bootstrap-vue-next")['BAlert']>
    'LazyBAvatar': LazyComponent<typeof import("bootstrap-vue-next")['BAvatar']>
    'LazyBAvatarGroup': LazyComponent<typeof import("bootstrap-vue-next")['BAvatarGroup']>
    'LazyBBadge': LazyComponent<typeof import("bootstrap-vue-next")['BBadge']>
    'LazyBBreadcrumb': LazyComponent<typeof import("bootstrap-vue-next")['BBreadcrumb']>
    'LazyBBreadcrumbItem': LazyComponent<typeof import("bootstrap-vue-next")['BBreadcrumbItem']>
    'LazyBButton': LazyComponent<typeof import("bootstrap-vue-next")['BButton']>
    'LazyBButtonGroup': LazyComponent<typeof import("bootstrap-vue-next")['BButtonGroup']>
    'LazyBButtonToolbar': LazyComponent<typeof import("bootstrap-vue-next")['BButtonToolbar']>
    'LazyBCard': LazyComponent<typeof import("bootstrap-vue-next")['BCard']>
    'LazyBCardBody': LazyComponent<typeof import("bootstrap-vue-next")['BCardBody']>
    'LazyBCardFooter': LazyComponent<typeof import("bootstrap-vue-next")['BCardFooter']>
    'LazyBCardGroup': LazyComponent<typeof import("bootstrap-vue-next")['BCardGroup']>
    'LazyBCardHeader': LazyComponent<typeof import("bootstrap-vue-next")['BCardHeader']>
    'LazyBCardImg': LazyComponent<typeof import("bootstrap-vue-next")['BCardImg']>
    'LazyBCardSubtitle': LazyComponent<typeof import("bootstrap-vue-next")['BCardSubtitle']>
    'LazyBCardText': LazyComponent<typeof import("bootstrap-vue-next")['BCardText']>
    'LazyBCardTitle': LazyComponent<typeof import("bootstrap-vue-next")['BCardTitle']>
    'LazyBCarousel': LazyComponent<typeof import("bootstrap-vue-next")['BCarousel']>
    'LazyBCarouselSlide': LazyComponent<typeof import("bootstrap-vue-next")['BCarouselSlide']>
    'LazyBCloseButton': LazyComponent<typeof import("bootstrap-vue-next")['BCloseButton']>
    'LazyBCol': LazyComponent<typeof import("bootstrap-vue-next")['BCol']>
    'LazyBCollapse': LazyComponent<typeof import("bootstrap-vue-next")['BCollapse']>
    'LazyBContainer': LazyComponent<typeof import("bootstrap-vue-next")['BContainer']>
    'LazyBDropdown': LazyComponent<typeof import("bootstrap-vue-next")['BDropdown']>
    'LazyBDropdownDivider': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownDivider']>
    'LazyBDropdownForm': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownForm']>
    'LazyBDropdownGroup': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownGroup']>
    'LazyBDropdownHeader': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownHeader']>
    'LazyBDropdownItem': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownItem']>
    'LazyBDropdownItemButton': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownItemButton']>
    'LazyBDropdownText': LazyComponent<typeof import("bootstrap-vue-next")['BDropdownText']>
    'LazyBForm': LazyComponent<typeof import("bootstrap-vue-next")['BForm']>
    'LazyBFormCheckbox': LazyComponent<typeof import("bootstrap-vue-next")['BFormCheckbox']>
    'LazyBFormCheckboxGroup': LazyComponent<typeof import("bootstrap-vue-next")['BFormCheckboxGroup']>
    'LazyBFormFile': LazyComponent<typeof import("bootstrap-vue-next")['BFormFile']>
    'LazyBFormFloatingLabel': LazyComponent<typeof import("bootstrap-vue-next")['BFormFloatingLabel']>
    'LazyBFormGroup': LazyComponent<typeof import("bootstrap-vue-next")['BFormGroup']>
    'LazyBFormInput': LazyComponent<typeof import("bootstrap-vue-next")['BFormInput']>
    'LazyBFormInvalidFeedback': LazyComponent<typeof import("bootstrap-vue-next")['BFormInvalidFeedback']>
    'LazyBFormRadio': LazyComponent<typeof import("bootstrap-vue-next")['BFormRadio']>
    'LazyBFormRadioGroup': LazyComponent<typeof import("bootstrap-vue-next")['BFormRadioGroup']>
    'LazyBFormRow': LazyComponent<typeof import("bootstrap-vue-next")['BFormRow']>
    'LazyBFormSelect': LazyComponent<typeof import("bootstrap-vue-next")['BFormSelect']>
    'LazyBFormSelectOption': LazyComponent<typeof import("bootstrap-vue-next")['BFormSelectOption']>
    'LazyBFormSelectOptionGroup': LazyComponent<typeof import("bootstrap-vue-next")['BFormSelectOptionGroup']>
    'LazyBFormSpinbutton': LazyComponent<typeof import("bootstrap-vue-next")['BFormSpinbutton']>
    'LazyBFormTag': LazyComponent<typeof import("bootstrap-vue-next")['BFormTag']>
    'LazyBFormTags': LazyComponent<typeof import("bootstrap-vue-next")['BFormTags']>
    'LazyBFormText': LazyComponent<typeof import("bootstrap-vue-next")['BFormText']>
    'LazyBFormTextarea': LazyComponent<typeof import("bootstrap-vue-next")['BFormTextarea']>
    'LazyBFormValidFeedback': LazyComponent<typeof import("bootstrap-vue-next")['BFormValidFeedback']>
    'LazyBImg': LazyComponent<typeof import("bootstrap-vue-next")['BImg']>
    'LazyBInputGroup': LazyComponent<typeof import("bootstrap-vue-next")['BInputGroup']>
    'LazyBInputGroupAddon': LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupAddon']>
    'LazyBInputGroupAppend': LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupAppend']>
    'LazyBInputGroupPrepend': LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupPrepend']>
    'LazyBInputGroupText': LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupText']>
    'LazyBLink': LazyComponent<typeof import("bootstrap-vue-next")['BLink']>
    'LazyBListGroup': LazyComponent<typeof import("bootstrap-vue-next")['BListGroup']>
    'LazyBListGroupItem': LazyComponent<typeof import("bootstrap-vue-next")['BListGroupItem']>
    'LazyBModal': LazyComponent<typeof import("bootstrap-vue-next")['BModal']>
    'LazyBModalOrchestrator': LazyComponent<typeof import("bootstrap-vue-next")['BModalOrchestrator']>
    'LazyBNav': LazyComponent<typeof import("bootstrap-vue-next")['BNav']>
    'LazyBNavForm': LazyComponent<typeof import("bootstrap-vue-next")['BNavForm']>
    'LazyBNavItem': LazyComponent<typeof import("bootstrap-vue-next")['BNavItem']>
    'LazyBNavItemDropdown': LazyComponent<typeof import("bootstrap-vue-next")['BNavItemDropdown']>
    'LazyBNavText': LazyComponent<typeof import("bootstrap-vue-next")['BNavText']>
    'LazyBNavbar': LazyComponent<typeof import("bootstrap-vue-next")['BNavbar']>
    'LazyBNavbarBrand': LazyComponent<typeof import("bootstrap-vue-next")['BNavbarBrand']>
    'LazyBNavbarNav': LazyComponent<typeof import("bootstrap-vue-next")['BNavbarNav']>
    'LazyBNavbarToggle': LazyComponent<typeof import("bootstrap-vue-next")['BNavbarToggle']>
    'LazyBOffcanvas': LazyComponent<typeof import("bootstrap-vue-next")['BOffcanvas']>
    'LazyBOverlay': LazyComponent<typeof import("bootstrap-vue-next")['BOverlay']>
    'LazyBPagination': LazyComponent<typeof import("bootstrap-vue-next")['BPagination']>
    'LazyBPlaceholder': LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholder']>
    'LazyBPlaceholderButton': LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderButton']>
    'LazyBPlaceholderCard': LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderCard']>
    'LazyBPlaceholderTable': LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderTable']>
    'LazyBPlaceholderWrapper': LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderWrapper']>
    'LazyBPopover': LazyComponent<typeof import("bootstrap-vue-next")['BPopover']>
    'LazyBProgress': LazyComponent<typeof import("bootstrap-vue-next")['BProgress']>
    'LazyBProgressBar': LazyComponent<typeof import("bootstrap-vue-next")['BProgressBar']>
    'LazyBRow': LazyComponent<typeof import("bootstrap-vue-next")['BRow']>
    'LazyBSpinner': LazyComponent<typeof import("bootstrap-vue-next")['BSpinner']>
    'LazyBTab': LazyComponent<typeof import("bootstrap-vue-next")['BTab']>
    'LazyBTable': LazyComponent<typeof import("bootstrap-vue-next")['BTable']>
    'LazyBTableLite': LazyComponent<typeof import("bootstrap-vue-next")['BTableLite']>
    'LazyBTableSimple': LazyComponent<typeof import("bootstrap-vue-next")['BTableSimple']>
    'LazyBTabs': LazyComponent<typeof import("bootstrap-vue-next")['BTabs']>
    'LazyBTbody': LazyComponent<typeof import("bootstrap-vue-next")['BTbody']>
    'LazyBTd': LazyComponent<typeof import("bootstrap-vue-next")['BTd']>
    'LazyBTfoot': LazyComponent<typeof import("bootstrap-vue-next")['BTfoot']>
    'LazyBTh': LazyComponent<typeof import("bootstrap-vue-next")['BTh']>
    'LazyBThead': LazyComponent<typeof import("bootstrap-vue-next")['BThead']>
    'LazyBToast': LazyComponent<typeof import("bootstrap-vue-next")['BToast']>
    'LazyBToastOrchestrator': LazyComponent<typeof import("bootstrap-vue-next")['BToastOrchestrator']>
    'LazyBTooltip': LazyComponent<typeof import("bootstrap-vue-next")['BTooltip']>
    'LazyBTr': LazyComponent<typeof import("bootstrap-vue-next")['BTr']>
    'LazyBTransition': LazyComponent<typeof import("bootstrap-vue-next")['BTransition']>
    'LazyActivityIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ActivityIcon")['default']>
    'LazyAirplayIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AirplayIcon")['default']>
    'LazyAlertCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertCircleIcon")['default']>
    'LazyAlertOctagonIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertOctagonIcon")['default']>
    'LazyAlertTriangleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertTriangleIcon")['default']>
    'LazyAlignCenterIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignCenterIcon")['default']>
    'LazyAlignJustifyIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignJustifyIcon")['default']>
    'LazyAlignLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignLeftIcon")['default']>
    'LazyAlignRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignRightIcon")['default']>
    'LazyAnchorIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AnchorIcon")['default']>
    'LazyApertureIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ApertureIcon")['default']>
    'LazyArchiveIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArchiveIcon")['default']>
    'LazyArrowDownCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownCircleIcon")['default']>
    'LazyArrowDownLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownLeftIcon")['default']>
    'LazyArrowDownRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownRightIcon")['default']>
    'LazyArrowDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownIcon")['default']>
    'LazyArrowLeftCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftCircleIcon")['default']>
    'LazyArrowLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftIcon")['default']>
    'LazyArrowRightCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightCircleIcon")['default']>
    'LazyArrowRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightIcon")['default']>
    'LazyArrowUpCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpCircleIcon")['default']>
    'LazyArrowUpLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpLeftIcon")['default']>
    'LazyArrowUpRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpRightIcon")['default']>
    'LazyArrowUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpIcon")['default']>
    'LazyAtSignIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AtSignIcon")['default']>
    'LazyAwardIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AwardIcon")['default']>
    'LazyBarChart2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChart2Icon")['default']>
    'LazyBarChartIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChartIcon")['default']>
    'LazyBatteryChargingIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryChargingIcon")['default']>
    'LazyBatteryIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryIcon")['default']>
    'LazyBellOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellOffIcon")['default']>
    'LazyBellIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellIcon")['default']>
    'LazyBluetoothIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BluetoothIcon")['default']>
    'LazyBoldIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoldIcon")['default']>
    'LazyBookOpenIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookOpenIcon")['default']>
    'LazyBookIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookIcon")['default']>
    'LazyBookmarkIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookmarkIcon")['default']>
    'LazyBoxIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoxIcon")['default']>
    'LazyBriefcaseIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BriefcaseIcon")['default']>
    'LazyCalendarIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CalendarIcon")['default']>
    'LazyCameraOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraOffIcon")['default']>
    'LazyCameraIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraIcon")['default']>
    'LazyCastIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CastIcon")['default']>
    'LazyCheckCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckCircleIcon")['default']>
    'LazyCheckSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckSquareIcon")['default']>
    'LazyCheckIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckIcon")['default']>
    'LazyChevronDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronDownIcon")['default']>
    'LazyChevronLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronLeftIcon")['default']>
    'LazyChevronRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronRightIcon")['default']>
    'LazyChevronUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronUpIcon")['default']>
    'LazyChevronsDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsDownIcon")['default']>
    'LazyChevronsLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsLeftIcon")['default']>
    'LazyChevronsRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsRightIcon")['default']>
    'LazyChevronsUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsUpIcon")['default']>
    'LazyChromeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChromeIcon")['default']>
    'LazyCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CircleIcon")['default']>
    'LazyClipboardIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClipboardIcon")['default']>
    'LazyClockIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClockIcon")['default']>
    'LazyCloudDrizzleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudDrizzleIcon")['default']>
    'LazyCloudLightningIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudLightningIcon")['default']>
    'LazyCloudOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudOffIcon")['default']>
    'LazyCloudRainIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudRainIcon")['default']>
    'LazyCloudSnowIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudSnowIcon")['default']>
    'LazyCloudIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudIcon")['default']>
    'LazyCodeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodeIcon")['default']>
    'LazyCodepenIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodepenIcon")['default']>
    'LazyCodesandboxIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodesandboxIcon")['default']>
    'LazyCoffeeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CoffeeIcon")['default']>
    'LazyColumnsIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ColumnsIcon")['default']>
    'LazyCommandIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CommandIcon")['default']>
    'LazyCompassIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CompassIcon")['default']>
    'LazyCopyIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CopyIcon")['default']>
    'LazyCornerDownLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownLeftIcon")['default']>
    'LazyCornerDownRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownRightIcon")['default']>
    'LazyCornerLeftDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftDownIcon")['default']>
    'LazyCornerLeftUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftUpIcon")['default']>
    'LazyCornerRightDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightDownIcon")['default']>
    'LazyCornerRightUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightUpIcon")['default']>
    'LazyCornerUpLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpLeftIcon")['default']>
    'LazyCornerUpRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpRightIcon")['default']>
    'LazyCpuIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CpuIcon")['default']>
    'LazyCreditCardIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CreditCardIcon")['default']>
    'LazyCropIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CropIcon")['default']>
    'LazyCrosshairIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CrosshairIcon")['default']>
    'LazyDatabaseIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DatabaseIcon")['default']>
    'LazyDeleteIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DeleteIcon")['default']>
    'LazyDiscIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DiscIcon")['default']>
    'LazyDivideCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideCircleIcon")['default']>
    'LazyDivideSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideSquareIcon")['default']>
    'LazyDivideIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideIcon")['default']>
    'LazyDollarSignIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DollarSignIcon")['default']>
    'LazyDownloadCloudIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadCloudIcon")['default']>
    'LazyDownloadIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadIcon")['default']>
    'LazyDribbbleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DribbbleIcon")['default']>
    'LazyDropletIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DropletIcon")['default']>
    'LazyEdit2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit2Icon")['default']>
    'LazyEdit3Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit3Icon")['default']>
    'LazyEditIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EditIcon")['default']>
    'LazyExternalLinkIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ExternalLinkIcon")['default']>
    'LazyEyeOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeOffIcon")['default']>
    'LazyEyeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeIcon")['default']>
    'LazyFacebookIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FacebookIcon")['default']>
    'LazyFastForwardIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FastForwardIcon")['default']>
    'LazyFeatherIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FeatherIcon")['default']>
    'LazyFigmaIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FigmaIcon")['default']>
    'LazyFileMinusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileMinusIcon")['default']>
    'LazyFilePlusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilePlusIcon")['default']>
    'LazyFileTextIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileTextIcon")['default']>
    'LazyFileIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileIcon")['default']>
    'LazyFilmIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilmIcon")['default']>
    'LazyFilterIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilterIcon")['default']>
    'LazyFlagIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FlagIcon")['default']>
    'LazyFolderMinusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderMinusIcon")['default']>
    'LazyFolderPlusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderPlusIcon")['default']>
    'LazyFolderIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderIcon")['default']>
    'LazyFramerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FramerIcon")['default']>
    'LazyFrownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FrownIcon")['default']>
    'LazyGiftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GiftIcon")['default']>
    'LazyGitBranchIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitBranchIcon")['default']>
    'LazyGitCommitIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitCommitIcon")['default']>
    'LazyGitMergeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitMergeIcon")['default']>
    'LazyGitPullRequestIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitPullRequestIcon")['default']>
    'LazyGithubIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GithubIcon")['default']>
    'LazyGitlabIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitlabIcon")['default']>
    'LazyGlobeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GlobeIcon")['default']>
    'LazyGridIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GridIcon")['default']>
    'LazyHardDriveIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HardDriveIcon")['default']>
    'LazyHashIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HashIcon")['default']>
    'LazyHeadphonesIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeadphonesIcon")['default']>
    'LazyHeartIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeartIcon")['default']>
    'LazyHelpCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HelpCircleIcon")['default']>
    'LazyHexagonIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HexagonIcon")['default']>
    'LazyHomeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HomeIcon")['default']>
    'LazyImageIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ImageIcon")['default']>
    'LazyInboxIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InboxIcon")['default']>
    'LazyInfoIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InfoIcon")['default']>
    'LazyInstagramIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InstagramIcon")['default']>
    'LazyItalicIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ItalicIcon")['default']>
    'LazyKeyIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/KeyIcon")['default']>
    'LazyLayersIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayersIcon")['default']>
    'LazyLayoutIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayoutIcon")['default']>
    'LazyLifeBuoyIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LifeBuoyIcon")['default']>
    'LazyLink2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Link2Icon")['default']>
    'LazyLinkIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkIcon")['default']>
    'LazyLinkedinIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkedinIcon")['default']>
    'LazyListIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ListIcon")['default']>
    'LazyLoaderIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LoaderIcon")['default']>
    'LazyLockIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LockIcon")['default']>
    'LazyLogInIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogInIcon")['default']>
    'LazyLogOutIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogOutIcon")['default']>
    'LazyMailIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MailIcon")['default']>
    'LazyMapPinIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapPinIcon")['default']>
    'LazyMapIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapIcon")['default']>
    'LazyMaximize2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Maximize2Icon")['default']>
    'LazyMaximizeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MaximizeIcon")['default']>
    'LazyMehIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MehIcon")['default']>
    'LazyMenuIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MenuIcon")['default']>
    'LazyMessageCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageCircleIcon")['default']>
    'LazyMessageSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageSquareIcon")['default']>
    'LazyMicOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicOffIcon")['default']>
    'LazyMicIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicIcon")['default']>
    'LazyMinimize2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Minimize2Icon")['default']>
    'LazyMinimizeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinimizeIcon")['default']>
    'LazyMinusCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusCircleIcon")['default']>
    'LazyMinusSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusSquareIcon")['default']>
    'LazyMinusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusIcon")['default']>
    'LazyMonitorIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MonitorIcon")['default']>
    'LazyMoonIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoonIcon")['default']>
    'LazyMoreHorizontalIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreHorizontalIcon")['default']>
    'LazyMoreVerticalIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreVerticalIcon")['default']>
    'LazyMousePointerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MousePointerIcon")['default']>
    'LazyMoveIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoveIcon")['default']>
    'LazyMusicIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MusicIcon")['default']>
    'LazyNavigation2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Navigation2Icon")['default']>
    'LazyNavigationIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/NavigationIcon")['default']>
    'LazyOctagonIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/OctagonIcon")['default']>
    'LazyPackageIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PackageIcon")['default']>
    'LazyPaperclipIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PaperclipIcon")['default']>
    'LazyPauseCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseCircleIcon")['default']>
    'LazyPauseIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseIcon")['default']>
    'LazyPenToolIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PenToolIcon")['default']>
    'LazyPercentIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PercentIcon")['default']>
    'LazyPhoneCallIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneCallIcon")['default']>
    'LazyPhoneForwardedIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneForwardedIcon")['default']>
    'LazyPhoneIncomingIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIncomingIcon")['default']>
    'LazyPhoneMissedIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneMissedIcon")['default']>
    'LazyPhoneOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOffIcon")['default']>
    'LazyPhoneOutgoingIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOutgoingIcon")['default']>
    'LazyPhoneIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIcon")['default']>
    'LazyPieChartIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PieChartIcon")['default']>
    'LazyPlayCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayCircleIcon")['default']>
    'LazyPlayIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayIcon")['default']>
    'LazyPlusCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusCircleIcon")['default']>
    'LazyPlusSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusSquareIcon")['default']>
    'LazyPlusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusIcon")['default']>
    'LazyPocketIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PocketIcon")['default']>
    'LazyPowerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PowerIcon")['default']>
    'LazyPrinterIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PrinterIcon")['default']>
    'LazyRadioIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RadioIcon")['default']>
    'LazyRefreshCcwIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCcwIcon")['default']>
    'LazyRefreshCwIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCwIcon")['default']>
    'LazyRepeatIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RepeatIcon")['default']>
    'LazyRewindIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RewindIcon")['default']>
    'LazyRotateCcwIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCcwIcon")['default']>
    'LazyRotateCwIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCwIcon")['default']>
    'LazyRssIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RssIcon")['default']>
    'LazySaveIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SaveIcon")['default']>
    'LazyScissorsIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ScissorsIcon")['default']>
    'LazySearchIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SearchIcon")['default']>
    'LazySendIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SendIcon")['default']>
    'LazyServerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ServerIcon")['default']>
    'LazySettingsIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SettingsIcon")['default']>
    'LazyShare2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Share2Icon")['default']>
    'LazyShareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShareIcon")['default']>
    'LazyShieldOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldOffIcon")['default']>
    'LazyShieldIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldIcon")['default']>
    'LazyShoppingBagIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingBagIcon")['default']>
    'LazyShoppingCartIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingCartIcon")['default']>
    'LazyShuffleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShuffleIcon")['default']>
    'LazySidebarIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SidebarIcon")['default']>
    'LazySkipBackIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipBackIcon")['default']>
    'LazySkipForwardIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipForwardIcon")['default']>
    'LazySlackIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlackIcon")['default']>
    'LazySlashIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlashIcon")['default']>
    'LazySlidersIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlidersIcon")['default']>
    'LazySmartphoneIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmartphoneIcon")['default']>
    'LazySmileIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmileIcon")['default']>
    'LazySpeakerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SpeakerIcon")['default']>
    'LazySquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SquareIcon")['default']>
    'LazyStarIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StarIcon")['default']>
    'LazyStopCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StopCircleIcon")['default']>
    'LazySunIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunIcon")['default']>
    'LazySunriseIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunriseIcon")['default']>
    'LazySunsetIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunsetIcon")['default']>
    'LazyTableIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TableIcon")['default']>
    'LazyTabletIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TabletIcon")['default']>
    'LazyTagIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TagIcon")['default']>
    'LazyTargetIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TargetIcon")['default']>
    'LazyTerminalIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TerminalIcon")['default']>
    'LazyThermometerIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThermometerIcon")['default']>
    'LazyThumbsDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsDownIcon")['default']>
    'LazyThumbsUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsUpIcon")['default']>
    'LazyToggleLeftIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleLeftIcon")['default']>
    'LazyToggleRightIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleRightIcon")['default']>
    'LazyToolIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToolIcon")['default']>
    'LazyTrash2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Trash2Icon")['default']>
    'LazyTrashIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrashIcon")['default']>
    'LazyTrelloIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrelloIcon")['default']>
    'LazyTrendingDownIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingDownIcon")['default']>
    'LazyTrendingUpIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingUpIcon")['default']>
    'LazyTriangleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TriangleIcon")['default']>
    'LazyTruckIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TruckIcon")['default']>
    'LazyTvIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TvIcon")['default']>
    'LazyTwitchIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitchIcon")['default']>
    'LazyTwitterIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitterIcon")['default']>
    'LazyTypeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TypeIcon")['default']>
    'LazyUmbrellaIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UmbrellaIcon")['default']>
    'LazyUnderlineIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnderlineIcon")['default']>
    'LazyUnlockIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnlockIcon")['default']>
    'LazyUploadCloudIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadCloudIcon")['default']>
    'LazyUploadIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadIcon")['default']>
    'LazyUserCheckIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserCheckIcon")['default']>
    'LazyUserMinusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserMinusIcon")['default']>
    'LazyUserPlusIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserPlusIcon")['default']>
    'LazyUserXIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserXIcon")['default']>
    'LazyUserIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserIcon")['default']>
    'LazyUsersIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UsersIcon")['default']>
    'LazyVideoOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoOffIcon")['default']>
    'LazyVideoIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoIcon")['default']>
    'LazyVoicemailIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VoicemailIcon")['default']>
    'LazyVolume1Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume1Icon")['default']>
    'LazyVolume2Icon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume2Icon")['default']>
    'LazyVolumeXIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeXIcon")['default']>
    'LazyVolumeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeIcon")['default']>
    'LazyWatchIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WatchIcon")['default']>
    'LazyWifiOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiOffIcon")['default']>
    'LazyWifiIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiIcon")['default']>
    'LazyWindIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WindIcon")['default']>
    'LazyXCircleIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XCircleIcon")['default']>
    'LazyXOctagonIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XOctagonIcon")['default']>
    'LazyXSquareIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XSquareIcon")['default']>
    'LazyXIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XIcon")['default']>
    'LazyYoutubeIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/YoutubeIcon")['default']>
    'LazyZapOffIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapOffIcon")['default']>
    'LazyZapIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapIcon")['default']>
    'LazyZoomInIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomInIcon")['default']>
    'LazyZoomOutIcon': LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomOutIcon")['default']>
    'LazyMyPrefixCarousel': LazyComponent<typeof import("vue3-carousel/dist/carousel")['Carousel']>
    'LazyMyPrefixSlide': LazyComponent<typeof import("vue3-carousel/dist/carousel")['Slide']>
    'LazyMyPrefixPagination': LazyComponent<typeof import("vue3-carousel/dist/carousel")['Pagination']>
    'LazyMyPrefixNavigation': LazyComponent<typeof import("vue3-carousel/dist/carousel")['Navigation']>
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
export const BAccordion: typeof import("bootstrap-vue-next")['BAccordion']
export const BAccordionItem: typeof import("bootstrap-vue-next")['BAccordionItem']
export const BAlert: typeof import("bootstrap-vue-next")['BAlert']
export const BAvatar: typeof import("bootstrap-vue-next")['BAvatar']
export const BAvatarGroup: typeof import("bootstrap-vue-next")['BAvatarGroup']
export const BBadge: typeof import("bootstrap-vue-next")['BBadge']
export const BBreadcrumb: typeof import("bootstrap-vue-next")['BBreadcrumb']
export const BBreadcrumbItem: typeof import("bootstrap-vue-next")['BBreadcrumbItem']
export const BButton: typeof import("bootstrap-vue-next")['BButton']
export const BButtonGroup: typeof import("bootstrap-vue-next")['BButtonGroup']
export const BButtonToolbar: typeof import("bootstrap-vue-next")['BButtonToolbar']
export const BCard: typeof import("bootstrap-vue-next")['BCard']
export const BCardBody: typeof import("bootstrap-vue-next")['BCardBody']
export const BCardFooter: typeof import("bootstrap-vue-next")['BCardFooter']
export const BCardGroup: typeof import("bootstrap-vue-next")['BCardGroup']
export const BCardHeader: typeof import("bootstrap-vue-next")['BCardHeader']
export const BCardImg: typeof import("bootstrap-vue-next")['BCardImg']
export const BCardSubtitle: typeof import("bootstrap-vue-next")['BCardSubtitle']
export const BCardText: typeof import("bootstrap-vue-next")['BCardText']
export const BCardTitle: typeof import("bootstrap-vue-next")['BCardTitle']
export const BCarousel: typeof import("bootstrap-vue-next")['BCarousel']
export const BCarouselSlide: typeof import("bootstrap-vue-next")['BCarouselSlide']
export const BCloseButton: typeof import("bootstrap-vue-next")['BCloseButton']
export const BCol: typeof import("bootstrap-vue-next")['BCol']
export const BCollapse: typeof import("bootstrap-vue-next")['BCollapse']
export const BContainer: typeof import("bootstrap-vue-next")['BContainer']
export const BDropdown: typeof import("bootstrap-vue-next")['BDropdown']
export const BDropdownDivider: typeof import("bootstrap-vue-next")['BDropdownDivider']
export const BDropdownForm: typeof import("bootstrap-vue-next")['BDropdownForm']
export const BDropdownGroup: typeof import("bootstrap-vue-next")['BDropdownGroup']
export const BDropdownHeader: typeof import("bootstrap-vue-next")['BDropdownHeader']
export const BDropdownItem: typeof import("bootstrap-vue-next")['BDropdownItem']
export const BDropdownItemButton: typeof import("bootstrap-vue-next")['BDropdownItemButton']
export const BDropdownText: typeof import("bootstrap-vue-next")['BDropdownText']
export const BForm: typeof import("bootstrap-vue-next")['BForm']
export const BFormCheckbox: typeof import("bootstrap-vue-next")['BFormCheckbox']
export const BFormCheckboxGroup: typeof import("bootstrap-vue-next")['BFormCheckboxGroup']
export const BFormFile: typeof import("bootstrap-vue-next")['BFormFile']
export const BFormFloatingLabel: typeof import("bootstrap-vue-next")['BFormFloatingLabel']
export const BFormGroup: typeof import("bootstrap-vue-next")['BFormGroup']
export const BFormInput: typeof import("bootstrap-vue-next")['BFormInput']
export const BFormInvalidFeedback: typeof import("bootstrap-vue-next")['BFormInvalidFeedback']
export const BFormRadio: typeof import("bootstrap-vue-next")['BFormRadio']
export const BFormRadioGroup: typeof import("bootstrap-vue-next")['BFormRadioGroup']
export const BFormRow: typeof import("bootstrap-vue-next")['BFormRow']
export const BFormSelect: typeof import("bootstrap-vue-next")['BFormSelect']
export const BFormSelectOption: typeof import("bootstrap-vue-next")['BFormSelectOption']
export const BFormSelectOptionGroup: typeof import("bootstrap-vue-next")['BFormSelectOptionGroup']
export const BFormSpinbutton: typeof import("bootstrap-vue-next")['BFormSpinbutton']
export const BFormTag: typeof import("bootstrap-vue-next")['BFormTag']
export const BFormTags: typeof import("bootstrap-vue-next")['BFormTags']
export const BFormText: typeof import("bootstrap-vue-next")['BFormText']
export const BFormTextarea: typeof import("bootstrap-vue-next")['BFormTextarea']
export const BFormValidFeedback: typeof import("bootstrap-vue-next")['BFormValidFeedback']
export const BImg: typeof import("bootstrap-vue-next")['BImg']
export const BInputGroup: typeof import("bootstrap-vue-next")['BInputGroup']
export const BInputGroupAddon: typeof import("bootstrap-vue-next")['BInputGroupAddon']
export const BInputGroupAppend: typeof import("bootstrap-vue-next")['BInputGroupAppend']
export const BInputGroupPrepend: typeof import("bootstrap-vue-next")['BInputGroupPrepend']
export const BInputGroupText: typeof import("bootstrap-vue-next")['BInputGroupText']
export const BLink: typeof import("bootstrap-vue-next")['BLink']
export const BListGroup: typeof import("bootstrap-vue-next")['BListGroup']
export const BListGroupItem: typeof import("bootstrap-vue-next")['BListGroupItem']
export const BModal: typeof import("bootstrap-vue-next")['BModal']
export const BModalOrchestrator: typeof import("bootstrap-vue-next")['BModalOrchestrator']
export const BNav: typeof import("bootstrap-vue-next")['BNav']
export const BNavForm: typeof import("bootstrap-vue-next")['BNavForm']
export const BNavItem: typeof import("bootstrap-vue-next")['BNavItem']
export const BNavItemDropdown: typeof import("bootstrap-vue-next")['BNavItemDropdown']
export const BNavText: typeof import("bootstrap-vue-next")['BNavText']
export const BNavbar: typeof import("bootstrap-vue-next")['BNavbar']
export const BNavbarBrand: typeof import("bootstrap-vue-next")['BNavbarBrand']
export const BNavbarNav: typeof import("bootstrap-vue-next")['BNavbarNav']
export const BNavbarToggle: typeof import("bootstrap-vue-next")['BNavbarToggle']
export const BOffcanvas: typeof import("bootstrap-vue-next")['BOffcanvas']
export const BOverlay: typeof import("bootstrap-vue-next")['BOverlay']
export const BPagination: typeof import("bootstrap-vue-next")['BPagination']
export const BPlaceholder: typeof import("bootstrap-vue-next")['BPlaceholder']
export const BPlaceholderButton: typeof import("bootstrap-vue-next")['BPlaceholderButton']
export const BPlaceholderCard: typeof import("bootstrap-vue-next")['BPlaceholderCard']
export const BPlaceholderTable: typeof import("bootstrap-vue-next")['BPlaceholderTable']
export const BPlaceholderWrapper: typeof import("bootstrap-vue-next")['BPlaceholderWrapper']
export const BPopover: typeof import("bootstrap-vue-next")['BPopover']
export const BProgress: typeof import("bootstrap-vue-next")['BProgress']
export const BProgressBar: typeof import("bootstrap-vue-next")['BProgressBar']
export const BRow: typeof import("bootstrap-vue-next")['BRow']
export const BSpinner: typeof import("bootstrap-vue-next")['BSpinner']
export const BTab: typeof import("bootstrap-vue-next")['BTab']
export const BTable: typeof import("bootstrap-vue-next")['BTable']
export const BTableLite: typeof import("bootstrap-vue-next")['BTableLite']
export const BTableSimple: typeof import("bootstrap-vue-next")['BTableSimple']
export const BTabs: typeof import("bootstrap-vue-next")['BTabs']
export const BTbody: typeof import("bootstrap-vue-next")['BTbody']
export const BTd: typeof import("bootstrap-vue-next")['BTd']
export const BTfoot: typeof import("bootstrap-vue-next")['BTfoot']
export const BTh: typeof import("bootstrap-vue-next")['BTh']
export const BThead: typeof import("bootstrap-vue-next")['BThead']
export const BToast: typeof import("bootstrap-vue-next")['BToast']
export const BToastOrchestrator: typeof import("bootstrap-vue-next")['BToastOrchestrator']
export const BTooltip: typeof import("bootstrap-vue-next")['BTooltip']
export const BTr: typeof import("bootstrap-vue-next")['BTr']
export const BTransition: typeof import("bootstrap-vue-next")['BTransition']
export const ActivityIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ActivityIcon")['default']
export const AirplayIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AirplayIcon")['default']
export const AlertCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertCircleIcon")['default']
export const AlertOctagonIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertOctagonIcon")['default']
export const AlertTriangleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertTriangleIcon")['default']
export const AlignCenterIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignCenterIcon")['default']
export const AlignJustifyIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignJustifyIcon")['default']
export const AlignLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignLeftIcon")['default']
export const AlignRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignRightIcon")['default']
export const AnchorIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AnchorIcon")['default']
export const ApertureIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ApertureIcon")['default']
export const ArchiveIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArchiveIcon")['default']
export const ArrowDownCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownCircleIcon")['default']
export const ArrowDownLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownLeftIcon")['default']
export const ArrowDownRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownRightIcon")['default']
export const ArrowDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownIcon")['default']
export const ArrowLeftCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftCircleIcon")['default']
export const ArrowLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftIcon")['default']
export const ArrowRightCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightCircleIcon")['default']
export const ArrowRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightIcon")['default']
export const ArrowUpCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpCircleIcon")['default']
export const ArrowUpLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpLeftIcon")['default']
export const ArrowUpRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpRightIcon")['default']
export const ArrowUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpIcon")['default']
export const AtSignIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AtSignIcon")['default']
export const AwardIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AwardIcon")['default']
export const BarChart2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChart2Icon")['default']
export const BarChartIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChartIcon")['default']
export const BatteryChargingIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryChargingIcon")['default']
export const BatteryIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryIcon")['default']
export const BellOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellOffIcon")['default']
export const BellIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellIcon")['default']
export const BluetoothIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BluetoothIcon")['default']
export const BoldIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoldIcon")['default']
export const BookOpenIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookOpenIcon")['default']
export const BookIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookIcon")['default']
export const BookmarkIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookmarkIcon")['default']
export const BoxIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoxIcon")['default']
export const BriefcaseIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BriefcaseIcon")['default']
export const CalendarIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CalendarIcon")['default']
export const CameraOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraOffIcon")['default']
export const CameraIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraIcon")['default']
export const CastIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CastIcon")['default']
export const CheckCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckCircleIcon")['default']
export const CheckSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckSquareIcon")['default']
export const CheckIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckIcon")['default']
export const ChevronDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronDownIcon")['default']
export const ChevronLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronLeftIcon")['default']
export const ChevronRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronRightIcon")['default']
export const ChevronUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronUpIcon")['default']
export const ChevronsDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsDownIcon")['default']
export const ChevronsLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsLeftIcon")['default']
export const ChevronsRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsRightIcon")['default']
export const ChevronsUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsUpIcon")['default']
export const ChromeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChromeIcon")['default']
export const CircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CircleIcon")['default']
export const ClipboardIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClipboardIcon")['default']
export const ClockIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClockIcon")['default']
export const CloudDrizzleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudDrizzleIcon")['default']
export const CloudLightningIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudLightningIcon")['default']
export const CloudOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudOffIcon")['default']
export const CloudRainIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudRainIcon")['default']
export const CloudSnowIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudSnowIcon")['default']
export const CloudIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudIcon")['default']
export const CodeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodeIcon")['default']
export const CodepenIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodepenIcon")['default']
export const CodesandboxIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodesandboxIcon")['default']
export const CoffeeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CoffeeIcon")['default']
export const ColumnsIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ColumnsIcon")['default']
export const CommandIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CommandIcon")['default']
export const CompassIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CompassIcon")['default']
export const CopyIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CopyIcon")['default']
export const CornerDownLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownLeftIcon")['default']
export const CornerDownRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownRightIcon")['default']
export const CornerLeftDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftDownIcon")['default']
export const CornerLeftUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftUpIcon")['default']
export const CornerRightDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightDownIcon")['default']
export const CornerRightUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightUpIcon")['default']
export const CornerUpLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpLeftIcon")['default']
export const CornerUpRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpRightIcon")['default']
export const CpuIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CpuIcon")['default']
export const CreditCardIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CreditCardIcon")['default']
export const CropIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CropIcon")['default']
export const CrosshairIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CrosshairIcon")['default']
export const DatabaseIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DatabaseIcon")['default']
export const DeleteIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DeleteIcon")['default']
export const DiscIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DiscIcon")['default']
export const DivideCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideCircleIcon")['default']
export const DivideSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideSquareIcon")['default']
export const DivideIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideIcon")['default']
export const DollarSignIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DollarSignIcon")['default']
export const DownloadCloudIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadCloudIcon")['default']
export const DownloadIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadIcon")['default']
export const DribbbleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DribbbleIcon")['default']
export const DropletIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DropletIcon")['default']
export const Edit2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit2Icon")['default']
export const Edit3Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit3Icon")['default']
export const EditIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EditIcon")['default']
export const ExternalLinkIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ExternalLinkIcon")['default']
export const EyeOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeOffIcon")['default']
export const EyeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeIcon")['default']
export const FacebookIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FacebookIcon")['default']
export const FastForwardIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FastForwardIcon")['default']
export const FeatherIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FeatherIcon")['default']
export const FigmaIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FigmaIcon")['default']
export const FileMinusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileMinusIcon")['default']
export const FilePlusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilePlusIcon")['default']
export const FileTextIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileTextIcon")['default']
export const FileIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileIcon")['default']
export const FilmIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilmIcon")['default']
export const FilterIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilterIcon")['default']
export const FlagIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FlagIcon")['default']
export const FolderMinusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderMinusIcon")['default']
export const FolderPlusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderPlusIcon")['default']
export const FolderIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderIcon")['default']
export const FramerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FramerIcon")['default']
export const FrownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FrownIcon")['default']
export const GiftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GiftIcon")['default']
export const GitBranchIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitBranchIcon")['default']
export const GitCommitIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitCommitIcon")['default']
export const GitMergeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitMergeIcon")['default']
export const GitPullRequestIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitPullRequestIcon")['default']
export const GithubIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GithubIcon")['default']
export const GitlabIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitlabIcon")['default']
export const GlobeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GlobeIcon")['default']
export const GridIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GridIcon")['default']
export const HardDriveIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HardDriveIcon")['default']
export const HashIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HashIcon")['default']
export const HeadphonesIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeadphonesIcon")['default']
export const HeartIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeartIcon")['default']
export const HelpCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HelpCircleIcon")['default']
export const HexagonIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HexagonIcon")['default']
export const HomeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HomeIcon")['default']
export const ImageIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ImageIcon")['default']
export const InboxIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InboxIcon")['default']
export const InfoIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InfoIcon")['default']
export const InstagramIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InstagramIcon")['default']
export const ItalicIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ItalicIcon")['default']
export const KeyIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/KeyIcon")['default']
export const LayersIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayersIcon")['default']
export const LayoutIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayoutIcon")['default']
export const LifeBuoyIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LifeBuoyIcon")['default']
export const Link2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Link2Icon")['default']
export const LinkIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkIcon")['default']
export const LinkedinIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkedinIcon")['default']
export const ListIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ListIcon")['default']
export const LoaderIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LoaderIcon")['default']
export const LockIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LockIcon")['default']
export const LogInIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogInIcon")['default']
export const LogOutIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogOutIcon")['default']
export const MailIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MailIcon")['default']
export const MapPinIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapPinIcon")['default']
export const MapIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapIcon")['default']
export const Maximize2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Maximize2Icon")['default']
export const MaximizeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MaximizeIcon")['default']
export const MehIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MehIcon")['default']
export const MenuIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MenuIcon")['default']
export const MessageCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageCircleIcon")['default']
export const MessageSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageSquareIcon")['default']
export const MicOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicOffIcon")['default']
export const MicIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicIcon")['default']
export const Minimize2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Minimize2Icon")['default']
export const MinimizeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinimizeIcon")['default']
export const MinusCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusCircleIcon")['default']
export const MinusSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusSquareIcon")['default']
export const MinusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusIcon")['default']
export const MonitorIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MonitorIcon")['default']
export const MoonIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoonIcon")['default']
export const MoreHorizontalIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreHorizontalIcon")['default']
export const MoreVerticalIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreVerticalIcon")['default']
export const MousePointerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MousePointerIcon")['default']
export const MoveIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoveIcon")['default']
export const MusicIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MusicIcon")['default']
export const Navigation2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Navigation2Icon")['default']
export const NavigationIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/NavigationIcon")['default']
export const OctagonIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/OctagonIcon")['default']
export const PackageIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PackageIcon")['default']
export const PaperclipIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PaperclipIcon")['default']
export const PauseCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseCircleIcon")['default']
export const PauseIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseIcon")['default']
export const PenToolIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PenToolIcon")['default']
export const PercentIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PercentIcon")['default']
export const PhoneCallIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneCallIcon")['default']
export const PhoneForwardedIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneForwardedIcon")['default']
export const PhoneIncomingIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIncomingIcon")['default']
export const PhoneMissedIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneMissedIcon")['default']
export const PhoneOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOffIcon")['default']
export const PhoneOutgoingIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOutgoingIcon")['default']
export const PhoneIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIcon")['default']
export const PieChartIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PieChartIcon")['default']
export const PlayCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayCircleIcon")['default']
export const PlayIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayIcon")['default']
export const PlusCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusCircleIcon")['default']
export const PlusSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusSquareIcon")['default']
export const PlusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusIcon")['default']
export const PocketIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PocketIcon")['default']
export const PowerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PowerIcon")['default']
export const PrinterIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PrinterIcon")['default']
export const RadioIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RadioIcon")['default']
export const RefreshCcwIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCcwIcon")['default']
export const RefreshCwIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCwIcon")['default']
export const RepeatIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RepeatIcon")['default']
export const RewindIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RewindIcon")['default']
export const RotateCcwIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCcwIcon")['default']
export const RotateCwIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCwIcon")['default']
export const RssIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RssIcon")['default']
export const SaveIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SaveIcon")['default']
export const ScissorsIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ScissorsIcon")['default']
export const SearchIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SearchIcon")['default']
export const SendIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SendIcon")['default']
export const ServerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ServerIcon")['default']
export const SettingsIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SettingsIcon")['default']
export const Share2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Share2Icon")['default']
export const ShareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShareIcon")['default']
export const ShieldOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldOffIcon")['default']
export const ShieldIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldIcon")['default']
export const ShoppingBagIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingBagIcon")['default']
export const ShoppingCartIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingCartIcon")['default']
export const ShuffleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShuffleIcon")['default']
export const SidebarIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SidebarIcon")['default']
export const SkipBackIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipBackIcon")['default']
export const SkipForwardIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipForwardIcon")['default']
export const SlackIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlackIcon")['default']
export const SlashIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlashIcon")['default']
export const SlidersIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlidersIcon")['default']
export const SmartphoneIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmartphoneIcon")['default']
export const SmileIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmileIcon")['default']
export const SpeakerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SpeakerIcon")['default']
export const SquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SquareIcon")['default']
export const StarIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StarIcon")['default']
export const StopCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StopCircleIcon")['default']
export const SunIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunIcon")['default']
export const SunriseIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunriseIcon")['default']
export const SunsetIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunsetIcon")['default']
export const TableIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TableIcon")['default']
export const TabletIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TabletIcon")['default']
export const TagIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TagIcon")['default']
export const TargetIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TargetIcon")['default']
export const TerminalIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TerminalIcon")['default']
export const ThermometerIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThermometerIcon")['default']
export const ThumbsDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsDownIcon")['default']
export const ThumbsUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsUpIcon")['default']
export const ToggleLeftIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleLeftIcon")['default']
export const ToggleRightIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleRightIcon")['default']
export const ToolIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToolIcon")['default']
export const Trash2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Trash2Icon")['default']
export const TrashIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrashIcon")['default']
export const TrelloIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrelloIcon")['default']
export const TrendingDownIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingDownIcon")['default']
export const TrendingUpIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingUpIcon")['default']
export const TriangleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TriangleIcon")['default']
export const TruckIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TruckIcon")['default']
export const TvIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TvIcon")['default']
export const TwitchIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitchIcon")['default']
export const TwitterIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitterIcon")['default']
export const TypeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TypeIcon")['default']
export const UmbrellaIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UmbrellaIcon")['default']
export const UnderlineIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnderlineIcon")['default']
export const UnlockIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnlockIcon")['default']
export const UploadCloudIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadCloudIcon")['default']
export const UploadIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadIcon")['default']
export const UserCheckIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserCheckIcon")['default']
export const UserMinusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserMinusIcon")['default']
export const UserPlusIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserPlusIcon")['default']
export const UserXIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserXIcon")['default']
export const UserIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserIcon")['default']
export const UsersIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UsersIcon")['default']
export const VideoOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoOffIcon")['default']
export const VideoIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoIcon")['default']
export const VoicemailIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VoicemailIcon")['default']
export const Volume1Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume1Icon")['default']
export const Volume2Icon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume2Icon")['default']
export const VolumeXIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeXIcon")['default']
export const VolumeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeIcon")['default']
export const WatchIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WatchIcon")['default']
export const WifiOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiOffIcon")['default']
export const WifiIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiIcon")['default']
export const WindIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WindIcon")['default']
export const XCircleIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XCircleIcon")['default']
export const XOctagonIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XOctagonIcon")['default']
export const XSquareIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XSquareIcon")['default']
export const XIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XIcon")['default']
export const YoutubeIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/YoutubeIcon")['default']
export const ZapOffIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapOffIcon")['default']
export const ZapIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapIcon")['default']
export const ZoomInIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomInIcon")['default']
export const ZoomOutIcon: typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomOutIcon")['default']
export const MyPrefixCarousel: typeof import("vue3-carousel/dist/carousel")['Carousel']
export const MyPrefixSlide: typeof import("vue3-carousel/dist/carousel")['Slide']
export const MyPrefixPagination: typeof import("vue3-carousel/dist/carousel")['Pagination']
export const MyPrefixNavigation: typeof import("vue3-carousel/dist/carousel")['Navigation']
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
export const LazyBAccordion: LazyComponent<typeof import("bootstrap-vue-next")['BAccordion']>
export const LazyBAccordionItem: LazyComponent<typeof import("bootstrap-vue-next")['BAccordionItem']>
export const LazyBAlert: LazyComponent<typeof import("bootstrap-vue-next")['BAlert']>
export const LazyBAvatar: LazyComponent<typeof import("bootstrap-vue-next")['BAvatar']>
export const LazyBAvatarGroup: LazyComponent<typeof import("bootstrap-vue-next")['BAvatarGroup']>
export const LazyBBadge: LazyComponent<typeof import("bootstrap-vue-next")['BBadge']>
export const LazyBBreadcrumb: LazyComponent<typeof import("bootstrap-vue-next")['BBreadcrumb']>
export const LazyBBreadcrumbItem: LazyComponent<typeof import("bootstrap-vue-next")['BBreadcrumbItem']>
export const LazyBButton: LazyComponent<typeof import("bootstrap-vue-next")['BButton']>
export const LazyBButtonGroup: LazyComponent<typeof import("bootstrap-vue-next")['BButtonGroup']>
export const LazyBButtonToolbar: LazyComponent<typeof import("bootstrap-vue-next")['BButtonToolbar']>
export const LazyBCard: LazyComponent<typeof import("bootstrap-vue-next")['BCard']>
export const LazyBCardBody: LazyComponent<typeof import("bootstrap-vue-next")['BCardBody']>
export const LazyBCardFooter: LazyComponent<typeof import("bootstrap-vue-next")['BCardFooter']>
export const LazyBCardGroup: LazyComponent<typeof import("bootstrap-vue-next")['BCardGroup']>
export const LazyBCardHeader: LazyComponent<typeof import("bootstrap-vue-next")['BCardHeader']>
export const LazyBCardImg: LazyComponent<typeof import("bootstrap-vue-next")['BCardImg']>
export const LazyBCardSubtitle: LazyComponent<typeof import("bootstrap-vue-next")['BCardSubtitle']>
export const LazyBCardText: LazyComponent<typeof import("bootstrap-vue-next")['BCardText']>
export const LazyBCardTitle: LazyComponent<typeof import("bootstrap-vue-next")['BCardTitle']>
export const LazyBCarousel: LazyComponent<typeof import("bootstrap-vue-next")['BCarousel']>
export const LazyBCarouselSlide: LazyComponent<typeof import("bootstrap-vue-next")['BCarouselSlide']>
export const LazyBCloseButton: LazyComponent<typeof import("bootstrap-vue-next")['BCloseButton']>
export const LazyBCol: LazyComponent<typeof import("bootstrap-vue-next")['BCol']>
export const LazyBCollapse: LazyComponent<typeof import("bootstrap-vue-next")['BCollapse']>
export const LazyBContainer: LazyComponent<typeof import("bootstrap-vue-next")['BContainer']>
export const LazyBDropdown: LazyComponent<typeof import("bootstrap-vue-next")['BDropdown']>
export const LazyBDropdownDivider: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownDivider']>
export const LazyBDropdownForm: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownForm']>
export const LazyBDropdownGroup: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownGroup']>
export const LazyBDropdownHeader: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownHeader']>
export const LazyBDropdownItem: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownItem']>
export const LazyBDropdownItemButton: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownItemButton']>
export const LazyBDropdownText: LazyComponent<typeof import("bootstrap-vue-next")['BDropdownText']>
export const LazyBForm: LazyComponent<typeof import("bootstrap-vue-next")['BForm']>
export const LazyBFormCheckbox: LazyComponent<typeof import("bootstrap-vue-next")['BFormCheckbox']>
export const LazyBFormCheckboxGroup: LazyComponent<typeof import("bootstrap-vue-next")['BFormCheckboxGroup']>
export const LazyBFormFile: LazyComponent<typeof import("bootstrap-vue-next")['BFormFile']>
export const LazyBFormFloatingLabel: LazyComponent<typeof import("bootstrap-vue-next")['BFormFloatingLabel']>
export const LazyBFormGroup: LazyComponent<typeof import("bootstrap-vue-next")['BFormGroup']>
export const LazyBFormInput: LazyComponent<typeof import("bootstrap-vue-next")['BFormInput']>
export const LazyBFormInvalidFeedback: LazyComponent<typeof import("bootstrap-vue-next")['BFormInvalidFeedback']>
export const LazyBFormRadio: LazyComponent<typeof import("bootstrap-vue-next")['BFormRadio']>
export const LazyBFormRadioGroup: LazyComponent<typeof import("bootstrap-vue-next")['BFormRadioGroup']>
export const LazyBFormRow: LazyComponent<typeof import("bootstrap-vue-next")['BFormRow']>
export const LazyBFormSelect: LazyComponent<typeof import("bootstrap-vue-next")['BFormSelect']>
export const LazyBFormSelectOption: LazyComponent<typeof import("bootstrap-vue-next")['BFormSelectOption']>
export const LazyBFormSelectOptionGroup: LazyComponent<typeof import("bootstrap-vue-next")['BFormSelectOptionGroup']>
export const LazyBFormSpinbutton: LazyComponent<typeof import("bootstrap-vue-next")['BFormSpinbutton']>
export const LazyBFormTag: LazyComponent<typeof import("bootstrap-vue-next")['BFormTag']>
export const LazyBFormTags: LazyComponent<typeof import("bootstrap-vue-next")['BFormTags']>
export const LazyBFormText: LazyComponent<typeof import("bootstrap-vue-next")['BFormText']>
export const LazyBFormTextarea: LazyComponent<typeof import("bootstrap-vue-next")['BFormTextarea']>
export const LazyBFormValidFeedback: LazyComponent<typeof import("bootstrap-vue-next")['BFormValidFeedback']>
export const LazyBImg: LazyComponent<typeof import("bootstrap-vue-next")['BImg']>
export const LazyBInputGroup: LazyComponent<typeof import("bootstrap-vue-next")['BInputGroup']>
export const LazyBInputGroupAddon: LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupAddon']>
export const LazyBInputGroupAppend: LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupAppend']>
export const LazyBInputGroupPrepend: LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupPrepend']>
export const LazyBInputGroupText: LazyComponent<typeof import("bootstrap-vue-next")['BInputGroupText']>
export const LazyBLink: LazyComponent<typeof import("bootstrap-vue-next")['BLink']>
export const LazyBListGroup: LazyComponent<typeof import("bootstrap-vue-next")['BListGroup']>
export const LazyBListGroupItem: LazyComponent<typeof import("bootstrap-vue-next")['BListGroupItem']>
export const LazyBModal: LazyComponent<typeof import("bootstrap-vue-next")['BModal']>
export const LazyBModalOrchestrator: LazyComponent<typeof import("bootstrap-vue-next")['BModalOrchestrator']>
export const LazyBNav: LazyComponent<typeof import("bootstrap-vue-next")['BNav']>
export const LazyBNavForm: LazyComponent<typeof import("bootstrap-vue-next")['BNavForm']>
export const LazyBNavItem: LazyComponent<typeof import("bootstrap-vue-next")['BNavItem']>
export const LazyBNavItemDropdown: LazyComponent<typeof import("bootstrap-vue-next")['BNavItemDropdown']>
export const LazyBNavText: LazyComponent<typeof import("bootstrap-vue-next")['BNavText']>
export const LazyBNavbar: LazyComponent<typeof import("bootstrap-vue-next")['BNavbar']>
export const LazyBNavbarBrand: LazyComponent<typeof import("bootstrap-vue-next")['BNavbarBrand']>
export const LazyBNavbarNav: LazyComponent<typeof import("bootstrap-vue-next")['BNavbarNav']>
export const LazyBNavbarToggle: LazyComponent<typeof import("bootstrap-vue-next")['BNavbarToggle']>
export const LazyBOffcanvas: LazyComponent<typeof import("bootstrap-vue-next")['BOffcanvas']>
export const LazyBOverlay: LazyComponent<typeof import("bootstrap-vue-next")['BOverlay']>
export const LazyBPagination: LazyComponent<typeof import("bootstrap-vue-next")['BPagination']>
export const LazyBPlaceholder: LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholder']>
export const LazyBPlaceholderButton: LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderButton']>
export const LazyBPlaceholderCard: LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderCard']>
export const LazyBPlaceholderTable: LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderTable']>
export const LazyBPlaceholderWrapper: LazyComponent<typeof import("bootstrap-vue-next")['BPlaceholderWrapper']>
export const LazyBPopover: LazyComponent<typeof import("bootstrap-vue-next")['BPopover']>
export const LazyBProgress: LazyComponent<typeof import("bootstrap-vue-next")['BProgress']>
export const LazyBProgressBar: LazyComponent<typeof import("bootstrap-vue-next")['BProgressBar']>
export const LazyBRow: LazyComponent<typeof import("bootstrap-vue-next")['BRow']>
export const LazyBSpinner: LazyComponent<typeof import("bootstrap-vue-next")['BSpinner']>
export const LazyBTab: LazyComponent<typeof import("bootstrap-vue-next")['BTab']>
export const LazyBTable: LazyComponent<typeof import("bootstrap-vue-next")['BTable']>
export const LazyBTableLite: LazyComponent<typeof import("bootstrap-vue-next")['BTableLite']>
export const LazyBTableSimple: LazyComponent<typeof import("bootstrap-vue-next")['BTableSimple']>
export const LazyBTabs: LazyComponent<typeof import("bootstrap-vue-next")['BTabs']>
export const LazyBTbody: LazyComponent<typeof import("bootstrap-vue-next")['BTbody']>
export const LazyBTd: LazyComponent<typeof import("bootstrap-vue-next")['BTd']>
export const LazyBTfoot: LazyComponent<typeof import("bootstrap-vue-next")['BTfoot']>
export const LazyBTh: LazyComponent<typeof import("bootstrap-vue-next")['BTh']>
export const LazyBThead: LazyComponent<typeof import("bootstrap-vue-next")['BThead']>
export const LazyBToast: LazyComponent<typeof import("bootstrap-vue-next")['BToast']>
export const LazyBToastOrchestrator: LazyComponent<typeof import("bootstrap-vue-next")['BToastOrchestrator']>
export const LazyBTooltip: LazyComponent<typeof import("bootstrap-vue-next")['BTooltip']>
export const LazyBTr: LazyComponent<typeof import("bootstrap-vue-next")['BTr']>
export const LazyBTransition: LazyComponent<typeof import("bootstrap-vue-next")['BTransition']>
export const LazyActivityIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ActivityIcon")['default']>
export const LazyAirplayIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AirplayIcon")['default']>
export const LazyAlertCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertCircleIcon")['default']>
export const LazyAlertOctagonIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertOctagonIcon")['default']>
export const LazyAlertTriangleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlertTriangleIcon")['default']>
export const LazyAlignCenterIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignCenterIcon")['default']>
export const LazyAlignJustifyIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignJustifyIcon")['default']>
export const LazyAlignLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignLeftIcon")['default']>
export const LazyAlignRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AlignRightIcon")['default']>
export const LazyAnchorIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AnchorIcon")['default']>
export const LazyApertureIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ApertureIcon")['default']>
export const LazyArchiveIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArchiveIcon")['default']>
export const LazyArrowDownCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownCircleIcon")['default']>
export const LazyArrowDownLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownLeftIcon")['default']>
export const LazyArrowDownRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownRightIcon")['default']>
export const LazyArrowDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowDownIcon")['default']>
export const LazyArrowLeftCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftCircleIcon")['default']>
export const LazyArrowLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowLeftIcon")['default']>
export const LazyArrowRightCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightCircleIcon")['default']>
export const LazyArrowRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowRightIcon")['default']>
export const LazyArrowUpCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpCircleIcon")['default']>
export const LazyArrowUpLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpLeftIcon")['default']>
export const LazyArrowUpRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpRightIcon")['default']>
export const LazyArrowUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ArrowUpIcon")['default']>
export const LazyAtSignIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AtSignIcon")['default']>
export const LazyAwardIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/AwardIcon")['default']>
export const LazyBarChart2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChart2Icon")['default']>
export const LazyBarChartIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BarChartIcon")['default']>
export const LazyBatteryChargingIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryChargingIcon")['default']>
export const LazyBatteryIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BatteryIcon")['default']>
export const LazyBellOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellOffIcon")['default']>
export const LazyBellIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BellIcon")['default']>
export const LazyBluetoothIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BluetoothIcon")['default']>
export const LazyBoldIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoldIcon")['default']>
export const LazyBookOpenIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookOpenIcon")['default']>
export const LazyBookIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookIcon")['default']>
export const LazyBookmarkIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BookmarkIcon")['default']>
export const LazyBoxIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BoxIcon")['default']>
export const LazyBriefcaseIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/BriefcaseIcon")['default']>
export const LazyCalendarIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CalendarIcon")['default']>
export const LazyCameraOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraOffIcon")['default']>
export const LazyCameraIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CameraIcon")['default']>
export const LazyCastIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CastIcon")['default']>
export const LazyCheckCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckCircleIcon")['default']>
export const LazyCheckSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckSquareIcon")['default']>
export const LazyCheckIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CheckIcon")['default']>
export const LazyChevronDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronDownIcon")['default']>
export const LazyChevronLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronLeftIcon")['default']>
export const LazyChevronRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronRightIcon")['default']>
export const LazyChevronUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronUpIcon")['default']>
export const LazyChevronsDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsDownIcon")['default']>
export const LazyChevronsLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsLeftIcon")['default']>
export const LazyChevronsRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsRightIcon")['default']>
export const LazyChevronsUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChevronsUpIcon")['default']>
export const LazyChromeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ChromeIcon")['default']>
export const LazyCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CircleIcon")['default']>
export const LazyClipboardIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClipboardIcon")['default']>
export const LazyClockIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ClockIcon")['default']>
export const LazyCloudDrizzleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudDrizzleIcon")['default']>
export const LazyCloudLightningIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudLightningIcon")['default']>
export const LazyCloudOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudOffIcon")['default']>
export const LazyCloudRainIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudRainIcon")['default']>
export const LazyCloudSnowIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudSnowIcon")['default']>
export const LazyCloudIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CloudIcon")['default']>
export const LazyCodeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodeIcon")['default']>
export const LazyCodepenIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodepenIcon")['default']>
export const LazyCodesandboxIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CodesandboxIcon")['default']>
export const LazyCoffeeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CoffeeIcon")['default']>
export const LazyColumnsIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ColumnsIcon")['default']>
export const LazyCommandIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CommandIcon")['default']>
export const LazyCompassIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CompassIcon")['default']>
export const LazyCopyIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CopyIcon")['default']>
export const LazyCornerDownLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownLeftIcon")['default']>
export const LazyCornerDownRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerDownRightIcon")['default']>
export const LazyCornerLeftDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftDownIcon")['default']>
export const LazyCornerLeftUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerLeftUpIcon")['default']>
export const LazyCornerRightDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightDownIcon")['default']>
export const LazyCornerRightUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerRightUpIcon")['default']>
export const LazyCornerUpLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpLeftIcon")['default']>
export const LazyCornerUpRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CornerUpRightIcon")['default']>
export const LazyCpuIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CpuIcon")['default']>
export const LazyCreditCardIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CreditCardIcon")['default']>
export const LazyCropIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CropIcon")['default']>
export const LazyCrosshairIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/CrosshairIcon")['default']>
export const LazyDatabaseIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DatabaseIcon")['default']>
export const LazyDeleteIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DeleteIcon")['default']>
export const LazyDiscIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DiscIcon")['default']>
export const LazyDivideCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideCircleIcon")['default']>
export const LazyDivideSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideSquareIcon")['default']>
export const LazyDivideIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DivideIcon")['default']>
export const LazyDollarSignIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DollarSignIcon")['default']>
export const LazyDownloadCloudIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadCloudIcon")['default']>
export const LazyDownloadIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DownloadIcon")['default']>
export const LazyDribbbleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DribbbleIcon")['default']>
export const LazyDropletIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/DropletIcon")['default']>
export const LazyEdit2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit2Icon")['default']>
export const LazyEdit3Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Edit3Icon")['default']>
export const LazyEditIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EditIcon")['default']>
export const LazyExternalLinkIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ExternalLinkIcon")['default']>
export const LazyEyeOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeOffIcon")['default']>
export const LazyEyeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/EyeIcon")['default']>
export const LazyFacebookIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FacebookIcon")['default']>
export const LazyFastForwardIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FastForwardIcon")['default']>
export const LazyFeatherIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FeatherIcon")['default']>
export const LazyFigmaIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FigmaIcon")['default']>
export const LazyFileMinusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileMinusIcon")['default']>
export const LazyFilePlusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilePlusIcon")['default']>
export const LazyFileTextIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileTextIcon")['default']>
export const LazyFileIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FileIcon")['default']>
export const LazyFilmIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilmIcon")['default']>
export const LazyFilterIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FilterIcon")['default']>
export const LazyFlagIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FlagIcon")['default']>
export const LazyFolderMinusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderMinusIcon")['default']>
export const LazyFolderPlusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderPlusIcon")['default']>
export const LazyFolderIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FolderIcon")['default']>
export const LazyFramerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FramerIcon")['default']>
export const LazyFrownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/FrownIcon")['default']>
export const LazyGiftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GiftIcon")['default']>
export const LazyGitBranchIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitBranchIcon")['default']>
export const LazyGitCommitIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitCommitIcon")['default']>
export const LazyGitMergeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitMergeIcon")['default']>
export const LazyGitPullRequestIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitPullRequestIcon")['default']>
export const LazyGithubIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GithubIcon")['default']>
export const LazyGitlabIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GitlabIcon")['default']>
export const LazyGlobeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GlobeIcon")['default']>
export const LazyGridIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/GridIcon")['default']>
export const LazyHardDriveIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HardDriveIcon")['default']>
export const LazyHashIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HashIcon")['default']>
export const LazyHeadphonesIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeadphonesIcon")['default']>
export const LazyHeartIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HeartIcon")['default']>
export const LazyHelpCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HelpCircleIcon")['default']>
export const LazyHexagonIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HexagonIcon")['default']>
export const LazyHomeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/HomeIcon")['default']>
export const LazyImageIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ImageIcon")['default']>
export const LazyInboxIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InboxIcon")['default']>
export const LazyInfoIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InfoIcon")['default']>
export const LazyInstagramIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/InstagramIcon")['default']>
export const LazyItalicIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ItalicIcon")['default']>
export const LazyKeyIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/KeyIcon")['default']>
export const LazyLayersIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayersIcon")['default']>
export const LazyLayoutIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LayoutIcon")['default']>
export const LazyLifeBuoyIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LifeBuoyIcon")['default']>
export const LazyLink2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Link2Icon")['default']>
export const LazyLinkIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkIcon")['default']>
export const LazyLinkedinIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LinkedinIcon")['default']>
export const LazyListIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ListIcon")['default']>
export const LazyLoaderIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LoaderIcon")['default']>
export const LazyLockIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LockIcon")['default']>
export const LazyLogInIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogInIcon")['default']>
export const LazyLogOutIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/LogOutIcon")['default']>
export const LazyMailIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MailIcon")['default']>
export const LazyMapPinIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapPinIcon")['default']>
export const LazyMapIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MapIcon")['default']>
export const LazyMaximize2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Maximize2Icon")['default']>
export const LazyMaximizeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MaximizeIcon")['default']>
export const LazyMehIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MehIcon")['default']>
export const LazyMenuIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MenuIcon")['default']>
export const LazyMessageCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageCircleIcon")['default']>
export const LazyMessageSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MessageSquareIcon")['default']>
export const LazyMicOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicOffIcon")['default']>
export const LazyMicIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MicIcon")['default']>
export const LazyMinimize2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Minimize2Icon")['default']>
export const LazyMinimizeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinimizeIcon")['default']>
export const LazyMinusCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusCircleIcon")['default']>
export const LazyMinusSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusSquareIcon")['default']>
export const LazyMinusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MinusIcon")['default']>
export const LazyMonitorIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MonitorIcon")['default']>
export const LazyMoonIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoonIcon")['default']>
export const LazyMoreHorizontalIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreHorizontalIcon")['default']>
export const LazyMoreVerticalIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoreVerticalIcon")['default']>
export const LazyMousePointerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MousePointerIcon")['default']>
export const LazyMoveIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MoveIcon")['default']>
export const LazyMusicIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/MusicIcon")['default']>
export const LazyNavigation2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Navigation2Icon")['default']>
export const LazyNavigationIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/NavigationIcon")['default']>
export const LazyOctagonIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/OctagonIcon")['default']>
export const LazyPackageIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PackageIcon")['default']>
export const LazyPaperclipIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PaperclipIcon")['default']>
export const LazyPauseCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseCircleIcon")['default']>
export const LazyPauseIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PauseIcon")['default']>
export const LazyPenToolIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PenToolIcon")['default']>
export const LazyPercentIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PercentIcon")['default']>
export const LazyPhoneCallIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneCallIcon")['default']>
export const LazyPhoneForwardedIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneForwardedIcon")['default']>
export const LazyPhoneIncomingIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIncomingIcon")['default']>
export const LazyPhoneMissedIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneMissedIcon")['default']>
export const LazyPhoneOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOffIcon")['default']>
export const LazyPhoneOutgoingIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneOutgoingIcon")['default']>
export const LazyPhoneIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PhoneIcon")['default']>
export const LazyPieChartIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PieChartIcon")['default']>
export const LazyPlayCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayCircleIcon")['default']>
export const LazyPlayIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlayIcon")['default']>
export const LazyPlusCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusCircleIcon")['default']>
export const LazyPlusSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusSquareIcon")['default']>
export const LazyPlusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PlusIcon")['default']>
export const LazyPocketIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PocketIcon")['default']>
export const LazyPowerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PowerIcon")['default']>
export const LazyPrinterIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/PrinterIcon")['default']>
export const LazyRadioIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RadioIcon")['default']>
export const LazyRefreshCcwIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCcwIcon")['default']>
export const LazyRefreshCwIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RefreshCwIcon")['default']>
export const LazyRepeatIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RepeatIcon")['default']>
export const LazyRewindIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RewindIcon")['default']>
export const LazyRotateCcwIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCcwIcon")['default']>
export const LazyRotateCwIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RotateCwIcon")['default']>
export const LazyRssIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/RssIcon")['default']>
export const LazySaveIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SaveIcon")['default']>
export const LazyScissorsIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ScissorsIcon")['default']>
export const LazySearchIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SearchIcon")['default']>
export const LazySendIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SendIcon")['default']>
export const LazyServerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ServerIcon")['default']>
export const LazySettingsIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SettingsIcon")['default']>
export const LazyShare2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Share2Icon")['default']>
export const LazyShareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShareIcon")['default']>
export const LazyShieldOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldOffIcon")['default']>
export const LazyShieldIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShieldIcon")['default']>
export const LazyShoppingBagIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingBagIcon")['default']>
export const LazyShoppingCartIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShoppingCartIcon")['default']>
export const LazyShuffleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ShuffleIcon")['default']>
export const LazySidebarIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SidebarIcon")['default']>
export const LazySkipBackIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipBackIcon")['default']>
export const LazySkipForwardIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SkipForwardIcon")['default']>
export const LazySlackIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlackIcon")['default']>
export const LazySlashIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlashIcon")['default']>
export const LazySlidersIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SlidersIcon")['default']>
export const LazySmartphoneIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmartphoneIcon")['default']>
export const LazySmileIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SmileIcon")['default']>
export const LazySpeakerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SpeakerIcon")['default']>
export const LazySquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SquareIcon")['default']>
export const LazyStarIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StarIcon")['default']>
export const LazyStopCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/StopCircleIcon")['default']>
export const LazySunIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunIcon")['default']>
export const LazySunriseIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunriseIcon")['default']>
export const LazySunsetIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/SunsetIcon")['default']>
export const LazyTableIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TableIcon")['default']>
export const LazyTabletIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TabletIcon")['default']>
export const LazyTagIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TagIcon")['default']>
export const LazyTargetIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TargetIcon")['default']>
export const LazyTerminalIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TerminalIcon")['default']>
export const LazyThermometerIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThermometerIcon")['default']>
export const LazyThumbsDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsDownIcon")['default']>
export const LazyThumbsUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ThumbsUpIcon")['default']>
export const LazyToggleLeftIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleLeftIcon")['default']>
export const LazyToggleRightIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToggleRightIcon")['default']>
export const LazyToolIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ToolIcon")['default']>
export const LazyTrash2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Trash2Icon")['default']>
export const LazyTrashIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrashIcon")['default']>
export const LazyTrelloIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrelloIcon")['default']>
export const LazyTrendingDownIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingDownIcon")['default']>
export const LazyTrendingUpIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TrendingUpIcon")['default']>
export const LazyTriangleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TriangleIcon")['default']>
export const LazyTruckIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TruckIcon")['default']>
export const LazyTvIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TvIcon")['default']>
export const LazyTwitchIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitchIcon")['default']>
export const LazyTwitterIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TwitterIcon")['default']>
export const LazyTypeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/TypeIcon")['default']>
export const LazyUmbrellaIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UmbrellaIcon")['default']>
export const LazyUnderlineIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnderlineIcon")['default']>
export const LazyUnlockIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UnlockIcon")['default']>
export const LazyUploadCloudIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadCloudIcon")['default']>
export const LazyUploadIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UploadIcon")['default']>
export const LazyUserCheckIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserCheckIcon")['default']>
export const LazyUserMinusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserMinusIcon")['default']>
export const LazyUserPlusIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserPlusIcon")['default']>
export const LazyUserXIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserXIcon")['default']>
export const LazyUserIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UserIcon")['default']>
export const LazyUsersIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/UsersIcon")['default']>
export const LazyVideoOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoOffIcon")['default']>
export const LazyVideoIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VideoIcon")['default']>
export const LazyVoicemailIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VoicemailIcon")['default']>
export const LazyVolume1Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume1Icon")['default']>
export const LazyVolume2Icon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/Volume2Icon")['default']>
export const LazyVolumeXIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeXIcon")['default']>
export const LazyVolumeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/VolumeIcon")['default']>
export const LazyWatchIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WatchIcon")['default']>
export const LazyWifiOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiOffIcon")['default']>
export const LazyWifiIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WifiIcon")['default']>
export const LazyWindIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/WindIcon")['default']>
export const LazyXCircleIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XCircleIcon")['default']>
export const LazyXOctagonIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XOctagonIcon")['default']>
export const LazyXSquareIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XSquareIcon")['default']>
export const LazyXIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/XIcon")['default']>
export const LazyYoutubeIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/YoutubeIcon")['default']>
export const LazyZapOffIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapOffIcon")['default']>
export const LazyZapIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZapIcon")['default']>
export const LazyZoomInIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomInIcon")['default']>
export const LazyZoomOutIcon: LazyComponent<typeof import("../node_modules/nuxt-feather-icons/dist/runtime/components/ZoomOutIcon")['default']>
export const LazyMyPrefixCarousel: LazyComponent<typeof import("vue3-carousel/dist/carousel")['Carousel']>
export const LazyMyPrefixSlide: LazyComponent<typeof import("vue3-carousel/dist/carousel")['Slide']>
export const LazyMyPrefixPagination: LazyComponent<typeof import("vue3-carousel/dist/carousel")['Pagination']>
export const LazyMyPrefixNavigation: LazyComponent<typeof import("vue3-carousel/dist/carousel")['Navigation']>
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
