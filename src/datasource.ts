import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from '@grafana/data';

import { MyQuery, MyDataSourceOptions } from './types';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range!.from.valueOf();
    const to = range!.to.valueOf();

    const data = options.targets.map((target) => {
      
      if (target.queryText === 'error') {
        throw new Error('Simulated API Error: You typed "error" to test handling!');
      }

      console.log('Query ID:', target.refId);
      console.log('User typed:', target.queryText);

      const frame = new MutableDataFrame({
        refId: target.refId,
        fields: [
          { name: 'Time', type: FieldType.time },
          { name: 'Value', type: FieldType.number },
        ],
      });

     
      for (let time = from; time < to; time += 60000) { 
        frame.add({
          Time: time,
          Value: Math.random() * 100,
        });
      }
      return frame;
    });

    return { data };
  }

  async testDatasource() {
   
    return {
      status: 'success',
      message: 'Success: Connected to Arda Karaer\'s Datasource',
    };
  }
}
