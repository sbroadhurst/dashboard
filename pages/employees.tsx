import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../public/data/dummy'
import Header from '../components/Header'

function employees() {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header title="Employees" category="Page" />
      <GridComponent width="auto" dataSource={employeesData} allowPaging allowSorting toolbar={['Search']}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default employees
