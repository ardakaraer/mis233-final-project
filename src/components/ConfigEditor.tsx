import React, { ChangeEvent } from 'react';
import { InlineField, Input } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions } from '../types'; // <--- FIXED PATH

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

export function ConfigEditor(props: Props) {
  const { onOptionsChange, options } = props;

  const onPathChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsonData = {
      ...options.jsonData,
      path: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  return (
    <div className="gf-form-group">
      <div className="gf-form">
        <InlineField label="Path" labelWidth={12}>
          <Input
            onChange={onPathChange}
            value={options.jsonData.path || ''}
            placeholder="json-field"
            width={40}
          />
        </InlineField>
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold', color: '#32a852' }}>
        Plugin Developed by: Arda Karaer
      </div>
    </div>
  );
}