import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // From https://grafana.com/docs/k6/latest/testing-guides/test-types/breakpoint-testing/#breakpoint-testing-in-k6
    executor: 'ramping-arrival-rate', //Assure load increase if the system slows
    stages: [
      { duration: '1m', target: 10000 }, // just slowly ramp-up to a HUGE load
    ],

    // From https://grafana.com/docs/k6/latest/examples/get-started-with-k6/test-for-performance/#ramp-up-until-threshold-fails
    thresholds: {
      http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }], // http errors should be less than 1%, otherwise abort the test
      http_req_duration: ['p(99)<1000'], // 99% of requests should be below 1s
    },
  };

export default function () {
  http.get('http://EcsSta-TodoS-hKPZQ8ey4tgS-530246449.eu-central-1.elb.amazonaws.com/todos/a7134953-447c-4d4b-a955-24b46d479071'); // replace me
  sleep(1);
}