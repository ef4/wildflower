import { helper as buildHelper } from '@ember/component/helper';

export default buildHelper(function([parts], hash) {
  let conjunction = hash['with'] || 'and';
  if (!parts) { return ''; }
  if (parts.length > 2) {
    return parts.slice(0, -1).join(', ') + `, ${conjunction} ${parts[parts.length - 1]}`;
  } else if (parts.length === 2) {
    return `${parts[0]} ${conjunction} ${parts[1]}`;
  } else {
    return parts[0] || '';
  }
});
