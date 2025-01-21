import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useState, useEffect } from 'react'
import { AppEvent } from "../../../app/types/event"

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}

function EventDashboard({ formOpen, setFormOpen }: Props) {

  const [events, setEvents] =useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData);
  }, [])

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}/>
      </Grid.Column>
      <GridColumn width={6}>
        {formOpen &&
        <EventForm setFormOpen={setFormOpen}/>}
      </GridColumn>
    </Grid>

  )
}

export default EventDashboard