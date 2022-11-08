import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { dataTypesArray } from 'src/app/models/DataTypes';
import { dataType } from 'src/app/models/ExcelFile.model';

@Component({
  selector: 'app-dinamyc-form',
  templateUrl: './dinamyc-form.component.html',
  styleUrls: ['./dinamyc-form.component.scss'],
})
export class DinamycFormComponent implements OnInit {
  dataTypes: dataType[] = dataTypesArray;
  configurationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configurationForm = this.fb.group({
      fileName: ['', [Validators.required, Validators.minLength(5)]],
      sheets: this.fb.array([]),
    });
  }
  getSheets(): FormArray {
    return this.configurationForm.get('sheets') as FormArray;
  }
  newSheet(): FormGroup {
    return this.fb.group({
      sheetName: ['', [Validators.required, Validators.minLength(4)]],
      columns: this.fb.array([]),
    });
  }
  addSheet() {
    this.getSheets().push(this.newSheet());
  }
  removeSheet(sheetIndex: number) {
    this.getSheets().removeAt(sheetIndex);
  }
  getColumns(sheetIndex: number): FormArray {
    return this.getSheets().at(sheetIndex).get('columns') as FormArray;
  }
  newColumn(): FormGroup {
    return this.fb.group({
      columnName: ['', [Validators.required, Validators.minLength(4)]],
      dataType: ['', Validators.required],
      config: this.fb.array([]),
    });
  }
  addColumn(sheetIndex: number) {
    this.getColumns(sheetIndex).push(this.newColumn());
  }
  removeColumn(sheetIndex: number, columnIndex: number) {
    this.getColumns(sheetIndex).removeAt(columnIndex);
  }
  onSubmit() {
    console.log(this.configurationForm.value);
  }
  ngOnInit(): void {
    this.addSheet();
  }
}
