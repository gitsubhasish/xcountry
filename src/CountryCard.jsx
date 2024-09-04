const CountryCard = ({ cnt }) => {
  return (
    <div className="col-md-2 mt-3" key={cnt.name.common}>
      <div
        class="card"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "2px",
          padding: 20,
          height: 150,
        }}
      >
        <img
          class="card-img-top"
          src={cnt.flags.png}
          alt={cnt.name.common}
          style={{ height: 85 }}
        />
        <div class="card-body">
          <p class="card-text">{cnt.name.common}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
