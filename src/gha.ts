import { appendFile } from 'node:fs/promises'

export async function appendGha(title: string, message: string) {
  const file = Bun.env['GITHUB_STEP_SUMMARY']
  if (!file) return

  const body = ` # ${title}

${message}`

  await appendFile(file, body)
}
