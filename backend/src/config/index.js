import dotenv from 'dotenv'
if (require.resolve) {
  // are we in a nodejs environment?
  dotenv.config({ path: require.resolve('../../.env') })
}

const {
  MAPBOX_TOKEN,
  JWT_SECRET,
  PRIVATE_KEY_PASSPHRASE,
  SMTP_IGNORE_TLS = true,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SENTRY_DSN_BACKEND,
  COMMIT,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_ENDPOINT,
  AWS_REGION,
  AWS_BUCKET,
  NEO4J_URI = 'bolt://localhost:7687',
  NEO4J_USERNAME = 'neo4j',
  NEO4J_PASSWORD = 'neo4j',
  CLIENT_URI = 'http://localhost:3000',
  GRAPHQL_URI = 'http://localhost:4000',
} = process.env

export const requiredConfigs = {
  MAPBOX_TOKEN,
  JWT_SECRET,
  PRIVATE_KEY_PASSPHRASE,
}

if (require.resolve) {
  // are we in a nodejs environment?
  Object.entries(requiredConfigs).map(entry => {
    if (!entry[1]) {
      throw new Error(`ERROR: "${entry[0]}" env variable is missing.`)
    }
  })
}

export const smtpConfigs = {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_IGNORE_TLS,
  SMTP_USERNAME,
  SMTP_PASSWORD,
}
export const neo4jConfigs = { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD }
export const serverConfigs = {
  CLIENT_URI,
  GRAPHQL_URI,
  PUBLIC_REGISTRATION: process.env.PUBLIC_REGISTRATION === 'true',
}

export const developmentConfigs = {
  DEBUG: process.env.NODE_ENV !== 'production' && process.env.DEBUG,
  DISABLED_MIDDLEWARES:
    (process.env.NODE_ENV !== 'production' && process.env.DISABLED_MIDDLEWARES) || '',
}

export const sentryConfigs = { SENTRY_DSN_BACKEND, COMMIT }

export const s3Configs = {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_ENDPOINT,
  AWS_REGION,
  AWS_BUCKET,
}

export default {
  ...requiredConfigs,
  ...smtpConfigs,
  ...neo4jConfigs,
  ...serverConfigs,
  ...developmentConfigs,
  ...sentryConfigs,
  ...s3Configs,
}
