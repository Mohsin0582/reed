function SearchBy() {
  return (
    <>
      <section className="container container-max-width-modifier ">
        <div className="row">
          <div className="nav settings-container search-by-sector-location desktop-content-search">
            <ul className="navigation">
              <li>
                <a
                  href="/"
                  className="active show-sector"
                  // data-bind="click: showSearchBySectorClick"
                >
                  Search by sector
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="show-location"
                  data-bind="click: showSearchByLocationClick"
                >
                  Search by location
                </a>
              </li>
            </ul>
          </div>
          <div className="nav settings-container search-by-sector-location mobile-content-search">
            <ul className="navigation">
              <li>
                <a
                  href="/"
                  className="active show-sector"
                  data-bind="click: showSearchBySectorClick"
                >
                  Sectors
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="show-location"
                  data-bind="click: showSearchByLocationClick"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="new-browse-by-sector-location container container-max-width-modifier"
        data-bind="visible: showSearchBySector()"
        id="sectors-block"
      >
        <div className="row">
          <ul className="picture-block row">
            <li className="col-md-3">
              <a
                className="picture-link gtmSectorPanelNew b-lazy b-loaded"
                alt="Technology Jobs"
                data-sectorname="Technology"
                href="/"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/img/new-tech.jpg"})`, 
                  display: "inline-block"
                }}
              ></a>
              <a
                href="/"
                className="link gtmSectorPanelNew"
                alt="Technology Jobs"
              >
                Technology
              </a>
            </li>
            <li className="col-md-3">
              <a
                className="picture-link gtmSectorPanelNew b-lazy b-loaded"
                alt="Engineering Jobs"
                data-sectorname="Engineering"
                href="/"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/img/new-engineering.webp"})`,
                  display: "inline-block"
                }}
              ></a>
              <a
                href="/"
                className="link gtmSectorPanelNew"
                alt="Engineering Jobs"
              >
                Engineering
              </a>
            </li>
            <li className="col-md-3">
              <a
                className="picture-link gtmSectorPanelNew b-lazy b-loaded"
                alt="Graduate Jobs"
                data-sectorname="Graduates"
                href="/"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/img/new-grad.jpg"})` }}
              ></a>
              <a
                href="/"
                className="link gtmSectorPanelNew"
                alt="Graduate Jobs"
              >
                Graduates
              </a>
            </li>
            <li className="col-md-3">
              <a
                className="picture-link gtmSectorPanelNew b-lazy b-loaded"
                alt="Health Jobs"
                data-sectorname="Health"
                href="/"
                style={{ 
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/img/new-health.jpg"})`, 
                  display: "inline-block" 
                }}
              ></a>
              <a
                href="/"
                className="link gtmSectorPanelNew"
                alt="Health Jobs"
              >
                Health
              </a>
            </li>
          </ul>

          <div className="see-more-block" data-bind="visible: !seeMoreBySectors()">
            <span data-bind="click: seeMoreBySectorsClick">
              See more sectors<i className="icon icon-arrow-blue-down"></i>
            </span>
          </div>
          <div
            className="row"
            data-bind="visible: seeMoreBySectors()"
            style={{display: "none"}}
          >
            <ul className="columns-list">
              <li>
                <span className="elem">
                  <a
                    href="/jobs/accountancy-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Accountancy"
                  >
                    Accountancy jobs
                  </a>{" "}
                  <small>13,619</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/accountancy-qualified-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Accountancy (Qualified)"
                  >
                    Accountancy (Qualified) jobs
                  </a>{" "}
                  <small>9,631</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/actuary-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Actuarial"
                  >
                    Actuarial jobs
                  </a>{" "}
                  <small>487</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/admin-secretarial-pa-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Admin, Secretarial &amp; PA"
                  >
                    Admin, Secretarial &amp; PA jobs
                  </a>{" "}
                  <small>14,769</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/apprenticeships-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Apprenticeships"
                  >
                    Apprenticeships jobs
                  </a>{" "}
                  <small>643</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/banking-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Banking"
                  >
                    Banking jobs
                  </a>{" "}
                  <small>2,656</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/charity-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Charity &amp; Voluntary"
                  >
                    Charity &amp; Voluntary jobs
                  </a>{" "}
                  <small>914</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/construction-property-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Construction &amp; Property"
                  >
                    Construction &amp; Property jobs
                  </a>{" "}
                  <small>12,023</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/customer-service-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Customer Service"
                  >
                    Customer Service jobs
                  </a>{" "}
                  <small>8,696</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/education-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Education"
                  >
                    Education jobs
                  </a>{" "}
                  <small>26,930</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/energy-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Energy"
                  >
                    Energy jobs
                  </a>{" "}
                  <small>1,315</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/engineering-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Engineering"
                  >
                    Engineering jobs
                  </a>{" "}
                  <small>15,718</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/estate-agent-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Estate Agency"
                  >
                    Estate Agency jobs
                  </a>{" "}
                  <small>3,111</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/finance-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Financial Services"
                  >
                    Financial Services jobs
                  </a>{" "}
                  <small>7,516</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/fmcg-jobs"
                    className="gtmSectorLink"
                    data-sectorname="FMCG"
                  >
                    FMCG jobs
                  </a>{" "}
                  <small>1,270</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/general-insurance-jobs"
                    className="gtmSectorLink"
                    data-sectorname="General Insurance"
                  >
                    General Insurance jobs
                  </a>{" "}
                  <small>3,256</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/graduate"
                    className="gtmSectorLink"
                    data-sectorname="Graduate"
                  >
                    Graduate jobs
                  </a>{" "}
                  <small>14,849</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/health-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Health &amp; Medicine"
                  >
                    Health &amp; Medicine jobs
                  </a>{" "}
                  <small>8,102</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/catering-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Hospitality &amp; Catering"
                  >
                    Hospitality &amp; Catering jobs
                  </a>{" "}
                  <small>7,192</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/hr-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Human Resources"
                  >
                    Human Resources jobs
                  </a>{" "}
                  <small>5,237</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/it-jobs"
                    className="gtmSectorLink"
                    data-sectorname="IT &amp; Telecoms"
                  >
                    IT &amp; Telecoms jobs
                  </a>{" "}
                  <small>22,555</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/it-contractor"
                    className="gtmSectorLink"
                    data-sectorname="IT Contractor"
                  >
                    IT Contractor jobs
                  </a>{" "}
                  <small>3,248</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/law-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Legal"
                  >
                    Legal jobs
                  </a>{" "}
                  <small>8,815</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/leisure-tourism-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Leisure &amp; Tourism"
                  >
                    Leisure &amp; Tourism jobs
                  </a>{" "}
                  <small>1,231</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/factory-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Manufacturing"
                  >
                    Manufacturing jobs
                  </a>{" "}
                  <small>5,891</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/marketing-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Marketing &amp; PR"
                  >
                    Marketing &amp; PR jobs
                  </a>{" "}
                  <small>6,242</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/media-digital-creative-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Media, Digital &amp; Creative"
                  >
                    Media, Digital &amp; Creative jobs
                  </a>{" "}
                  <small>2,481</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/motoring-automotive-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Motoring &amp; Automotive"
                  >
                    Motoring &amp; Automotive jobs
                  </a>{" "}
                  <small>4,403</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/language"
                    className="gtmSectorLink"
                    data-sectorname="Multilingual"
                  >
                    Multilingual jobs
                  </a>{" "}
                  <small>9,987</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/public-sector"
                    className="gtmSectorLink"
                    data-sectorname="Public Sector"
                  >
                    Public Sector jobs
                  </a>{" "}
                  <small>38,346</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/purchasing-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Purchasing"
                  >
                    Purchasing jobs
                  </a>{" "}
                  <small>1,587</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/recruitment-consultancy-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Recruitment Consultancy"
                  >
                    Recruitment Consultancy jobs
                  </a>{" "}
                  <small>7,632</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/retail-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Retail"
                  >
                    Retail jobs
                  </a>{" "}
                  <small>11,512</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/sales-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Sales"
                  >
                    Sales jobs
                  </a>{" "}
                  <small>9,068</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/science-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Scientific"
                  >
                    Scientific jobs
                  </a>{" "}
                  <small>1,480</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/security-safety-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Security &amp; Safety"
                  >
                    Security &amp; Safety jobs
                  </a>{" "}
                  <small>1,967</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/social-care-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Social Care"
                  >
                    Social Care jobs
                  </a>{" "}
                  <small>12,698</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/strategy-consultancy-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Strategy &amp; Consultancy"
                  >
                    Strategy &amp; Consultancy jobs
                  </a>{" "}
                  <small>3,022</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/temporary"
                    className="gtmSectorLink"
                    data-sectorname="Temporary"
                  >
                    Temporary jobs
                  </a>{" "}
                  <small>37,402</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/training-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Training"
                  >
                    Training jobs
                  </a>{" "}
                  <small>943</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs/logistics-jobs"
                    className="gtmSectorLink"
                    data-sectorname="Transport &amp; Logistics"
                  >
                    Transport &amp; Logistics jobs
                  </a>{" "}
                  <small>12,787</small>
                </span>
              </li>
              <li>
                <span className="elem">
                  <a
                    href="/jobs?salaryfrom=50000"
                    className="gtmSectorLink"
                    data-sectorname="£50k+"
                  >
                    £50k+ jobs
                  </a>{" "}
                  <small>37,461</small>
                </span>
              </li>
            </ul>
          </div>
          <div
            className="see-more-block"
            data-bind="visible: seeMoreBySectors()"
            style={{display: "none"}}
          >
            <a href="/" data-bind="click: closeMoreBySectorsClick">
              Close <i className="icon icon-arrow-blue-up"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBy;
