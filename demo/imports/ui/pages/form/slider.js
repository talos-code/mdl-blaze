// Helpers textInput

import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Template.sliderDemo.helpers({
  selectSchema() {
    return new SimpleSchema({
      demoField: {
        type: String,
      },
    });
  },
  action() {
    return function (els, callbacks, changed) {
      console.log('[forms] Action running!');
      console.log('[forms] Form data!', this);
      console.log('[forms] HTML elements with `.reactive-element` class!', els);
      console.log('[forms] Callbacks!', callbacks);
      console.log('[forms] Changed fields!', changed);
      callbacks.success(); // Display success message.
      callbacks.reset();   // Run each Element's custom `reset` function to clear the form.
    };
  },
  sliderOptions() {
    return {
      min: 0,
      max: 100,
      value: 25,
      step: 1,
    };
  },
  sliderOptionsDisabled() {
    return {
      min: 0,
      max: 100,
      value: 25,
      step: 1,
      disabled: 'disabled',
    };
  },
});
