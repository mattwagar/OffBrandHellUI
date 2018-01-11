import Ember from 'ember';

export function mmddyy([dateStr]/*, hash*/) {

  var date = new Date(dateStr);

  var day = date.getDate();
  var monthIndex = date.getMonth() + 1;
  var year = date.getFullYear();

  return monthIndex + '/' + day + '/' + year%2000;
}

export default Ember.Helper.helper(mmddyy);
