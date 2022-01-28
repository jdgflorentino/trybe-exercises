const wakeup = () => 'Acordado';
const coffee = () => 'Bora tomar café';
const sleep = () => 'Partiu dormir';

const doingThings = (callback) => console.log(callback());

doingThings(wakeup);
doingThings(coffee);
doingThings(sleep);