import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'qekvcijc',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
      'skYObHfC8qCJrYVKHUKoaQenVybMKB0EUnaxoajqewK5DPjTX6gKbVBr6HeCl39S2LMjlnaBNhnEn9jz6jXTNWAC4Sgz2taLdTkZ6B5LXSae5WbxUsIpvQ55OWTj6m3BfIbUi2tbe5wQdN21KQIyD2xQMYVsysOuVCcMEtqlMOHtSnFnjk8G',
    useCdn: false,
  })