const Services = () => {
  // st stephen green
  const lat = 23.7224651;
  const lon = 90.3998015;
  const zoom = 16; // 15 is ideal

  return (
    <div className="Comp1">
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
      ></iframe>
    </div>
  );
};

export default Services;
