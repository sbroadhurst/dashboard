import React from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../../public/data/dummy'
import Header from '../../components/Header'

function calendar() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header title="Calendar" category="App" />
      <ScheduleComponent
        height={'650px'}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2022, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default calendar
