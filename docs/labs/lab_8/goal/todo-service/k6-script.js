import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // From https://grafana.com/docs/k6/latest/testing-guides/test-types/breakpoint-testing/#breakpoint-testing-in-k6
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '2m', target: 1 }, // just slowly ramp-up to a HUGE load
  ],

  // From https://grafana.com/docs/k6/latest/examples/get-started-with-k6/test-for-performance/#ramp-up-until-threshold-fails
  // thresholds: {
  //   http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }], // http errors should be less than 1%, otherwise abort the test
  //   http_req_duration: ['p(99)<1000'], // 99% of requests should be below 1s
  // },
};

export default function () {
  http.get('http://EcsSta-TodoS-E6IPhrBGhavh-1485234785.eu-central-1.elb.amazonaws.com/'); // Replace me as necessary
  sleep(1);
}
