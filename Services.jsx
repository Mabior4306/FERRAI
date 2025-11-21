import Card from '../components/Card'
export default function Services(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="UI/UX Design" text="Design systems & prototypes" image="/src/assets/feature-placeholder.svg" />
        <Card title="Frontend Development" text="React & Tailwind implementations" image="/src/assets/feature-placeholder.svg" />
      </div>
    </section>
  )
}
