export const getPastBookings = (items) => {
    const pastBookings = items.filter((item) => {
        return (new Date().getTime() > new Date(item.checkin).getTime())
    })
    return pastBookings;
}

export const getUpcomingBookings = (items) => {
    const upcomingBooking = items.filter((item) => {
        return (new Date().getTime() < new Date(item.checkin).getTime())
    })
    return upcomingBooking;
}