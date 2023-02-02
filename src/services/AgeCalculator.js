export default (dob) => {
    let currentDate = new Date();
    let birthDate = new Date(dob);

    return Math.floor((currentDate - birthDate) / 31557600000);
}