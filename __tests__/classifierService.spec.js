const testList = require('../database/test-list')
const classifierService = require('../services/classifierService')

/* describe("Verificação de acurácia do algoritmo", () => { ... }) */

testList.forEach(item => {

  test(`Essa notícia é ${item.label} e foi classificada como ${!item.label}:  ${item.text}`,  async () => {
    let label = await classifierService(item.text)
    expect(label).toBe(item.label)

    /* await expect(classifierService(item.text)).resolves.toBe(item.label)
    await expect(classifierService(item.text)).rejects.toThrow('error'); */
  })
})