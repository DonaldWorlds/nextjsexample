// app/isr/page.tsx
import { fetchNames } from '../utils/fetch-names';

export default async function ISRPage() {
  const names = await fetchNames();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const revalidate = 10; // Revalidate the page every 10 seconds