/* eslint-disable no-shadow */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73
  },
  periodType: 'days',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874

};


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
  const infectionsByRequestedTime = currentlyInfected(2 * (Math.trunc(timeToElapse / 3)));
  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  const hospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const dollarsInFlight = Math.trunc((infectionsByRequestedTime, avgDailyIncomePopulation, avgDailyIncomeInUSD) / timeToElapse);

  const svInfectionsByRequestedTime = svCurrentlyInfected(2 * (Math.trunc(timeToElapse / 3)));
  const svSevereCasesByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.15);
  const svHospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - svSevereCasesByRequestedTime);
  const svCasesForICUByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.05);
  const svCasesForVentilatorsByRequestedTime = Math.trunc(svInfectionsByRequestedTime * 0.02);
  const svDollarsInFlight = Math.trunc((svInfectionsByRequestedTime, avgDailyIncomePopulation, avgDailyIncomeInUSD) / timeToElapse);

  return {
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

    severeImpact: {
      currentlyInfected: svCurrentlyInfected,
      infectionsByRequestedTime: svInfectionsByRequestedTime,
      severeCasesByRequestedTime: svSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: svHospitalBedsByRequestedTime,
      casesForICUByRequestedTime: svCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: svCasesForVentilatorsByRequestedTime,
      dollarsInFlight: svDollarsInFlight

    }
  };
};

export default covid19ImpactEstimator;
