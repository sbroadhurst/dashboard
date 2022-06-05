import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Search,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../public/data/dummy'
import Header from '../components/Header'

function customers() {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header title="Customers" category="Page" />
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Search', 'Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default customers
