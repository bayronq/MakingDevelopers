// Configuration
import defaultConfig from '../config/default.json';
import developmentConfig from '../config/development.json';

// Config container
let config;

/**
 * Returns api node
 *
 * @param {string} env Forcing environment
 * @returns {string} api
 */
export function $api(env) {
  return $config(env).api;
}

/**
 * Returns appName node
 *
 * @param {string} env Forcing environment
 * @returns {string} appName
 */
export function $appName(env) {
  return $config(env).appName;
}

/**
 * Returns baseUrl node
 *
 * @param {string} env Forcing environment
 * @returns {string} baseUrl
 */
export function $baseUrl(env) {
  return $config(env).baseUrl;
}

/**
 * Returns cache node
 *
 * @param {string} env Forcing environment
 * @returns {object} cache
 */
export function $cache(env) {
  return $config(env).cache;
}

/**
 * Returns the selected environment configuration
 *
 * @param {string} env Forcing environment
 * @returns {object} Config
 */
export function $config(env) {
  if (!config) {
    config = defaultConfig;

    if (developmentConfig.enableConfig || env === 'development') {
      config = developmentConfig;
    }
  }

  return config;
}

/**
 * Returns dashboard node
 *
 * @param {string} env Forcing environment
 * @returns {string} dashboard
 */
export function $dashboard(env) {
  return $config(env).dashboard;
}

/**
 * Returns db node
 *
 * @param {string} env Forcing environment
 * @returns {object} db
 */
export function $db(env) {
  return $config(env).db;
}

/**
 * Returns html node
 *
 * @param {string} env Forcing environment
 * @returns {object} html
 */
export function $html(env) {
  return $config(env).html;
}

/**
 * Returns languages node
 *
 * @param {string} env Forcing environment
 * @returns {object} languages
 */
export function $languages(env) {
  return $config(env).languages;
}

/**
 * Returns security node
 *
 * @param {string} env Forcing environment
 * @returns {object} security
 */
export function $security(env) {
  return $config(env).security;
}

/**
 * Returns serverPort node
 *
 * @param {string} env Forcing environment
 * @returns {number} serverPort
 */
export function $serverPort(env) {
  return $config(env).serverPort;
}

/**
 * Returns session node
 *
 * @param {string} env Forcing environment
 * @returns {object} session
 */
export function $session(env) {
  return $config(env).session;
}

/**
 * Returns social node
 *
 * @param {string} env Forcing environment
 * @returns {object} social
 */
export function $social(env) {
  return $config(env).social;
}

/**
 * Returns views node
 *
 * @param {string} env Forcing environment
 * @returns {object} views
 */
export function $views(env) {
  return $config(env).views;
}

/**
 * Returns webpack node
 *
 * @param {string} env Forcing environment
 * @returns {object} webpack
 */
export function $webpack(env) {
  return $config(env).webpack;
}
