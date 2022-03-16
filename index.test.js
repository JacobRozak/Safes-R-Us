const unlockSafe = require('.')

describe('Suite of tests on unlockSafe', () => {
    it.each`
      user              | password
      ${'Donald Trump'} | ${'Unauthorised access to safe'}
      ${'Arnole wavv'}  | ${'Magic Wand'}
      ${'Hnwstmn'}      | ${'Oscar nomination'}
      ${'David Lindley'}| ${'Chocolate Brownie'}
    `('should return password of "$password" for user "$user"', async ({ user, password }) => {
    expect(await unlockSafe(user)).toBe(password)
  })
})
