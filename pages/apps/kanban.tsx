import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../../public/data/dummy'
import Header from '../../components/Header'

function kanban() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header title="Kanban" category="App" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'ID' }}
        keyField="Status">
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default kanban
