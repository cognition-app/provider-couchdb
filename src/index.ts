import PouchDB from 'pouchdb-browser'
import ProviderSettingsSchema from './schema/settings'

export default (ctx: ProviderSettingsSchema) => {
  const settings = ctx

  throw new Error('omg')

  return new PouchDB(settings.name, settings)
}
