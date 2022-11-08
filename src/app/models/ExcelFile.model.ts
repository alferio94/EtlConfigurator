export interface excelFile {
  fileName: string;
  sheets: excelSheet[];
}

export interface excelSheet {
  sheetName: string;
  columns: sheetColumn[];
}

export interface sheetColumn {
  columnName: string;
  dataType: string;
  config: columnConfiguration;
}

export interface columnConfiguration {
  required: boolean;
  trimData: boolean;
  negativeData: boolean;
  default?: any;
  maxSize?: number;
  minSize?: number;
  maxValue?: number;
  minValue?: number;
}
export interface dataType {
  dataType: string;
  label: string;
}
