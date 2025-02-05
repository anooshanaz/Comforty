export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)



export const token = assertValue(
  "skUWHc48ld01XNi5cSKSRbmg9fugoc1ahOy2lkeHJ8aE2KivevSGrDEX97SClrQZgkNAbUoGyIbC7SLRVDMA3CVdmNb2ePs31ugafeqsZ7B0XcEPbU0UWqfPPtPXitVxfkLrOW6Nkzx8haqbx3aEqLYCLsP7MaF6XX9XdkvrOz3jucZ3U2Uf",
  'Missing environment variable: NEXT_PUBLIC_SANITY_AUTH_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
