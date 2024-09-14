export type Event = {
  id: string,
  eventName: string,
  dateStart: string,
  dateEnd: string,
  dateRegisterEnd: string,
  location: string,
  eventManager: {
    name: string,
    contingentName: string
  }
}

export type AllEvents = {
  ongoing: Event[],
  finished: Event[]
}
