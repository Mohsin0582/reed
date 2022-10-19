import './Header.css';

function Header() {
  return (
    <>
    <header id="site-header" role="banner" className="signed-out">
      <div className="header-background"></div>
      <div className="header-inner">
        <a
          href="#menu"
          className="menu-button header-block-link"
          data-bind="click: toggleSideMenu"
        >
          <span>Toggle menu</span>
        </a>

        <a
          href="/"
          title="Reed.co.uk"
          className="reed-logo globalReedLogo header-block-link "
        >
          <span>Reed.co.uk</span>
        </a>
        <ul className="main-navigation">
          <li className="jobs tld active">
            <a href="/" title="Jobs" className="gtmHeaderNav header-block-link">
              Jobs
            </a>
          </li>
          <li className="courses tld">
            <a
              href="/courses/?itm_source=js_navigation&amp;itm_medium=jobseeker&amp;itm_campaign=courses_tab&amp;itm_content=standard_version"
              title="Courses"
              className="gtmHeaderNav header-block-link"
            >
              Courses
            </a>
          </li>
          <li className="career-advice tld">
            <a
              href="/career-advice"
              title="Career advice"
              className="gtmHeaderNav header-block-link"
            >
              Career advice
            </a>
          </li>

          <li className="recruiter ltd">
            <a
              href="/recruiter?directjob=recruiter"
              title="Recruiter"
              className="gtmHeaderNav header-block-link recruiter-link"
            >
              Recruiting? <b>Post a job</b>
            </a>
          </li>
        </ul>

        <div className="right-container">
          <ul className="user-navigation">
            <li className="signed-out-user">
              <a
                href="https://www.reed.co.uk/account/SignIn?reg=true#register"
                className="register-cv gtmGlobalRegister btn btn-secondary"
              >
                Register CV
              </a>
            </li>
            <li className="signin-menu">
              <a
                href="/account/SignIn?returnUrl=%2F"
                data-bind="attr: { href: signInUrl }"
                className="sign-in gtmGlobalResponsiveSignIn header-block-link"
              >
                Sign in
              </a>
            </li>

            <li className="saved-jobs" style={{display: "block"}}>
              <a
                href="https://www.reed.co.uk/account/jobs"
                title="Saved jobs"
                data-bind="click: toggleSavedJobsMenu"
                className="gtmSavedJobsHeader header-block-link"
              >
                <span className="outline-heart-grey"></span>
                <span
                  className="saved-jobs-count"
                  data-bind="visible:hasSavedJobs, text: savedJobsCount"
                  style={{display: "none"}}
                >
                  0
                </span>
                <span className="saved-jobs-text" data-bind="text: savedJobsText">
                  Saved jobs
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="saved-jobs-subnav">
          <ul
            data-bind="visible: topSavedJobs().length, foreach: topSavedJobs"
            style={{display: "none"}}
          ></ul>
          <div
            id="savedJobsActions"
            className="saved-job-actions"
            data-bind="visible: topSavedJobs().length"
            style={{display: "none"}}
          >
            <a
              href="https://www.reed.co.uk/account/jobs"
              id="viewSavedJobsTopMenuLink"
              className="view-saved-jobs"
            >
              View all saved jobs
            </a>
          </div>
          <div
            id="noSavedJobs"
            className="no-saved-jobs"
            data-bind="visible: !topSavedJobs().length"
            style={{}}
          >
            You haven't shortlisted any jobs yet
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
