import  Container  from "../Container";

export const RecentlyAddedCart = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="size-32 rounded-full object-" src={img} alt="" />

      <h5 className="text-center mt-1">{title}</h5>
    </div>
  );
};

const RecentlyAdded = () => {
  return (
    <Container>
      <section className="flex flex-col gap-3 py-5">
        <div>
          <h3 className="font-semibold text-center text-xl">Recently added</h3>
          <p className="text-center">Must have pieces selected every month</p>
        </div>
        <div className="flex items-center justify-evenly flex-wrap gap-5 ">
          <RecentlyAddedCart
            title={"Dresses"}
            img={
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=60"
            }
          />

          <RecentlyAddedCart
            title={"Sneakers"}
            img={
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
            }
          />

          <RecentlyAddedCart
            title={"Handbags"}
            img={
              "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60"
            }
          />

          <RecentlyAddedCart
            title={"Accessories"}
            img={
              "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&auto=format&fit=crop&q=60"
            }
          />

          <RecentlyAddedCart
            title={"Blazers"}
            img={
              "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60"
            }
          />

          <RecentlyAddedCart
            title={"Watches"}
            img={
              "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60"
            }
          />
        </div>
      </section>
    </Container>
  );
};

export default RecentlyAdded;
