function Header({guestList}) {
  return (
    <div>
      <header>
        <h1>Prim Proper Props</h1>
      </header>
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
    </div>
  );
}

export default Header;
