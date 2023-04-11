import { create } from 'mochawesome';
import merge from 'mochawesome-merge';
import generator from 'mochawesome-report-generator';
import { PluginConfig } from 'cypress/plugins';


export default (on: any, config: PluginConfig) => {
  on('after:run', async (results) => {
    const reportOptions = {
      reportDir: 'cypress/reports',
      reportFilename: 'cypress-report.json',
      reportTitle: 'Cypress Report',
      overwrite: false,
      timestamp: new Date().getTime(),
    };

    const mergedResults = await merge(reportOptions);
    await generator.create(reportOptions)(mergedResults);
  });
};
