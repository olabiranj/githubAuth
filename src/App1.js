import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [incomeUSD, setIncomeUSD] = useState("");
  const [incomePop, setIncomePop] = useState("");
  const [period, setPeriod] = useState("");
  const [items] = useState([
    {
      label: "Days",
      value: "days",
    },
    {
      label: "Weeks",
      value: "weeks",
    },
    {
      label: "Months",
      value: "months",
    },
  ]);
  const [time, setTime] = useState("");
  const [RC, setRC] = useState("");
  const [pop, setPop] = useState("");
  const [THB, setTHB] = useState("");

  const estimate = (e) => {
    const data = {
      region: {
        name: name,
        avgAge: age,
        avgDailyIncomeInUSD: incomeUSD,
        avgDailyIncomePopulation: incomePop,
      },
      periodType: period,
      timeToElapse: time,
      reportedCases: RC,
      population: pop,
      totalHospitalBeds: THB,
    };
    const output = {
      data: { ...data }, // the input data you got
      impact: {}, // your best case estimation
      severeImpact: {}, // your severe case estimation
    };

    const getHospitalBedsByRequestedTime = (
      totalHospitalBeds,
      severeCasesByRequestedTime
    ) => {
      let useableBedSpace = Math.floor(totalHospitalBeds * 0.35);
      return useableBedSpace - severeCasesByRequestedTime;
    };

    output.impact.currentlyInfected = data.reportedCases * 10;
    output.severeImpact.currentlyInfected = data.reportedCases * 50;
    output.impact.infectionsByRequestedTime =
      output.impact.currentlyInfected * 512;
    output.severeImpact.infectionsByRequestedTime =
      output.severeImpact.currentlyInfected * 512;
    output.impact.severeCasesByRequestedTime = Math.floor(
      output.impact.infectionsByRequestedTime * 0.15
    );
    output.severeImpact.severeCasesByRequestedTime = Math.floor(
      output.severeImpact.infectionsByRequestedTime * 0.15
    );
    output.impact.HospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
      data.totalHospitalBeds,
      output.impact.severeCasesByRequestedTime
    );
    output.severeImpact.HospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
      data.totalHospitalBeds,
      output.severeImpact.severeCasesByRequestedTime
    );
    output.impact.casesForICUByRequestedTime = Math.floor(
      output.impact.severeCasesByRequestedTime * 0.05
    );
    output.severeImpact.casesForICUByRequestedTime = Math.floor(
      output.severeImpact.severeCasesByRequestedTime * 0.05
    );
    output.impact.casesForVentilatorsByRequestedTime = Math.floor(
      output.impact.severeCasesByRequestedTime * 0.02
    );
    output.severeImpact.casesForVentilatorsByRequestedTime = Math.floor(
      output.severeImpact.severeCasesByRequestedTime * 0.02
    );
    output.impact.dollarsInFlight = Math.floor(
      output.impact.severeCasesByRequestedTime *
        data.region.avgDailyIncomePopulation *
        data.region.avgDailyIncomeInUSD *
        data.timeToElapse
    );
    output.severeImpact.dollarsInFlight = Math.floor(
      output.severeImpact.severeCasesByRequestedTime *
        data.region.avgDailyIncomePopulation *
        data.region.avgDailyIncomeInUSD *
        data.timeToElapse
    );

    // output object
    // return { ...output };
    e.preventDefault();
    console.log(output);
  };

  return (
    <>
      <section class="contact-section set-bg spad bg-img">
        <div class="container-fluid contact-warp">
          <div class="contact-text">
            <div class="container p-3">
              <span class="sp-sub-title">Olabiran Joshua</span>
              <h3 class="sp-title">#BuildForSDG Cohort-1 Assessment</h3>
              <p>
                Yes, the virus only kills a small percentage of those afflicted.
                Yes, the flu kills 10s of thousands of people annually. Yes, 80%
                of people will experience lightweight symptoms with COVID19. Yes
                the mortality rate of COVID19 is relatively low (1–2%). All of
                this true, but is immaterial. They are the wrong numbers to
                focus on…
              </p>
              <ul class="con-info">
                <li>-- Jason S Warner</li>
              </ul>
            </div>
          </div>
          <div class="container p-0">
            <div class="row">
              <div class="col-xl-8 offset-xl-4">
                <form class="contact-form" onSubmit={estimate}>
                  <div class="py-4 text-center my-4">
                    <h3 class="text-light">COVID-19 Impact Estimator</h3>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        required
                        placeholder="Region Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="avgAge"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        step="0.01"
                        required
                        placeholder="Region Average Age"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="avgDailyIncomeInUSD"
                        value={incomeUSD}
                        onChange={(e) => setIncomeUSD(e.target.value)}
                        required
                        step="0.01"
                        type="number"
                        placeholder="Region Average Daily Income"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="avgDailyIncomePopulation"
                        value={incomePop}
                        onChange={(e) => setIncomePop(e.target.value)}
                        required
                        step="0.01"
                        type="number"
                        placeholder="Region Average Daily Income Population"
                      />
                    </div>
                    <div class="col-md-6">
                      <select
                        id="periodType"
                        onClick={(e) => setPeriod(e.currentTarget.value)}
                      >
                        {items.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="col-md-6">
                      <input
                        id="timeToElapse"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        type="number"
                        required
                        placeholder="Time To Elapse"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="reportedCases"
                        value={RC}
                        onChange={(e) => setRC(e.target.value)}
                        type="number"
                        required
                        placeholder="Reported Cases"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="population"
                        value={pop}
                        onChange={(e) => setPop(e.target.value)}
                        type="number"
                        required
                        placeholder="Population"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        id="totalHospitalBeds"
                        value={THB}
                        onChange={(e) => setTHB(e.target.value)}
                        type="number"
                        required
                        placeholder="Total Hospital Beds"
                      />
                    </div>
                    <div class="col-md-7">
                      <button class="site-btn light">Estimate</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                COVID-19 Impact Estimator
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="card-title">Impact</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Currently Infected{" "}
                    <span
                      id="currentlyInfected1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Infections By Requested Time{" "}
                    <span
                      id="infectionsByRequestedTime1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Severe Cases By Requested Time{" "}
                    <span
                      id="severeCasesByRequestedTime1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Hospital Beds By Requested Time{" "}
                    <span
                      id="HospitalBedsByRequestedTime1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Cases For ICU By Requested Time{" "}
                    <span
                      id="casesForICUByRequestedTime1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Cases For Ventilators By Requested Time{" "}
                    <span
                      id="casesForVentilatorsByRequestedTime1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Dollars In Flight
                    <span
                      id="dollarsInFlight1"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                </ul>
              </div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Severe Impact</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Currently Infected{" "}
                    <span
                      id="currentlyInfected2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Infections By Requested Time{" "}
                    <span
                      id="infectionsByRequestedTime2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Severe Cases By Requested Time{" "}
                    <span
                      id="severeCasesByRequestedTime2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Hospital Beds By Requested Time{" "}
                    <span
                      id="HospitalBedsByRequestedTime2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Cases For ICU By Requested Time{" "}
                    <span
                      id="casesForICUByRequestedTime2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Cases For Ventilators By Requested Time{" "}
                    <span
                      id="casesForVentilatorsByRequestedTime2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                  <li class="list-group-item">
                    Dollars In Flight
                    <span
                      id="dollarsInFlight2"
                      class="float-right font-weight-bold"
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer-section spad">
        <div class=" text-center">
          <h2>Let’s work together!</h2>
          <p>Olabiran Joshua</p>
          <div class="social">
            <br />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
