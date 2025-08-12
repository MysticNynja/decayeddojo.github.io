import React from 'react'
import { TinaProvider, TinaCMS } from 'tinacms'
import { TinaAdmin } from '@tinacms/app'

// Minimal Admin shell. For local editing, run: `yarn dev:cms` (starts Tina dev server + Vite)
export const Admin: React.FC = () => {
  const cms = React.useMemo(() => new TinaCMS(), [])
  return (
    <div className="min-h-screen bg-dojo-ink text-dojo-ice">
      <TinaProvider cms={cms}>
        <TinaAdmin />
      </TinaProvider>
    </div>
  )
}