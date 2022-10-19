function Support() {
  return (
    <section className="container container-max-width-modifier support-container">
        <div className="support-title">Support for you</div>

        <div className="new-promo-container row">
            <div className="upskill-title">
                Upskill with courses
            </div>
            <div className="promo-image b-lazy b-loaded" style={{backgroundImage: `url(/img/course-promo-2.jpg)`, display: "block"}} >
                <div className="course-example course-position">

                    <div className="course-header">
                        <a href="https://www.reed.co.uk/courses/free-cv-building-masterclass--from-the-uks-1-careers-courses-marketplace/324115?itm_source=js_signedout_homepage&amp;itm_medium=jobseeker&amp;itm_campaign=homepage_panel_course&amp;itm_content=cvbuildingmasterclass_courseId_324115">CV Building Masterclass</a>
                        <div className="provider">Reed Courses</div>
                        <div className="course-price-height">
                            <div className="course-price">
                                <span>Free</span>
                            </div>
                        </div>
                    </div>
                    <div className="well carousel-well">
                        <ul>
                            <li className="book-icon pb-1"><i className="icon icon-book"></i> Online</li>
                            <li className="clock-icon">
                                <i className="icon icon-course-clock"></i>
                                Self paced
                            </li>
                        </ul>
                    </div>
                    <a href="https://www.reed.co.uk/courses/free-cv-building-masterclass--from-the-uks-1-careers-courses-marketplace/324115?itm_source=js_signedout_homepage&amp;itm_medium=jobseeker&amp;itm_campaign=homepage_panel_course&amp;itm_content=cvbuildingmasterclass_courseId_324115" className="read-more-course" data-gtm="courses_panel_click" data-gtm-value="read_more">Read more</a>
                </div>
            </div>
            <div className="course-block">
                <p className="support-promo-description">
                    Invest in your future with thousands of courses to help you learn and develop.
                </p>
                <div className="promo-description">
                    <div>
                        <a href="/courses/?itm_source=js_signedout_homepage&amp;itm_medium=jobseeker&amp;itm_campaign=homepage_banner&amp;itm_content=findtherightcourse" className="btn btn-secondary" title="Shop now" data-gtm="courses_panel_click" data-gtm-value="browse_courses">Browse courses</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Support