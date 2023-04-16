// tracing.js
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const exporter = new OTLPTraceExporter({
  url: '/v1/traces',
  headers: { 'Content-Type': 'application/json' }
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'frontend',
  }),
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager()
});

import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
// import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

// ...general opentelemetry configuration

registerInstrumentations({
  instrumentations: [
    new XMLHttpRequestInstrumentation({
      propagateTraceHeaderCorsUrls: [
         /api.+/g, //Regex to match your backend urls. This should be updated.
      ]
    })
    // ,
    // new FetchInstrumentation({
    //   propagateTraceHeaderCorsUrls: [
    //      /.+/g, //Regex to match your backend urls. This should be updated.
    //   ]
    // }),
  ],
});



// import { W3CTraceContextPropagator } from '@opentelemetry/core';
// import { ZoneContextManager } from '@opentelemetry/context-zone';
// import { CollectorTraceExporter as HTTPTraceExporter } from '@opentelemetry/exporter-collector';
// import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
// import { BatchSpanProcessor } from '@opentelemetry/tracing';
// import { Resource }  from '@opentelemetry/resources';
// import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

// const tracerProvider = new WebTracerProvider({
//   resource: new Resource({ [SemanticResourceAttributes.SERVICE_NAME]: 'frontend' }),
// });

// tracerProvider.addSpanProcessor(
//   // @ts-expect-error BatchSpanProcessor is considered incompatible with SpanProcessor
//   new BatchSpanProcessor(
//     new HTTPTraceExporter({
//       url: `/v1/traces`,
//       headers: { 'Content-Type': 'application/json' },
//     }),
//   ),
// );

// tracerProvider.register({
//   contextManager: new ZoneContextManager(),
//   propagator: new W3CTraceContextPropagator(),
// });