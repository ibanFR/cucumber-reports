'use server'

import { envelopesStore } from '@/store'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteReport(id: string) {
  await envelopesStore.delete(id)
  revalidatePath(`/reports/${id}`)
  redirect('/?deleted=true')
}