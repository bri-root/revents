import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";

function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList/>
      </Grid.Column>
      <GridColumn width={6}>
        <EventForm/>
      </GridColumn>
    </Grid>

  )
}

export default EventDashboard