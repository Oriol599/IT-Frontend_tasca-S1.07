test('23_es2021-1: Logical assignment operators (&&=, ||=, ??=)', () => {
  // Modifica les variables `a`, `b` i `c` utilitzant els operadors d’assignació lògica (`&&=`, `||=` i `??=`) i fes que el test passi.
  let a = true
  let b = false
  let c = null

  // Resol aquí...
  a &&= "assigned";
  b ||= "default";
  c ??= "fallback";

  expect(a).toBe('assigned')
  expect(b).toBe('default')
  expect(c).toBe('fallback')
})

test('23_es2021-2: Numeric separators improve readability', () => {
  // Canvia `null` per un número gran utilitzant separadors numèrics (`_`) per millorar la llegibilitat i fes que el test passi.
  const largeNumber = null // Resol aquí...

  expect(largeNumber).toBe(1000000)
})

test('23_es2021-3: Promise.any returns the first resolved promise', async () => {
  // Utilitza `await` amb `Promise.any()` per obtenir la primera promesa resolta i fes que el test passi.
  const promises = [
    Promise.reject('Error'),
    Promise.resolve('First resolved'),
    Promise.resolve('Second resolved'),
  ]

  const result = await Promise.any(promises)

  expect(result).toBe('First resolved')
})