export const metadata = {
    title: 'Secret Page',
    description: 'Only accessible if not blocked by middleware'
  };
  
  export default function SecretPage() {
    return (
      <div>
        <h1>🔒 Secret Page</h1>
        <p>If you’re seeing this, the middleware allowed access.</p>
      </div>
    );
  }