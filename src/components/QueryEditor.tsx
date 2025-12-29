import React, { ChangeEvent } from 'react';
import { InlineField, Input } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';

type MyQuery = {
  queryText?: string;
};

type MyDataSourceOptions = {};

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, queryText: event.target.value });
    onRunQuery();
  };

  return (
    <div className="gf-form">
      <InlineField label="Query Text" labelWidth={16}>
        <Input
          onChange={onQueryTextChange}
          value={query.queryText || ''}
          placeholder="Enter query parameters" 
          width={25}
        />
      </InlineField>
      <div style={{ marginLeft: '10px', alignSelf: 'center', fontStyle: 'italic' }}>
        Developed by Arda Karaer
      </div>
    </div>
  );
}
