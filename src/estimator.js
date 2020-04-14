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
};

export default covid19ImpactEstimator;
