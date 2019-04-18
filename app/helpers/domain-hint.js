import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([url]) {
  let m = /^.*\/\/([^/]+)/.exec(url);
  if (m) {
    return m[1];
  }
});
