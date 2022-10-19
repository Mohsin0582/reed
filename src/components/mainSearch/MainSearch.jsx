import './MainSearch.css'

function MainSearch() {
  return (
    <section className="main-search-container row main-search-container-mobile main-search-container-margin-top jubilee-background jubilee-background-image">
        <main>
            <div className="jubilee-text">
                <span>Love Mondays again.<br/>Find a job you adore.</span>
            </div>

            <div className="h1-container">
                <span className="h1-title-new" title="Jobs, careers, employment and recruitment at Reed.co.uk">
                    <span className="h1-slogan">Jobs, careers, employment and recruitment at Reed.co.uk</span>
                </span>
            </div>
            <div className="homepage-gradient"></div>
            <form id="main-search-new" role="search" className="main-search main-search-new container signed-out gtmSearchFormHome" action="/jobs" method="GET" novalidate="novalidate">
                <div className="row row-mobile">
                    <p className="job-counter job-counter-mobile">
                        Search 262,376 new jobs - 14,095 added in the last 24 hours
                    </p>
                    <div role="group" ariaLabelled-by="find-job" className="collector">
                        <div className="top-section horizontal-form" data-bind="attr: {className: 'top-section horizontal-form' + (twoStepsSearchEnabled() ? ' twoStepsSearchEnabled' : '')}">

                            <div className="keywords-container col-sm-5 col-md-5 keywords-container-mobile">
                                <label for="main-keywords">What</label>
                                    <span className="twitter-typeahead" style={{position: "relative", display: "inline-block"}}>
                                        <input type="text" className="form-control tt-input" id="main-keywords" name="keywords" maxlength="255" placeholder="e.g. &quot;administrator&quot;" aria-label="keywords e.g. web design" title="keywords e.g. web design" data-typeahead-remote="/api/search/getjobtitlesonlyautocomplete" data-minlength="1" data-typeahead-header="Job title" data-typeahead-header-className="job-title" data-recent-searches="true" data-bind="valueFromElement: searchKeywords, valueUpdate: 'afterkeydown', typeahead: searchKeywords, click: enableDetails" tabindex="1" data-val-regex="Please enter a valid search criteria" data-val-regex-pattern="^[a-zA-Z0-9\s_.,/#&amp;+()\-&quot;'%*\\\u00C0-\u024F\u1E00-\u1EFF¡¢]+$" data-val="true" autocomplete="off" spellcheck="false" dir="auto" style={{position: "relative", verticalAlign: "top"}} />
                                            <pre aria-hidden="true" style={{position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: "&quot;Red Hat Text&quot;, sans-serif", fontSize: "16px", fontStyle: "normal", fontVariant: "normal", fontWeight: "400", wordSpacing: "0px", letterSpacing: "0px", textIndent: "0px", textRendering: "auto", textTransform: "none"}}><div className="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
                                            <div className="tt-menu" style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: "none"}}>
                                                <div className="tt-dataset tt-dataset-reed-query"></div>
                                                <div className="tt-dataset tt-dataset-recentsearches-query"></div>
                                            </div>
                                        </span>

                                <div data-bind="click: function() { clearValue('#main-keywords'); }, attr: {'className': ('clean icon icon-clean-input' + ((searchKeywords() == '' || searchKeywords() == undefined) ? ' is-hidden' : ''))}" className="clean icon icon-clean-input is-hidden"></div>
                            </div>
                            <div className="location-container col-sm-4 col-md-5 location-container-mobile">
                                <label for="main-location">Where</label>
                                <span className="twitter-typeahead" style={{position: "relative", display: "inline-block"}}>
                                    <input type="text" className="form-control tt-input" id="main-location" name="location" maxlength="255" placeholder="town or postcode" aria-label="town or postcode" title="town or postcode" data-typeahead-remote="/api/location/getlocationsautocomplete?p=js" data-minlength="2" data-bind="value: searchLocation, valueUpdate: 'afterkeydown', typeahead: searchLocation" tabindex="2" data-val-regex="Please enter a valid location" data-val-regex-pattern="^[a-zA-Z0-9\s_.,/#&amp;+()\-&quot;'%*\\\u00C0-\u024F\u1E00-\u1EFF¡¢]+$" data-val="true" autocomplete="off" spellcheck="false" dir="auto" style={{position: "relative", verticalAlign: "top"}} />
                                    <pre aria-hidden="true" style={{position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: "&quot;Red Hat Text&quot;, sans-serif", fontSize: "16px", fontStyle: "normal", fontVariant: "normal", fontWeight: "400", wordSpacing: "0px", letterSpacing: "0px", textIndent: "0px", textRendering: "auto", textTransform: "none"}}>
                                        <div className="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
                                        </pre>
                                        <div className="tt-menu" style={{position: "absolute", top: "100%", left: "0px", zIndex: "100", display: "none"}}>
                                            <div className="tt-dataset tt-dataset-reed-query">
                                            </div>
                                        </div>
                                        </span>
                                <button type="button" tabindex="4" className="icon icon-clean-input is-hidden" data-bind="click: function() { clearValue('#location') }, css: {'is-hidden': searchLocation() === ''}">Clear location input</button>
                                <button type="button" tabindex="4" className="icon icon-target-location icon-target-location-new" title="Get current location" data-bind="click: getLocation, css: {'is-hidden': searchLocation() !== ''}">Get current location</button>
                            </div>
                            <div className="distance-container col-xs-12 col-sm-3 col-md-2" data-bind="visible: twoStepsSearchEnabled" style={{display: "none"}}>
                                <label for="proximity">Distance</label>
                                <select id="proximity" name="proximity" className="form-control">
                                    <option value="0">0 miles</option>
                                    <option value="1">1 mile</option>
                                    <option value="3">3 miles</option>
                                    <option value="5">5 miles</option>
                                    <option value="10" selected="selected">10 miles</option>
                                    <option value="15">15 miles</option>
                                    <option value="20">20 miles</option>
                                    <option value="30">30 miles</option>
                                    <option value="50">50 miles</option>
                                </select>
                            </div>
                            <div className="form-submit form-submit-mobile col-sm-3 col-md-2">
                                <button type="submit" className="search-button btn btn-primary desktop-content" id="homepageSearchButton" tabindex="4">Search jobs</button>
                                <button type="submit" className="search-button btn btn-primary mobile-content" id="homepageSearchButton" tabindex="4">Search 262,376 jobs</button>
                            </div>
                            <div className="top-section top-section-mobile horizontal-form keywords-container validation validation-keywords col-sm-3 col-md-4" data-valmsg-for="keywords" data-valmsg-replace="true"></div>
                            <div className="top-section top-section-mobile horizontal-form location-container validation validation-location col-sm-3 col-md-4" data-valmsg-for="location" data-valmsg-replace="true"></div>

                            
                            <div className="recent-searches-new">



                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-2 browse-jobs-container text-left">
                                <a href="/popularjobs" className="" tabindex="5">Browse jobs <i className="icon icon-arrow-white-right icon-arrow-white-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="post-cv-sign-in-new">
                <a className="gtmPostCv" href="https://www.reed.co.uk/account/SignIn?reg=true#register" title="Register now">Register now</a><span className="only-ip5"> or <a href="https://www.reed.co.uk/account/signin?returnUrl=%2F" title="sign in">sign in</a></span>
            </div>
        </main>

        {/* <aside className="recruiter-tab" data-qa="recruiterTab">
            <header>
                <div className="text gtmRecruiterTag" data-qa="recruiterTabHeader">
                    <svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 138" enable-background="new 0 0 42 138" xml:space="preserve">
                        <rect x="14.165" y="31.919" fill="none" width="20.561" height="84.579"></rect>
                        <text transform="matrix(4.489659e-011 -1 1 4.489659e-011 25.565 116.498)" fill="#FFFFFF" font-family="'Red Hat Text', sans-serif" font-size="18px">Recruiters</text>
                        <polyline fill="none" className="svg-arrow-closed" transform="rotate(180 21 26)" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="19.5,21.5 23.5,26 19.5,30.5 "></polyline>
                        <polyline fill="none" className="svg-arrow-opened" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="19.5,21.5 23.5,26 19.5,30.5 "></polyline>
                    </svg>
                    <span>Recruiters</span>
                </div>
            </header>
            <div className="container" data-qa="recruiterTabContents">
                <p className="hire-talent">Hire talent, transform your business</p>
                <hr/>
                <p className="from-only">From only <span className="new-customer-price">£89</span> for <br/> new customers</p>
                <a href="/recruiter/" title="Find out more" className="btn btn-secondary gtmAdvertiseNow" tabindex="-1">Find out more</a>
            </div>
        </aside> */}

        <div id="surveyTab"></div>
    </section>
  )
}

export default MainSearch