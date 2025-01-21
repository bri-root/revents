import EventListItem from "./EventListItem"
import { AppEvent } from "../../../app/types/event"
type Props = {
  events: AppEvent[]
}
function EventList({events}: Props) {
  return (
    <>
    {events.map((event) => (
      <EventListItem key={event.id} event={event}/>
    ))}
    </>
  )
}

export default EventList