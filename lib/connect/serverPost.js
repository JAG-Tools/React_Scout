import request from 'request';
import options from './options';

export default function postTree(tree) {
  options.body = JSON.stringify(tree || {});

  request(options, (error, response) => {
    if (!error && response.statusCode === 200) {
      console.log(response.body);
    } else {
      console.log('Didn\'t go through!');
    }
  });
}
