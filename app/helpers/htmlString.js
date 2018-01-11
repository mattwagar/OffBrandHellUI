import Ember from 'ember';

export function htmlString([content]/*, hash*/) {
    return Ember.String.htmlSafe(content);  
}

export default Ember.Helper.helper(htmlString);
