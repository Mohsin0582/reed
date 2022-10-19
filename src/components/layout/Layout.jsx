import Header from '../header/Header'
import Footer from '../footer/Footer'
import MainSearch from '../mainSearch/MainSearch'
import TrendingJobs from '../trendingJobs/TrendingJobs'
import SearchBy from '../searchBy/SearchBy'
import CompanyJobs from '../companyJobs/CompanyJobs'
import Support from '../support/Support'

function Layout({children}) {
  return (
    <div id="global">
        <div id="container">
            <Header />
            {children}
            <div id="content" role="main">
              <div data-card="homepage" id="homepage">
                <MainSearch />
                <div className="content-start-point"></div>
                <div className="courses-banner-container">
                    <a href="/courses/?itm_source=js_signedout_homepage&amp;itm_medium=jobseeker&amp;itm_campaign=courses_banner&amp;itm_content=pink_promo_banner" data-gtm="courses_pink_banner_stripe_click" data-gtm-value="your_next_skill_from_just_10" data-qe="lnk-courses-homepage">
                        <div className="courses-banner-content">
                            <span>Your next skill, from just £10. Browse thousands of courses now</span>
                        </div>
                        <i className="icon icon-arrow-black-right-small"></i>
                    </a>
                </div>
                <TrendingJobs />
                <SearchBy />
                <CompanyJobs />
                <Support />
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout