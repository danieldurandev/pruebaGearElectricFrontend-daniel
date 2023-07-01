export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div class="spinner-border text-primary" role="status" style={{width:"100px", height:"100px"}}>
        <span class="sr-only"></span>
      </div>
        <h1 className="text-secondary">Cargando</h1>
    </div>
  );
};
