export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <section>
          <h1 className="font-medium text-2xl leading-6">
            Pawsome <span className="font-semibold">Pro</span>
          </h1>
          <p className="text-lg opacity-80">
            Manage your pet daycare with ease.
          </p>
        </section>
        <section className="text-center">
          <p className="text-2xl font-bold leading-6">2</p>
          <p className="opacity-80">Current guests.</p>
        </section>
      </div>
    </main>
  );
}
