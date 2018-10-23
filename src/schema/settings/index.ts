import JSONLD from '@cognition-app/schema/dist/base/json-ld'

/**
 * CouchDB Provider configuration
 */
export default
  interface ProviderConfig
  extends
    JSONLD<
      'https://raw.githubusercontent.com/cognition-app/provider-couchdb/master/dist/schema/settings'
    >,
    PouchDB.Configuration.LocalDatabaseConfiguration,
    PouchDB.Configuration.RemoteDatabaseConfiguration
  {
  /**
   * PouchDB name
   */
  name: string
}
