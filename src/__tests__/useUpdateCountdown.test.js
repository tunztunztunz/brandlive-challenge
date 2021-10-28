import updateCountdown from "../utils/useUpdateCountdown";

test('returns the correct time object after not running for any amount of time', () => {
  // Set's the initial date
  const today = new Date(1635462150495);
  // Set the event date to be 7 days in the future
  let eventDay = today;
  eventDay.setDate(eventDay.getDate() + 7);
  eventDay = eventDay.getTime();
  // use the same date above inside the function's new Date().
  jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(1635462150495) 
  // since it is running once it should return 7 days exactly.
  const correctTimeObject = {
    days: '7',
    hours: '0',
    minutes: '00',
    seconds: '00'
  } 
  const timeObject = updateCountdown(eventDay)
  expect(timeObject).toEqual(correctTimeObject)
})
