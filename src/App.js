import React from 'react'
import Categories from './categories'


function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
      </section>
    </main>
  )
}

export default App
