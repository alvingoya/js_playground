const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);
const oneSecond = () => 1000;
const log = message => console.log(message);
const clear = () => console.clear();
const getCurrentTime = () => new Date();

const serializeTime = () => ({
    hours: getCurrentTime().getHours(),
    minutes: getCurrentTime().getMinutes(),
    seconds: getCurrentTime().getSeconds(),
    ampm: getCurrentTime().getHours() < 12 ? "AM" : "PM"
});

const normalizeHours = time => ({
    ...time,
    hours: time.hours > 12 ? time.hours - 12 : time.hours
});

const civilianTime = time => ({
    ...time,
    hours: time.hours < 10 ? "0" + time.hours : time.hours,
    minutes: time.minutes < 10 ? "0" + time.minutes : time.minutes,
    seconds: time.seconds < 10 ? "0" + time.seconds : time.seconds
});

const display = time => {
    log(`${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`);
}

const start = () =>
    setInterval(
        compose(
            clear,
            serializeTime,
            normalizeHours,
            civilianTime,
            display
        ), oneSecond()
    );


start();