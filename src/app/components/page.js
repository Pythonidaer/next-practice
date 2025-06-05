export const metadata = {
  title: 'Secret Page',
  description: 'Only accessible if not blocked by middleware'
};

import WorkoutCardsPanel from '../../components/WorkoutCardsPanel';

export default function SecretPage() {
  return <WorkoutCardsPanel />;
}