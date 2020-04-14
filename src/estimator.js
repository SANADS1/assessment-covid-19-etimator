const covid19ImpactEstimator = (data) => {
    const { reportedCases, periodType, totalHospitalBeds } = data;
    let { timeToElapse } = data;
    const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = data.region;
  
    const currentlyInfected = reportedCases * 10;
    const svCurrentlyInfected = reportedCases * 50;
  
    if (periodType === 'weeks') {
      timeToElapse *= 7;
    } else if (periodType === 'months') {
      timeToElapse *= 30;
    }
    const infectionsByRequestedTime = currentlyInfected  (2 * (Math.trunc(timeToElapse / 3)));
    const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
    const hospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - severeCasesByRequestedTime);
    const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
    const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
    const dollarsInFlight = Math.trunc((infectionsByRequestedTime,  avgDailyIncomePopulation,  avgDailyIncomeInUSD) / timeToElapse);
};

export default covid19ImpactEstimator;
