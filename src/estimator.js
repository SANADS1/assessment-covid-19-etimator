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
    
    const svInfectionsByRequestedTime = sCurrentlyInfected  (2 * (Math.trunc(timeToElapse / 3)));
    const svSevereCasesByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.15);
    const svHospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - svSevereCasesByRequestedTime);
    const svCasesForICUByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.05);
    const svCasesForVentilatorsByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.02);
    const svDollarsInFlight = Math.trunc((svInfectionsByRequestedTime,  avgDailyIncomePopulation,  avgDailyIncomeInUSD) / timeToElapse);

    return{
        data,
        impact: {
            currentlyInfected,
            infectionsByRequestedTime,
            severeCasesByRequestedTime,
            hospitalBedsByRequestedTime,
            casesForICUByRequestedTime,
            casesForVentilatorsByRequestedTime,
            dollarsInFlight
          },
    }
  
};

export default covid19ImpactEstimator;
