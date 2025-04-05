export interface EmptyObject {
  id: string
  putUrl: string
}

export interface RetrievedObject {
  getUrl: string
}

export interface EnvelopesStore {
  touch: () => Promise<EmptyObject>
  retrieve: (id: string) => Promise<RetrievedObject | undefined>
  delete: (id: string) => Promise<void>
}
