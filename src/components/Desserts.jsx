import DessertItem from "./DessertItem";

export default function Desserts({ desserts }) {
  return (
    <main className="main-section">
      <section className="main-section-header">
        <h1 className="heading-1">Desserts</h1>
      </section>

      <div className="main-section-content">
        <ul className="dessert-list">
          {desserts.length >= 0 ? (
            desserts.map((dessert) => (
              <DessertItem key={dessert?.name} dessertObj={dessert} />
            ))
          ) : (
            <p>Data Fetching</p>
          )}
        </ul>
      </div>
    </main>
  );
}
