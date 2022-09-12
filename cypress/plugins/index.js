/// <reference types="cypress" />
const fs = require('fs-extra');
const path = require('path');

function buscarArquivoConfig(arquivo) {
  const caminhoArquivo = path.resolve('./cypress/config', `${arquivo}.json`)
  return fs.readJSON(caminhoArquivo)
}
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const arquivo = config.env.configFile || "dev"
  return buscarArquivoConfig(arquivo)
}
