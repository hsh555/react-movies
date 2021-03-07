const changeMinuteToHour = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes - (hours * 60)
    return `${hours}h ${minutes}m`;
}

export const handleLoading = (component) => {
    const loading_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return loading_items.map(() => component);
}

export { changeMinuteToHour };