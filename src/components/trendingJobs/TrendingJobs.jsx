import React from "react";

function TrendingJobs() {
  return (
    <section className="trending-promo container container-max-width-modifier">
      <div className="row">
        <h2 className=" text-center trending-job-title">Trending jobs</h2>
        <div className="desktop-content new-trending-jobs">
          <a
            className="btn btn-secondary"
            href="/jobs/work-from-home-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="work_from_home_jobs"
          >
            Work from home jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/immediate-start-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="immediate_start_jobs"
          >
            Immediate start jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/manager-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="manager_jobs"
          >
            Manager jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/finance-jobs?keywords=finance&amp;parentsector=accountancy-qualified"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="finance_jobs_jobs"
          >
            Finance jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/warehouse-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="warehouse_jobs"
          >
            Warehouse jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/accountant-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="accountant_jobs"
          >
            Accountant jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/administrator-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="administrator_jobs"
          >
            Administrator jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/part-time"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="part_time_jobs"
          >
            Part time jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/receptionist-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="receptionist_jobs"
          >
            Receptionist jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/customer-service-jobs?keywords=customer-service&amp;parentsector=customer-service"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="customer_service_jobs"
          >
            Customer service jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/data-entry-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="data_entry_jobs"
          >
            Data entry jobs
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/graduate-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="graduate_jobs"
          >
            Graduate jobs
          </a>
        </div>
        <div className="mobile-content new-trending-jobs">
          <a
            className="btn btn-secondary"
            href="/jobs/work-from-home-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="work_from_home_jobs"
          >
            Work from home
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/immediate-start-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="immediate_start_jobs"
          >
            Immediate
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/manager-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="manager_jobs"
          >
            Manager
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/finance-jobs?keywords=finance&amp;parentsector=accountancy-qualified"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="finance_jobs_jobs"
          >
            Finance
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/warehouse-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="warehouse_jobs"
          >
            Warehouse
          </a>
          <a
            className="btn btn-secondary"
            href="/jobs/accountant-jobs"
            data-gtm="jobseeker_trending_jobs_click"
            data-gtm-value="accountant_jobs"
          >
            Accountant
          </a>
          <div
            className="new-trending-jobs see-more-trending-job"
            data-bind="visible: !seeMoreSectors()"
          >
            <span data-bind="click: seeMoreSectorsClick">
              See more <i className="icon icon-arrow-blue-down"></i>
            </span>
          </div>
          <div
            data-bind="visible: seeMoreSectors()"
            className="other-brending-job new-trending-jobs"
            style={{display: "none"}}
          >
            <a
              className="btn btn-secondary"
              href="/jobs/administrator-jobs"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="administrator_jobs"
            >
              Administrator
            </a>
            <a
              className="btn btn-secondary"
              href="/jobs/part-time-jobs"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="part_time_jobs"
            >
              Part time
            </a>
            <a
              className="btn btn-secondary"
              href="/jobs/receptionist-jobs"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="receptionist_jobs"
            >
              Receptionist
            </a>
            <a
              className="btn btn-secondary"
              href="/jobs/customer-service-jobs?keywords=customer-service&amp;parentsector=customer-service"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="customer_service_jobs"
            >
              Customer service
            </a>
            <a
              className="btn btn-secondary"
              href="/jobs/data-entry-jobs"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="data_entry_jobs"
            >
              Data entry
            </a>
            <a
              className="btn btn-secondary"
              href="/jobs/graduate-jobs"
              data-gtm="jobseeker_trending_jobs_click"
              data-gtm-value="graduate_jobs"
            >
              Graduate
            </a>
          </div>
          <div
            className="new-trending-jobs see-more-trending-job"
            data-bind="visible: seeMoreSectors()"
            style={{display: "none"}}
          >
            <span data-bind="click: closeMoreSectorsClick">
              Close <i className="icon icon-arrow-blue-up"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingJobs;
