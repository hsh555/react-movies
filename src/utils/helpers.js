export const changeMinuteToHour = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes - (hours * 60)
    return `${hours}h ${minutes}m`;
}

export const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
