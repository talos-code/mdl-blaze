// Auth form block

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveForms } from 'meteor/templates:forms';

ReactiveForms.createFormBlock({
  template: 'authFormBlock',
  submitType: 'normal',
});

Template.authFormBlock.helpers({
  authInProgress() {
    return Meteor.loggingIn();
  },
});

Template.authFormBlock.events({
  // Highlight focused row
  'focus .auth-textfield'(e) {
    $(e.currentTarget).parent('.auth-row').addClass('is-active');
  },
  // Remove highlight from row on blur
  'blur .auth-textfield'(e) {
    $(e.currentTarget).parent('.auth-row').removeClass('is-active');
  },
});
