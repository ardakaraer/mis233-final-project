import { DataSourceJsonData } from '@grafana/data';
import { DataQuery } from '@grafana/schema';

export interface MyQuery extends DataQuery {
  queryText?: string;
}

export const defaultQuery: Partial<MyQuery> = {
  queryText: '',
};

export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}
