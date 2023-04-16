
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './tracing'

import { trace, context } from '@opentelemetry/api';

const tracer = trace.getTracer("@opentelemetry/api");

tracer.startActiveSpan('document_load', span => {
  //start span when navigating to page
  span.setAttribute('pageUrlwindow', window.location.href);
  window.onload = (event) => {
    // ... do loading things
    // ... attach timing information
    span.end(); //once page is loaded, end the span
  };

  // button.clicked = (event) => {
  //   tracer.startActiveSpan('button_clicked', btnSpan => {
  //     // Add your attributes to describe the button clicked here
  //     btnSpan.setAttribute('some.attribute', 'some.value');

  //     btnSpan.end();
  //   });
  // }
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
